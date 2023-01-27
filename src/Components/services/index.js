import React from "react";
import icon1img from "../../assests/img/Vector.jpg";
import icon2 from '../../assests/img/vec1.png'
import icon3 from '../../assests/img/vec2.png'
import icon4 from '../../assests/img/vec3.png'
import icon5 from '../../assests/img/vec4.png'
import icon6 from '../../assests/img/vec5.png'

const Services = () => {
  return (
    <>
      <div className=" mt-[100px] mx-auto">
        <div className="text-center mt-[100px]">
          <h3 className="text-[orange] font-semibold text-[20px] leading-[28px] text-[orange]">
            Our services
          </h3>
          <p className="text-white font-[poppins] font-semibold text-[45px ] leading-[56px] ">
            The various services we provide to make your business more powerful
          </p>
        </div>

        <div className=" grid grid-cols-3 max-auto mx-[80px] gap-5 mt-[30px]">
          <div className="bg-[blue] text-center px-4 mb-[30px] h-[400px] rounded-3xl  ">
            
            <div className="  rounded-[45px] bg-white w-[90px] mx-[130px] mt-[15px] pt-[30px] mb-[10px] h-[92px] px-[30px] mx-auto"> 
              
              <img src={icon1img} />
  
            
            </div>
            <h3 className="font-[poppins] font-semibold  text-[20px] leading-[28px] text-white  ">
              Ideate
            </h3>
            <p className="text-white font-[poppins] font-normal text-[30px] leading-[46px] mt-[20px]">
              We help you develop creative ideas so that your business can grow
              more rapidly{" "}
            </p>
          </div>
          <div className="  bg-[#001138] text-center px-4 mb-[30px] h-[400px] rounded-3xl ">
            <div className="rounded-[45px] bg-[#FF2D59]  w-[90px] mx-[130px] mt-[15px] pt-[30px] mb-[10px] h-[92px] px-[30px] mx-auto">
              <img src={icon2} />
            </div>
            <h3 className="text-white font-[poppins] font-semibold  text-[20px] leading-[28px] text-white">
              {" "}
              Design
            </h3>
            <p className="text-white font-[poppins] font-normal text-[30px] leading-[46px] mt-[20px]">
              We provide services with the best designs than our designer team
              for your business{" "}
            </p>
          </div>

          <div className="  bg-[#001138]  text-center px-4 mb-[30px] h-[400px] rounded-3xl ">
            <div className="rounded-[45px] bg-[#4ADB61]  w-[90px] mx-[130px] mt-[15px] pt-[30px] mb-[10px] h-[92px] px-[30px] mx-auto ">
              <img src={icon3} />
            </div>
            <h3 className=" font-[poppins] font-semibold  text-[20px] leading-[28px] text-white  ">
              Web Development{" "}
            </h3>
            <p className="text-white font-[poppins] font-normal text-[30px] leading-[46px] mt-[20px]">
              We help develop company websites to be more professional and
              attractive{" "}
            </p>
          </div>
        </div>


        {/* second cards */}


        <div className="grid grid-cols-3 max-auto mx-[80px] gap-5 mt-[30px]  ">
          <div className="  bg-[#001138]  text-center px-4 mb-[30px] h-[400px] rounded-3xl ">
            <div className="rounded-[45px] bg-[#FFCC00]  w-[90px] mx-[130px] mt-[15px] pt-[30px] mb-[10px] h-[92px] px-[30px] mx-auto ">
              <img src={icon6} />
            </div>
            <h3 className=" font-[poppins] font-semibold  text-[20px] leading-[28px] text-white  ">
            App Development  {" "}
            </h3>
            <p className="text-white font-[poppins] font-normal text-[30px] leading-[46px] mt-[20px]">
            We help develop company mobile apps to be more professional and attractive{" "}
            </p>
          </div>

          <div className="  bg-[#001138]  text-center px-4 mb-[30px] h-[400px] rounded-3xl ">
            <div  className="rounded-[45px] bg-[#007BFF]  w-[90px] mx-[130px] mt-[15px] pt-[30px] mb-[10px] h-[92px] px-[30px] mx-auto ">
              <img src={icon4}  alt=""/>
            </div>
            <h3 className=" font-[poppins] font-semibold  text-[20px] leading-[28px] text-white  ">
            Business Growth {" "}
            </h3>
            <p className="text-white font-[poppins] font-normal text-[30px] leading-[46px] mt-[20px]">
            We also provide services by providing input for your business growth  {" "}
            </p>
          </div>

          <div className="  bg-[#001138]  text-center px-4 mb-[30px] h-[400px] rounded-3xl ">
              <div  className="rounded-[45px] bg-[#FF6800]  w-[90px] mx-[130px] mt-[15px] pt-[30px] mb-[10px] h-[92px] px-[30px] mx-auto ">
              <img src={icon5} />
            </div>
            <h3 className=" font-[poppins] font-semibold  text-[20px] leading-[28px] text-white  ">
            Digital marketing  {" "}
            </h3>
            <p className="text-white font-[poppins] font-normal text-[30px] leading-[46px] mt-[20px]">
            We also help you market your products through an online marketplace  {" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
