// import PropTypes from 'prop-types';
import timetableIcon from "../../images/icons/timetable.png"
import phoneIcon from "../../images/icons/phone Icon.png"
import locationIcon from "../../images/icons/location icon.png"
const Contact = () => {
    return (
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] text-white bg-black rounded-lg my-[100px]">
            <div className="flex justify-center lg:justify-between gap-8 lg:gap-8 flex-wrap items-center p-[20px] md:p-[30px] lg:p-[60px]">
                <div className="flex gap-2 items-center">
                <img className="w-[50px] h-[50px]" src={timetableIcon} alt="" />
                <div className="flex flex-col gap-1">
                    <p className="text-[16px]">We are open monday-friday</p>
                    <p className="text-[25px] font-bold">7:00 am - 9:00 pm</p>
                </div>
                </div>
                <div className="flex gap-2 items-center">
                <img className="w-[50px] h-[50px]" src={phoneIcon} alt="" />
                <div className="flex flex-col gap-1">
                    <p className="text-[16px]">Have a question?</p>
                    <p className="text-[25px] font-bold">+2546 251 2658</p>
                </div>
                </div>
                <div className="flex gap-2 items-center">
                <img className="w-[50px] h-[50px]" src={locationIcon} alt="" />
                <div className="flex flex-col gap-1">
                    <p className="text-[16px]">Need a repair? our address</p>
                    <p className="text-[25px] font-bold">Liza Street, New York</p>
                </div>
                </div>
            </div>
        </div>
    );
};

Contact.propTypes = {
    
};

export default Contact;