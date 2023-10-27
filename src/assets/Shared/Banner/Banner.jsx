import PropTypes from 'prop-types';

import banner from "../../images/images/checkout/checkout.png";

const Banner = ({address}) => {
    return (
        <div className="relative ">
            <div className="flex ">
                <div className="relative mx-[100px] mt-12">
                    <img src={banner} alt="" className="w-[100vw] mx-auto rounded-lg" />
                    <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute z-10 top-0 h-full rounded-lg w-full">
                        <h1 className="text-[45px] font-bold text-white pl-12 pt-[10%] w-full">Check Out</h1>
                        <div className="flex justify-center absolute bottom-0 left-0 right-0">
                            <h1 className="text-center bg-orange-500 p-2 rounded-lg w-[300px] text-white font-bold text-xl border-orange-500">{`Home / ${address}`}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    address: PropTypes.string,
};

export default Banner;
