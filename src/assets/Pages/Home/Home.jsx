// import PropTypes from 'prop-types';

import AboutUs from "../../Components/AboutUs/AboutUs";
import HomeBanner from "../../Components/Carousel/HomeBanner";
import Contact from "../../Components/Contact/Contact";
import OurServices from "../../Components/OurServices/OurServices";


const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <AboutUs/>
            <OurServices/>
            <Contact/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;