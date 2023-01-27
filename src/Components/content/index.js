import React from "react";
import bgimg from "../../assests/img/bg2.png";
const Content = () => {
  return (
    <>
      <div className=" grid grid-cols-2  mx-[200px] mt-[100px] ">
        <div className="mt-[40px]">
          <h1 className="text-white mb-[10px] font-[poppins] font-semibold text-[46px] leading-[42px]">
            Make your business{" "}
            <span className="text-[orange]">more powerful </span> with us{" "}
          </h1>
          <p className="text-white font-[poppins] font-normal text-[16px] leading-[32px] mb-[18px] ">
            we provide various services to make your business grow and get
            bigger.your satisfaction is our first priority.
          </p>

          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get starter
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div className="">
          <img src={bgimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Content;
