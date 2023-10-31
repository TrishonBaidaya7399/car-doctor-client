// import PropTypes from 'prop-types';
import teamPic from "../../images/icons/group.svg"
// import timePic from "../../images/icons/Group 38729.svg"
import supportPic from "../../images/icons/person.svg"
import equipmentPic from "../../images/icons/Wrench.svg"
import guaranteePic from "../../images/icons/check.svg"
import deliveredPic from "../../images/icons/deliveryt.svg"

import { IoMdTimer } from 'react-icons/io';



const WhyChooseUs = () => {
    return (
<div className="mx-[20px] md:mx-[50px] lg:mx-[100px] mb-12">
    <div className="text-center md:w-1/2 mx-auto">
      <p className="text-xl text-orange-500 font-bold pb-1">Core Features</p>
      <h1 className="text-[45px] font-bold">Why Choose Us</h1>
      <p className="text-[16px] text-gray-400 font-semibold pb-12 pt-4">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className=" h-[150px] rounded-lg border-2 border-gray-200 p-4 flex flex-col justify-center items-center hover:bg-orange-500 text-gray-700 hover:text-white duration-200">
            <div className="">
                <img className="" src={teamPic} alt="" />
            </div>
            <h1 className="text-lg font-bold text-center mt-2">Expert Team</h1>
        </div>
        <div className=" h-[150px] rounded-lg border-2 border-gray-200 p-4 flex flex-col justify-center items-center hover:bg-orange-500 text-gray-700 hover:text-white duration-200">
            <div className="">
                <IoMdTimer className="text-[70px]"/>
            </div>
            <h1 className="text-lg font-bold text-center mt-2">Timely Delivery</h1>
        </div>
        <div className=" h-[150px] rounded-lg border-2 border-gray-200 p-4 flex flex-col justify-center items-center hover:bg-orange-500 text-gray-700 hover:text-white duration-200">
            <div className="">
                <img className="" src={supportPic} alt="" />
            </div>
            <h1 className="text-lg font-bold text-center mt-2">24/7 Support</h1>
        </div>
        <div className=" h-[150px] rounded-lg border-2 border-gray-200 p-4 flex flex-col justify-center items-center hover:bg-orange-500 text-gray-700 hover:text-white duration-200">
            <div className="">
                <img className="" src={equipmentPic} alt="" />
            </div>
            <h1 className="text-lg font-bold text-center mt-2">Best Equipment</h1>
        </div>
        <div className=" h-[150px] rounded-lg border-2 border-gray-200 p-4 flex flex-col justify-center items-center hover:bg-orange-500 text-gray-700 hover:text-white duration-200">
            <div className="">
                <img className="" src={guaranteePic} alt="" />
            </div>
            <h1 className="text-lg font-bold text-center mt-2">100% Guranty</h1>
        </div>
        <div className=" h-[150px] rounded-lg border-2 border-gray-200 p-4 flex flex-col justify-center items-center hover:bg-orange-500 text-gray-700 hover:text-white duration-200">
            <div className="">
                <img className="" src={deliveredPic} alt="" />
            </div>
            <h1 className="text-lg font-bold text-center mt-2">Timely Delivery</h1>
        </div>
       
    </div>
</div>
    );
};

WhyChooseUs.propTypes = {
    
};

export default WhyChooseUs;