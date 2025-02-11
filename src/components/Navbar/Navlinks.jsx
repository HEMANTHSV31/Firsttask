import React from 'react'
// import Home from '../pages/Home'
// import About from '../pages/About'
// import Bookings from '../pages/Bookings'
import { Navigate, useNavigate } from 'react-router-dom'
import '../../styles/navbar.css'
import useStore from '../../store/store';
function Navlinks() {

    const navigate = useNavigate();
 const {islogin,username}=useStore()
    return (
        <nav>
            <ul>
               <li onClick={()=>navigate('/')}>Home</li> 
               <li onClick={()=>navigate('/About')}>About</li>
               <li onClick={()=>navigate('/Contact')}>Contact</li>
               {!islogin &&<li onClick={()=>navigate('/Login')}>Login</li>}
               {islogin &&<li>{username}</li>}
            </ul>
        </nav>
    )
}

export default Navlinks