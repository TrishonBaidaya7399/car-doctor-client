// import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo.svg"
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const links = 
<>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8"} to="/"><li>Home</li></NavLink>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8"} to="/about"><li>About</li></NavLink>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8"} to="/service"><li>Services</li></NavLink>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200 mr-0 lg:mr-8"} to="/blog"><li>Blog</li></NavLink>
    <NavLink className={({isActive})=> isActive ? "text-orange-500 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200" : "text-gray-700 font-semibold hover:text-orange-500 text-[18px] font-semibold duration-200"} to="/contact"><li>Contact</li></NavLink>
</>

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      alert('Logout Successfully!')
    })
    .catch(error => {
      console.error(error.message)
    })
  }
    return (
        <div className="navbar bg-base-100 px-[20px] md:px-[50px] lg:px-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="text-2xl"/>
            </label>
            <ul tabIndex={0} className="bg-base-100 drop-shadow-lg p-4 flex gap-2 menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box">
           {links}
           <div className="flex gap-4 block md:hidden">
           <NavLink><AiOutlineShoppingCart className="text-[28px] text-gray-700 hover:text-orange-500 duration-200"/></NavLink>
           <NavLink><AiOutlineSearch className="text-[28px] text-gray-700 hover:text-orange-500 duration-200"/></NavLink>
           {
            user 
            ? (<FiLogOut onClick={handleLogOut} className="text-[28px] text-gray-700 hover:text-orange-500 duration-200"/>)
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
        <div className="navbar-end flex gap-5">
          <NavLink><AiOutlineShoppingCart className="text-[28px] text-gray-700 hover:text-orange-500 duration-200 hidden md:block"/></NavLink>
          <NavLink><AiOutlineSearch className="text-[28px] text-gray-700 hover:text-orange-500 duration-200 hidden md:block"/></NavLink>
          {
            user 
            ? (<FiLogOut onClick={handleLogOut} className="text-[28px] text-gray-700 hover:text-orange-500 duration-200" alt="logout"/>)
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