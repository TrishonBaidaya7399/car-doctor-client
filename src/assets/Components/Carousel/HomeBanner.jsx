import { Link } from "react-router-dom";
import img1 from "../../images/images/banner/1.jpg";
import img2 from "../../images/images/banner/2.jpg";
import img3 from "../../images/images/banner/3.jpg";
import img4 from "../../images/images/banner/4.jpg";
import img5 from "../../images/images/banner/5.jpg";
import img6 from "../../images/images/banner/6.jpg";


const HomeBanner = () => {
  return (
    <div>
      <div className="carousel rounded-lg mt-6 mx-[20px] md:mx-[50px] lg:mx-[100px]">
        <div id="slide1" className="carousel-item relative w-full">
          <div>
            <img src={img1} className="w-full" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute z-10  flex flex-col text-white top-0 justify-center left-0 h-full p-[20px] md:p-[50px] lg:p-[100px] gap-4 md:gap-8">
              <h1 className="text-[20px] md:text-[30px] lg:text-[60px] font-extrabold w-full lg:w-2/5">Affordable Price For Car Servicing</h1>
              <p className="text-[10px] md:text-[18px] font-semibold w-full my-[-10px] w-full lg:w-2/5 ">
                There are many variations of passages available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ">
                <Link className="btn bg-orange-500 text-white text-[10px] md:text-[14px] lg:text-xl font-semibold border-2 border-orange-500 hover:bg-[transparent] hover:text-white hover:border-2 hover:border-white">
                  Discover More
                </Link>
                <Link className="btn border-2 border-white bg-[transparent] text-white text-[10px] md:text-[14px] lg:text-xl font-semibold hover:bg-orange-500 hover:border-orange-500">
                  Latest Project
                </Link>
              </div>
            </div>
            <div className="absolute z-10 flex justify-end transform -translate-y-1/2 left-5 right-5 top-[100%] md:top-[90%] gap-8">
              <a href="#slide6" className="btn btn-circle border-none text-white text-md md:text-xl bg-gray-300/40">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle border-none text-white text-xl bg-orange-500 text-white">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div>
            <img src={img2} className="w-full" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute z-10  flex flex-col text-white top-0 justify-center left-0 h-full p-[20px] md:p-[50px] lg:p-[100px] gap-4 md:gap-8">
              <h1 className="text-[20px] md:text-[30px] lg:text-[60px] font-extrabold w-full lg:w-2/5">Affordable Price For Car Servicing</h1>
              <p className="text-[10px] md:text-[18px] font-semibold w-full my-[-10px] w-full lg:w-2/5 ">
                There are many variations of passages available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ">
                <Link className="btn bg-orange-500 text-white text-[10px] md:text-[14px] lg:text-xl font-semibold border-2 border-orange-500 hover:bg-[transparent] hover:text-white hover:border-2 hover:border-white">
                  Discover More
                </Link>
                <Link className="btn border-2 border-white bg-[transparent] text-white text-[10px] md:text-[14px] lg:text-xl font-semibold hover:bg-orange-500 hover:border-orange-500">
                  Latest Project
                </Link>
              </div>
            </div>
            <div className="absolute z-10 flex justify-end transform -translate-y-1/2 left-5 right-5 top-[100%] md:top-[90%] gap-8">
              <a href="#slide1" className="btn btn-circle border-none text-white text-md md:text-xl bg-gray-300/40">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle border-none text-white text-xl bg-orange-500 text-white">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div>
            <img src={img3} className="w-full" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute z-10  flex flex-col text-white top-0 justify-center left-0 h-full p-[20px] md:p-[50px] lg:p-[100px] gap-4 md:gap-8">
              <h1 className="text-[20px] md:text-[30px] lg:text-[60px] font-extrabold w-full lg:w-2/5">Affordable Price For Car Servicing</h1>
              <p className="text-[10px] md:text-[18px] font-semibold w-full my-[-10px] w-full lg:w-2/5 ">
                There are many variations of passages available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ">
                <Link className="btn bg-orange-500 text-white text-[10px] md:text-[14px] lg:text-xl font-semibold border-2 border-orange-500 hover:bg-[transparent] hover:text-white hover:border-2 hover:border-white">
                  Discover More
                </Link>
                <Link className="btn border-2 border-white bg-[transparent] text-white text-[10px] md:text-[14px] lg:text-xl font-semibold hover:bg-orange-500 hover:border-orange-500">
                  Latest Project
                </Link>
              </div>
            </div>
            <div className="absolute z-10 flex justify-end transform -translate-y-1/2 left-5 right-5 top-[100%] md:top-[90%] gap-8">
              <a href="#slide2" className="btn btn-circle border-none text-white text-md md:text-xl bg-gray-300/40">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle border-none text-white text-xl bg-orange-500 text-white">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div>
            <img src={img4} className="w-full h-full" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute z-10  flex flex-col text-white top-0 justify-center left-0 h-full p-[20px] md:p-[50px] lg:p-[100px] gap-4 md:gap-8">
              <h1 className="text-[20px] md:text-[30px] lg:text-[60px] font-extrabold w-full lg:w-2/5">Affordable Price For Car Servicing</h1>
              <p className="text-[10px] md:text-[18px] font-semibold w-full my-[-10px] w-full lg:w-2/5 ">
                There are many variations of passages available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ">
                <Link className="btn bg-orange-500 text-white text-[10px] md:text-[14px] lg:text-xl font-semibold border-2 border-orange-500 hover:bg-[transparent] hover:text-white hover:border-2 hover:border-white">
                  Discover More
                </Link>
                <Link className="btn border-2 border-white bg-[transparent] text-white text-[10px] md:text-[14px] lg:text-xl font-semibold hover:bg-orange-500 hover:border-orange-500">
                  Latest Project
                </Link>
              </div>
            </div>
            <div className="absolute z-10 flex justify-end transform -translate-y-1/2 left-5 right-5 top-[100%] md:top-[90%] gap-8">
              <a href="#slide3" className="btn btn-circle border-none text-white text-md md:text-xl bg-gray-300/40">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle border-none text-white text-xl bg-orange-500 text-white">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <div>
            <img src={img5} className="w-full" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute z-10  flex flex-col text-white top-0 justify-center left-0 h-full p-[20px] md:p-[50px] lg:p-[100px] gap-4 md:gap-8">
              <h1 className="text-[20px] md:text-[30px] lg:text-[60px] font-extrabold w-full lg:w-2/5">Affordable Price For Car Servicing</h1>
              <p className="text-[10px] md:text-[18px] font-semibold w-full my-[-10px] w-full lg:w-2/5 ">
                There are many variations of passages available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ">
                <Link className="btn bg-orange-500 text-white text-[10px] md:text-[14px] lg:text-xl font-semibold border-2 border-orange-500 hover:bg-[transparent] hover:text-white hover:border-2 hover:border-white">
                  Discover More
                </Link>
                <Link className="btn border-2 border-white bg-[transparent] text-white text-[10px] md:text-[14px] lg:text-xl font-semibold hover:bg-orange-500 hover:border-orange-500">
                  Latest Project
                </Link>
              </div>
            </div>
            <div className="absolute z-10 flex justify-end transform -translate-y-1/2 left-5 right-5 top-[100%] md:top-[90%] gap-8">
              <a href="#slide4" className="btn btn-circle border-none text-white text-md md:text-xl bg-gray-300/40">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle border-none text-white text-xl bg-orange-500 text-white">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <div>
            <img src={img6} className="w-full" />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute z-10  flex flex-col text-white top-0 justify-center left-0 h-full p-[20px] md:p-[50px] lg:p-[100px] gap-4 md:gap-8">
              <h1 className="text-[20px] md:text-[30px] lg:text-[60px] font-extrabold w-full lg:w-2/5">Affordable Price For Car Servicing</h1>
              <p className="text-[10px] md:text-[18px] font-semibold w-full my-[-10px] w-full lg:w-2/5 ">
                There are many variations of passages available, but the majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 ">
                <Link className="btn bg-orange-500 text-white text-[10px] md:text-[14px] lg:text-xl font-semibold border-2 border-orange-500 hover:bg-[transparent] hover:text-white hover:border-2 hover:border-white">
                  Discover More
                </Link>
                <Link className="btn border-2 border-white bg-[transparent] text-white text-[10px] md:text-[14px] lg:text-xl font-semibold hover:bg-orange-500 hover:border-orange-500">
                  Latest Project
                </Link>
              </div>
            </div>
            <div className="absolute z-10 flex justify-end transform -translate-y-1/2 left-5 right-5 top-[100%] md:top-[90%] gap-8">
              <a href="#slide5" className="btn btn-circle border-none text-white text-md md:text-xl bg-gray-300/40">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle border-none text-white text-xl bg-orange-500 text-white">
                ❯
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomeBanner;
