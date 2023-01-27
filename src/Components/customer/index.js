import React from "react";
import bgimg1 from "../../assests/img/img1.png";
import bgimg2 from "../../assests/img/img2.png";
import bgimg3 from "../../assests/img/img3.png";
import bgimg4 from "../../assests/img/img4.png";
import bgimg5 from "../../assests/img/img5.png";
import bgimg6 from "../../assests/img/img6.png";
import bgimg7 from "../../assests/img/img7.png";
import bgimg8 from "../../assests/img/img8.png";
import bgimg9 from "../../assests/img/img9.png";
const Customer = () => {
  return (
    <div className="mt-[100px]">
      <div className="text-center mt-[100px]">
        <h3 className="font-[poppins] font-semibold text-[orange] text-[20px] leading-[28px]">
          Some of Our Great Customers{" "}
        </h3>
        <p className="text-white font-[poppins] font-semibold text-[30px] leading-[50px]">
          Some of the companies we have worked with{" "}
        </p>
      </div>

      <div className="mt-[100px] flex justify-between mx-[100px]">
        <div className="w-[100px]">
          <img src={bgimg1} />
        </div>

        <div className="w-[100px]">
          <img src={bgimg2} />
        </div>
        <div className="w-[100px]">
          <img src={bgimg3} />
        </div>

        <div className="w-[60px]">
          <img src={bgimg4} />
        </div>
        <div className="w-[60px]">
          <img src={bgimg5} />
        </div>
      </div>

      <div className="mt-[100px] flex justify-between mx-[100px]">
        <div className="w-[100px]">
          <img src={bgimg6} />
        </div>
        <div className="w-[100px]">
          <img src={bgimg7} />
        </div>
        <div className="w-[100px]">
          <img src={bgimg8} />
        </div>
        <div className="w-[100px]">
          <img src={bgimg9} />
        </div>
      </div>
    </div>
  );
};

export default Customer;
