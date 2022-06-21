import { Navigate } from "react-router-dom"
import BandSection from "../components/BandSection/BandSection"

function BandPage() {

    // const userSelector = userSelector((state)=>state.auth)

    // if(userSelector?.role !== 'admin')
    // {
    //     return <Navigate to='/' />
    // }

    return (
        <BandSection/>
    )
}

export default BandPage