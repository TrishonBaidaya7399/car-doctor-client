// import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo.svg"
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const links = 
<>

    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8"} to="/"><li>Home</li></NavLink>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8"} to="/about"><li>About</li></NavLink>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8"} to="/services"><li>Services</li></NavLink>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8"} to="/blog"><li>Blog</li></NavLink>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200"} to="/contact"><li>Contact</li></NavLink>
</>

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  console.log(user);
  
  const handleLogOut = ()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
        .then(()=>{
          Swal.fire(
            'Successful!',
            'Your have been logged out successfully!',
            'success'
          )
        })
        .catch(error => {
          console.error(error.message)
        })
      }
    })
   
  }
    return (
        <div className="navbar bg-base-100 px-[20px] md:px-[50px] lg:px-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="text-2xl"/>
            </label>
            <ul tabIndex={0} className="bg-base-100 drop-shadow-lg p-4 flex gap-2 menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box w-[200px]">
            <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-orange-500 p-1">
                <img src={user?.photoURL} />
              </div>
            </div>
            <p className="text-[16px] text-orange-600 font-bold">{user?.displayName}{user?.emailVerified === true ? <p className="text-[14px] text-green-500 ">Verified</p>:<p className="text-red-600 text-[14px]">Not Verified</p>}</p>
            </div>
           {links}
           <div className="flex gap-4 block md:hidden">
           {
            user 
            ? (
              <>
            <NavLink><AiOutlineSearch className="text-[28px] text-gray-700 hover:text-orange-500 duration-200"/></NavLink>
            <NavLink className={({isActive})=> isActive ? "text-orange-500 hover:text-orange-500 duration-200" : "text-gray-700 hover:text-orange-500 duration-200"} to="/cartdetails"><FiShoppingCart className="text-[28px]"/></NavLink>
            <FiLogOut onClick={handleLogOut} className="text-[28px] text-gray-700 hover:text-orange-500 duration-200"/>
              </>
            )
            : (<NavLink to="/login"><FiLogIn className="text-[28px] text-gray-700 hover:text-orange-500 duration-200"/></NavLink>)
           }
           </div>
            </ul>
          </div>
          <a className=""><img className="w-[90%] " src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          {
            user 
            ? (
              <>
            <NavLink className="text-[28px] text-gray-700 hover:text-orange-500 duration-200 hidden md:block"><AiOutlineSearch/></NavLink>
            <NavLink className={({isActive})=> isActive ? "text-orange-500 hover:text-orange-500 duration-200 hidden md:block" : "text-gray-700 hover:text-orange-500 duration-200 hidden md:block"} to="/cartdetails"><FiShoppingCart className="text-[28px]"/></NavLink>
            
            {/* avatar */}
            <div className="dropdown dropdown-end hidden md:block">
            <label tabIndex={0} className="btn btn-ghost btn-circle ring ring-orange-500 avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL ? user.photoURL : ''} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[20] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-[300px] border-[3px] border-orange-500">
            <div className="flex flex-col gap-2 items-start">
           
              <h1 className="text-center text-[24px] rounded-lg font-bold text-orange-500">{user?.displayName ? user.displayName : 'You are logged In'}</h1>
              <p className="text-center text-[16px] font-semibold">{user?.email ? user.email : ''}</p>
              <p className="text-center text-[16px] font-semibold">{user?.emailVerified === true ? "Email is verified" : 'Email is not Verified'}</p>
           
              {user 
              ?<div onClick={handleLogOut} className="flex gap-2 text-orange-500 items-center" >
               <p className="text-center text-[20px] font-semibold">Log Out</p>
               <FiLogOut className="text-[28px]"/>
              </div>
              : ''
              }
            </div>
            </ul>
            </div>
              </>
            )
            : (<NavLink to="/login"><FiLogIn className="text-[28px] text-gray-700 hover:text-orange-500 duration-200" alt="login"/></NavLink>)
           }
          <NavLink className="btn bg-[transparent] hover:bg-orange-500 hover:text-white border-2 border-orange-500 text-orange-500 text-[14px] md:text-[16px] px-6 py-2 ">Appointment</NavLink>
        </div>
      </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;