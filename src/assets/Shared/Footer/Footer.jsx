// import PropTypes from 'prop-types';
import { BsGoogle, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import footerLogo from "../../images/logo/logo.png"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
<footer className="footer p-10 bg-black text-base-content flex flex-col md:grid md:grid-cols-1 lg:grid-cols-4 text-white py-[50px] md:py-[100px] px-[20px] md:px-[50px] lg:px-[100px] gap-12 lg:gap-[100px]">
          
  <aside className="">
    <img src={footerLogo} alt="Logo" />
    <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
    <div className="socialIcons flex gap-4 mt-5">
      <div className="google text-xl p-2 rounded-full bg-gray-600 text-bg-white">
        <Link>
        <BsGoogle/>
        </Link>
      </div>
      <div className="twitter text-xl p-2 rounded-full bg-gray-600 text-bg-white">
        <Link>
        <BsTwitter/>
        </Link>
      </div>
      <div className="instagram text-xl p-2 rounded-full bg-gray-600 text-bg-white">
        <Link>
        <BsInstagram/>
        </Link>
      </div>
      <div className="linkedin text-xl p-2 rounded-full bg-gray-600 text-bg-white">
        <Link>
        <BsLinkedin/>
        </Link>
      </div>

    </div>
  </aside> 

  <nav className="flex flex-col">
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="flex flex-col">
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="flex flex-col">
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

Footer.propTypes = {
    
};

export default Footer;