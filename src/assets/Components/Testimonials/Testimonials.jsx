import { FaQuoteRight } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
  };

  useEffect(() => {
    fetch('http://localhost:5000/testimonials')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-[20px] md:px-[50px] lg:px-[100px] py-12">
      <div className="text-center md:w-1/2 mx-auto">
        <p className="text-xl text-orange-500 font-bold pb-1">Testimonial</p>
        <h1 className="text-[45px] font-bold">What Customers Say</h1>
        <p className="text-[16px] text-gray-400 font-semibold pt-4">
          The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
        </p>
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Slider className="my-12 " {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial._id} className="z-10 card border-2 border-gray-200 rounded-lg p-12 space-y-4 mx-7">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img className="rounded-full w-[80px] h-[80px] border-2 border-orange-500 p-1" src={testimonial.image} alt="" />
                    <div>
                      <h1 className="text-[25px] text-gray-700 font-bold">{testimonial.name}</h1>
                      <h1 className="text-xl font-bold text-gray-400">{testimonial.occupation}</h1>
                    </div>
                  </div>
                  <FaQuoteRight className="text-[50px] text-orange-500 opacity-70" />
                </div>
                <div className="text-md text-gray-500">
                  <p>{testimonial.quote}</p>
                </div>
                <div className="flex opacity-90">
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <AiFillStar key={index} className="text-[30px] text-orange-500" />
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
