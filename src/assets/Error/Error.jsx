// import PropTypes from 'prop-types';
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";
import errorImg from "../images/images/error/error.png"
const Error = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex items-center justify-center h-[80vh]">
      <img src={errorImg} alt="" />
      </div>
      <Footer/>
    </div>
  );
};

Error.propTypes = {
  
};

export default Error;