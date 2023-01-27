import React from "react";
import icon1 from "../../assests/img/iconimg.png";
import bgimg from "../../assests/img/map.png";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 mx-[100px] mt-[200px] gap-[30px]">
      <div>
        <img src={icon1} alt="" />
        <p className=" font-[poppins] font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
          Lorem hipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo c onsequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div>
        <h1 className="text-[#FFFFFF] font-semibold text-[20px] leading-[24px] mt-[30px]">
          {" "}
          Our Office
        </h1>
        <div className="mt-[20px]">
          <img src={bgimg} />
        </div>
      </div>

      <div>
        <h1 className="text-[#FFFFFF] font-semibold text-[20px] leading-[24px] mt-[20px]">
          Contact<br></br>
          <span>
            '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          </span>
        </h1>
        <p className="font-[poppins] font-medium text-[16px] leading-[24px] text-[#FFFFFF] mt-[20px] ">
          Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta
        </p>
        <p className="font-[poppins] font-medium text-[16px] leading-[24px] text-[#FFFFFF] mt-[20px]">
          info@yourdomain.com
        </p>
        <p className="font-[poppins] font-medium text-[16px] leading-[24px] text-[#FFFFFF] mt-[20px] ">
          +62 (0) 000 0000 00{" "}
        </p>
      </div>

      <div className="">
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[295%]"></hr>
      </div>
    </div>
  );
};

export default Footer;
