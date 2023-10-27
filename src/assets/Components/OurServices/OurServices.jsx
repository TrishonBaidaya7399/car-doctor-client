// import PropTypes from 'prop-types';
import { useEffect, useState } from "react"
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";

const OurServices = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=> {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data =>setServices(data))
    }
    ,[])
    return (
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] mb-12">
            <div className="text-center md:w-1/2 mx-auto">
                <p className="text-xl text-orange-500 font-bold pb-1">Service</p>
                <h1 className="text-[45px] font-bold">Our Service Area</h1>
                <p className="text-[16px] text-gray-400 font-semibold pb-12 pt-4">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 mb-12">
              {
                services.map(service => 
              <div key={service._id} className="flex flex-col gap-2 p-5 border-2 border-gray-200 rounded-lg">
                <img src={service.img} alt="" className="rounded-lg w-full h-[250px]" />
                <h1 className="text-[24px] font-bold">{service.title}</h1>
                <div className="text-xl flex justify-between font-semibold text-orange-500">
                  <p>Price : ${service.price}</p>
                  <Link to={`/checkout/${service._id}`}><FiArrowRight/></Link>
                </div>
              </div>
              )
              }
            </div>
            <div className="text-center">
            <button className="text-xl text-orange-500 border-2 border-orange-500 bg-[transparent] px-4 py-2 rounded-md font-bold">More Services</button>
            </div>
        </div>
    );
};

OurServices.propTypes = {
    
};

export default OurServices;