import React from "react";
import fbimg from "../../assests/img/facebook.png";
import instaimg from "../../assests/img/insta.png";
import linkdin from "../../assests/img/linkdin.png";
import twiterimg from "../../assests/img/twitter.png";

const Footer2 = () => {
  return (
    <>
      <div className="grid grid-cols-3 mx-[100px]">
        <div>
          <p className="text-[#ABAFC7] font-[poppins] text-[16px] leading-[24px] ">
            ©2021 Creative Agency{" "}
          </p>
        </div>
        <div>
          <nav className="text-[#ABAFC7]">
            <ul className="flex gap-2 ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Works </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Pricing </a>
              </li>
              <li>
                <a href=""> About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex w-[50px] gap-4 mb-[40px]">
          <img src={fbimg}></img>
          <img src={instaimg}></img>
          <img src={linkdin}></img>
          <img src={twiterimg}></img>
        </div>
      </div>
    </>
  );
};

export default Footer2;
