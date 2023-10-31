// import PropTypes from 'prop-types';
import Banner from "../../Shared/Banner/Banner";
import { FiCornerUpLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RotatingLines } from  'react-loader-spinner'

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data =>{
          setServices(data);
          setLoading(false);
        })
    })

    return (
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] ">
            <Banner address={"Services"}/>
        <div className="overflow-x-auto my-[20px] md:my-[50px] lg:my-[80px]">
        {
          loading
          ? 
          <div className='flex items-center justify-center'>
    <RotatingLines
    strokeColor="orange"
    strokeWidth="5"
    animationDuration="0.75"
    width="120"
    visible={true}
    />
    </div>
          : 
          <>
           {
            services.length>0 
            ?
            <>
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
            </>
            :
            <div className='flex flex-col items-center justify-center'>
                <h1 className="text-2xl md:text-4xl text-center text-orange-500 font-bold mb-4">SERVICES NOT AVAILABLE!</h1>
                <img className='w-[80%] md:w-[50%] lg:w-[30%]' src="https://i.ibb.co/G3CRDJD/vecteezy-no-child-labour-vector-icon-design-21343097.jpg" alt="" />
            </div> 
         }
          </>
        }
             <div className='flex justify-between mt-8 md:mx-[100px]'>
                <Link to="/" className='flex gap-2 text-xl text-gray-500 font-semibold items-center'><FiCornerUpLeft/>Back to Home</Link>
             </div>
        </div>
            </div>
            );
};

Services.propTypes = {
    
};

export default Services;