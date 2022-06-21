import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function ProtectedPage({
    children,
    needLogin = false,
    guestOnly = false,
    authRoles = []
}){

    const userSelector = useSelector((state)=> state.auth)
    
    if(needLogin && !userSelector.id)
    {
        return <Navigate to='/'/>
    }

    if(guestOnly && userSelector.id)
    {
        return <Navigate to='/'/>
    }

    if(authRoles.length && !authRoles.includes(userSelector.role))
    {
        return <Navigate to="/"/>
    }
    
    return children

}

export default ProtectedPage