import React from "react";
import bgimg from "../../assests/img/icon.png";
const Section2 = () => {
  return (
    <>
      <div className=" mx-auto mt-[100px] text-center bg-[#020E2D] w-[100%] h-[450px]">
        <div className="mx-[200px] text-center">
          <img src={bgimg} />
        </div>
        <p className="text-white font-normal text-[28px] leading-[48x] text-center mx-[100px] mt-[30px]">
          {" "}
          We are serious about providing our best service to all the customers
          we help. Customers satisfaction is our number one priority.
        </p>
        <h6 className="text-white  font-[poppins] text-[20px] leading-[28px] mt-5">
          Mark Garfield
        </h6>
        <h5 className="text-white  font-[poppins] text-[20px] leading-[28px] mt-3 ">
          CEO & Head of Product{" "}
        </h5>
      </div>
    </>
  );
};

export default Section2;
