import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import user_types from '../../redux/reducers/user/types';
import { Button } from '@chakra-ui/react';
const Navbar2 = () => {
const userSelector = useSelector((state) => state.auth)
const counterSelector = useSelector((state) => state.counter)
const dispatch = useDispatch()

function btnLogout(){
  localStorage.removeItem("user_data")

  dispatch ({
    type: user_types.USER_LOGOUT
  })

 
}

if(userSelector.role === 'user')
{
    return (
    <nav>
      <div className='link-wrapper'>
        <Link to="/"> Home</Link> 
        <Link to="/Band"> Band</Link> 
        </div>
        <div className='link-wrapper'>
        <Link to="/"> username: {userSelector.username} </Link> 
            {
            userSelector.id ?
            <Button onClick={btnLogout} color='blue'>Logout</Button>
            :
            <Link to="/login">Login
            </Link>
            }
      </div>
    </nav> 
    )
}
if(userSelector.role === 'admin')
{
    return(
        <nav>
        <div className='link-wrapper'>
        <Link to="/"> Home</Link> 
        <Link to="/Band"> Band</Link> 
        <Link to='/products'> Products</Link>
        </div>
        <div className='link-wrapper'>
        <Link to="/"> username: {userSelector.username} </Link> 
            {
            userSelector.id ?
            <Button onClick={btnLogout} color='blue'>Logout</Button>
            :
            <Link to="/login">Login
            </Link>
            }
        </div>
        </nav>
    )
}
return (
    <nav>
      <div className="link-wrapper">
      <Link to="/"> Home</Link> 
      <Link to="/Contact"> Contact</Link>
      </div>

      <div className='link-wrapper'>
      <Link to='/login'> Login</Link>

      </div>
    </nav>
  )
}

export default Navbar2