// import PropTypes from 'prop-types';
import personImg from "../../images/images/about_us/person.jpg"
import partsImg from "../../images/images/about_us/parts.jpg"
import { Link } from "react-router-dom";
const AboutUs = () => {
    return (
<div className="hero min-h-[80vh] px-[20px] md:px-[50px] mt-12 lg:px-[100px]">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 hidden lg:block relative">
      <img src={personImg} className="w-3/4 lg:w-4/5 rounded-lg drop-shadow-lg" />
      <img src={partsImg} className="absolute w-2/5 lg:w-1/2 right-10 top-1/2 top-1/2 border-[10px] border-white z-10 max-w-sm rounded-lg drop-shadow-lg" />
    </div>    
    <div className="lg:w-1/2 ">
      <p className="text-xl font-bold text-orange-500">About Us</p>
      <h1 className="text-5xl font-bold md:w-3/5  text-[45px]">We are qualified & of experience in this field</h1>
      <div className="lg:w-1/2 block pt-6 lg:hidden relative">
      <img src={personImg} className="w-3/4 lg:w-4/5 rounded-lg drop-shadow-lg" />
      <img src={partsImg} className="absolute w-2/5 lg:w-1/2 right-10 top-1/2 top-1/2 border-[10px] border-white z-10 max-w-sm rounded-lg drop-shadow-lg" />
    </div> 
      <p className="pt-8 md:w-[2/3] text-[16px] text-gray-500">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`} </p>
      <p className="py-4 md:w-[2/3] text-[16px] text-gray-500">{`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}  </p>
      <Link className="btn bg-orange-500 border-2 border-orange-500 text-white hover:bg-[transparent] hover:text-orange-500 text-bold hover:border-orange-500">Get More Info</Link>
    </div>
  </div>
</div>
    );
};

AboutUs.propTypes = {
    
};

export default AboutUs;