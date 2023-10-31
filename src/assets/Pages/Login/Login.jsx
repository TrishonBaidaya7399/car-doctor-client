// import PropTypes from 'prop-types';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import loginBanner from "../../images/images/login/login.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const {signIn, googleSignUp, user} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleLogin = e =>{
    e.preventDefault();
    setLoading(true);
    setError(null)
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result=> {
      const loggedInUser = result.user;
      console.log(loggedInUser)
      const user = { email }
      //get access token
      axios.post(`http://localhost:5000/jwt`, user)
      .then(res =>{
        console.log(res.data);
      })
      setLoading(false)

      Swal.fire({
        title: 'Logged in!',
        text: `${user?.displayName ? user.displayName : 'User'} logged in successfully!`,
        icon: 'success',
        confirmButtonText: 'exit'
      })
      form.reset();
      navigate(location?.state ? location?.state : '/');

    })
    .catch(error=>{
      setLoading(false)
      console.log(error.message);
      setError(error.message)
      Swal.fire({
        title: 'Login Failed!',
        text: `${error.message}`,
        icon: 'error',
        confirmButtonText: 'exit'
      })
    })
  }

  const handleGoogleSignIn = e =>{
    e.preventDefault();
    setLoading(true)
    setError(null);
    googleSignUp()
    .then(result => {
      console.log(`User created with Google : ${result.displayName}`);
      setLoading(false)
      Swal.fire({
        title: 'Logged in!',
        text: `${user?.displayName} logged in successfully!`,
        icon: 'success',
        confirmButtonText: 'exit'
      })
      navigate(location?.state ? location?.state : '/');
    })
    .catch(error=> {
      setLoading(false);
      console.error(error.message);
      Swal.fire({
        title: 'Login Failed!',
        text: `${error.message}`,
        icon: 'error',
        confirmButtonText: 'exit'
      })
    })
  }

    return (
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-4 lg:gap-12 md:my-12">
    <div className="text-center lg:text-left w-2/3 lg:w-1/2">
      <img src={loginBanner} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full lg:w-1/2 border-2 border-gray-300 lg:p-[30px]">
      <h1 className="text-[40px] font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
        </div>
       {
        error &&  <p className="text-red-600 font-semibold">{error}</p>
       }
        <div className="form-control mt-6">
        <input type="submit" value={loading ? 'Signing in...' : 'Sign In'} className="btn bg-orange-500 text-white" />
        </div>
        <div className="form-control mt-6">
            <p className="text-center mb-5 text-gray-500 text-[16px] font-semibold">Or Sign In with</p>
            <div className='flex gap-6 mx-auto'>
                <div className='p-3 text-blue-700 text-xl rounded-full bg-gray-200'><FaFacebookF/></div>
                <div className='p-3 text-blue-600 text-xl rounded-full bg-gray-200'><FaLinkedinIn/></div>
                <div onClick={handleGoogleSignIn} className='p-3 text-xl rounded-full bg-gray-200'><FcGoogle/></div>
            </div>
        </div>
        <div className="form-control mt-6 mx-auto">
            <p className='text-gray-500 font-semibold'>Do not have an account? <Link to="/signup" className='text-orange-500'>Sign Up</Link></p>
        </div>
      </form>
    </div>
    
  </div>
</div>
    );
};

Login.propTypes = {
    
};

export default Login;