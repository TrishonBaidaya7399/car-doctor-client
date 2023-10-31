// import PropTypes from 'prop-types';

import AboutUs from "../../Components/AboutUs/AboutUs";
import HomeBanner from "../../Components/Carousel/HomeBanner";
import Contact from "../../Components/Contact/Contact";
import OurServices from "../../Components/OurServices/OurServices";
import Team from "../../Components/Team/Team";
import Testimonials from "../../Components/Testimonials/Testimonials";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <AboutUs/>
            <OurServices/>
            <Contact/>
            <WhyChooseUs/>
            <Team/>
            <Testimonials/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;