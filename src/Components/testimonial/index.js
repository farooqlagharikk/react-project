import React from "react";
// import bgimg from "../../assests/img/Ellipse.png";
import bgimg1 from "../../assests/img/Ellipse (1).png";
import bgimg2 from "../../assests/img/Ellipse (2).png";
import bgimg3 from "../../assests/img/Ellipse (3).png";
import bgimg4 from "../../assests/img/Ellipse (4).png";
import bgimg5 from "../../assests/img/Ellipse (5).png";
import Faker from "Faker";

const Testimonial = () => {
  // var Faker = require('Faker');

  return (
    <>
      <div className="text-center mt-[100px] mx-auto ">
        <h3 className=" text-[orange] font-[poppins] font-semibold text-[20px] leading-[28px]">
          Testimonials
        </h3>
        <h2 className="text-white font-[poppins] font-semibold text-[30px]  leading-[30px] mt-5">
          Some testimonials from our customers
        </h2>
      </div>

      <div className=" grid grid-cols-3 mt-[100px] w-[80%]  container jus mx-auto">
        <div className="bg-[#00113B] text-center  mb-[50px] h-[400px] rounded-[20px] w-[70%] mx-auto container px-4 ">
          <div className=" flex justify-center items-center py-[24px]">
            <img src={bgimg1} alt="" />
          </div>
          <h1 className="font-[poppins] text-[#FFFFFF] font-semibold text-[24px] leading-[34px]">
            {Faker.Name.firstName()}
          </h1>
          <p className=" font-[poppins] text-[#FFFFFF] text-[16px] leading-[24px] ">
            Google inc.{" "}
          </p>
          <p className=" font-[poppins] text-[#FFFFFF] text-[18px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </p>
        </div>
        <div className="bg-[#00113B] text-center  mb-[50px] h-[400px] rounded-[20px] w-[70%] mx-auto container px-4 ">
          <div className=" flex justify-center items-center py-[24px]">
            <img src={bgimg2} alt="" />
          </div>
          <h1 className="font-[poppins] text-[#FFFFFF] font-semibold text-[24px] leading-[34px]">
            {Faker.Name.firstName()}
          </h1>
          <p className=" font-[poppins] text-[#FFFFFF] text-[16px] leading-[24px] ">
            Google inc.{" "}
          </p>
          <p className=" font-[poppins] text-[#FFFFFF] text-[18px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </p>
        </div>

        <div className="bg-[#00113B] text-center  mb-[50px] h-[400px] rounded-[20px] w-[70%] mx-auto container px-4 ">
          <div className=" flex justify-center items-center py-[24px]">
            <img src={bgimg3} alt="" />
          </div>
          <h1 className="font-[poppins] text-[#FFFFFF] font-semibold text-[24px] leading-[34px]">
            {Faker.Name.firstName()}
          </h1>
          <p className=" font-[poppins] text-[#FFFFFF] text-[16px] leading-[24px] ">
            Google inc.{" "}
          </p>
          <p className=" font-[poppins] text-[#FFFFFF] text-[18px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </p>
        </div>
        <div className="bg-[#00113B] text-center  mb-[50px] h-[400px] rounded-[20px] w-[70%] mx-auto container px-4 ">
          <div className=" flex justify-center items-center py-[24px]">
            <img src={bgimg4} alt="" />
          </div>
          <h1 className="font-[poppins] text-[#FFFFFF] font-semibold text-[24px] leading-[34px]">
            {Faker.Name.firstName()}
          </h1>
          <p className=" font-[poppins] text-[#FFFFFF] text-[16px] leading-[24px] ">
            Google inc.{" "}
          </p>
          <p className=" font-[poppins] text-[#FFFFFF] text-[18px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </p>
        </div>
        <div className="bg-[#00113B] text-center  mb-[50px] h-[400px] rounded-[20px] w-[70%] mx-auto container px-4 ">
          <div className=" flex justify-center items-center py-[24px]">
            <img src={bgimg5} alt="" />
          </div>
          <h1 className="font-[poppins] text-[#FFFFFF] font-semibold text-[24px] leading-[34px]">
            {Faker.Name.firstName()}
          </h1>
          <p className=" font-[poppins] text-[#FFFFFF] text-[16px] leading-[24px] ">
            Google inc.{" "}
          </p>
          <p className=" font-[poppins] text-[#FFFFFF] text-[18px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </p>
        </div>
        <div className="bg-[#00113B] text-center  mb-[50px] h-[400px] rounded-[20px] w-[70%] mx-auto container px-4 ">
          <div className=" flex justify-center items-center py-[24px]">
            <img src={bgimg4} alt="" />
          </div>
          <h1 className="font-[poppins] text-[#FFFFFF] font-semibold text-[24px] leading-[34px]">
            {Faker.Name.firstName()}
          </h1>
          <p className=" font-[poppins] text-[#FFFFFF] text-[16px] leading-[24px] ">
            Google inc.{" "}
          </p>
          <p className=" font-[poppins] text-[#FFFFFF] text-[18px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
