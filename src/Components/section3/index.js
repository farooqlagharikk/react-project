import React from "react";

const Section3 = () => {
  return (
    <>
      <div className="mt-[100px]">
        <div className="text-center">
          <h3 className="font-[poppins] font-semibold text-[20px] leading-[28px] text-[orange] ">
            Frequently Ask Question{" "}
          </h3>
          <h2 className="text-white font-[poppins] text-[42px] leading-[56px]">
            Some of our frequently asked questions{" "}
          </h2>
        </div>

        <div className="mt-[50px]  ">
          <div className="text-center  border-[#4C40F7] border-2 w-[60%] h-[170px] px-4 mx-auto ">
            <h6 className="mt-[20px] text-[#FFFFFF]">
              What are the services provided to customers?
            </h6>
            <hr className=" w-[50%] h-1 mx-auto bg-gray-100 border-0 rounded mt-[15px] " />
            <p className=" font-[poppins] text-[16px] text-center  text-[#FFFFFF] pb-[10px] mt-[20px]">
              Hello, we provide various services to help your business grow and
              develop. We help provide ideas, create designs, develop websites
              and mobile applications, provide support for the growth of
              business ideas, to help customers market their products online
              through the marketplace.{" "}
            </p>
          </div>

          <div className="border-[#D8D8D8] border-2 w-[60%] h-[50px] px-4 mx-auto mt-[20px]">
            <p className="mt-[20px] text-[#FFFFFF] pb-[20px] text-[16px] font-[poppins]">
              {" "}
              How can I submit a proposal for cooperation?
            </p>
          </div>

          <div className="border-[#D8D8D8]  border-2 w-[60%] h-[70px] px-4 mx-auto mt-[20px]">
            <p className="mt-[20px] text-[#FFFFFF]  text-[16px] font-[poppins]">
              I come from a faraway place, can collaboration be done full time
              online through several meeting applications?{" "}
            </p>
          </div>

          <div className=" border-[#D8D8D8]  border-2 w-[60%] h-[50px] px-4 mx-auto mt-[20px]">
            <p className="mt-[20px] text-[#FFFFFF] text-[16px] font-[poppins]">
              How do I get the payment complete?
            </p>
          </div>

          <div className=" border-[#D8D8D8]  border-2 w-[60%] h-[50px] px-4 mx-auto mt-[20px]">
            <p className="mt-[20px] text-[#FFFFFF] text-[16px]">
              How long can the collaboration last?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
