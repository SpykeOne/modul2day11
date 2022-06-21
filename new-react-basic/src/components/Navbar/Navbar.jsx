import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import user_types from '../../redux/reducers/user/types';
import { Button } from '@chakra-ui/react';
const Navbar = () => {
const userSelector = useSelector((state) => state.auth)
const counterSelector = useSelector((state) => state.counter)

const dispatch = useDispatch();

function btnLogout(){

  localStorage.removeItem("user_data")

  dispatch ({
    type: user_types.USER_LOGOUT
  })
}

  return (
    <nav>
      <div className="link-wrapper">
       <Link to="/"> Home</Link> 
       <Link to="/Band"> Band</Link> 
       <Link to="/Contact"> Contact</Link> 
       <Link to="/Contact"> {counterSelector.count}</Link> 

      
      </div>

      <div className='link-wrapper'>
      <Link to="/"> username: {userSelector.username} </Link> 
      <Link to="/"> role: {userSelector.role} </Link> 
      <Link to="/"> email: {userSelector.email} </Link> 
      
    {
      userSelector.id ?
        <Button onClick={btnLogout}>Logout</Button>
        :
        <Link to="/login">Login
        </Link>
      
    }


      </div>
     
    </nav>
    
  )
}

export default Navbar;