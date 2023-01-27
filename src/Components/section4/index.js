import React from "react";

const Section4 = () => {
  return (
    <>
      <div className=" container mx-auto text-center bg-[#FFCC00] mt-[100px] w-[80%] rounded-[10px] h-[250px] pt-[50px] mb-[20px]">
        <p className=" text-white font-[poppins] font-medium text-[16px] leading-[24px] ">
          Are You Ready For
        </p>
        <h1 className="text-white font-[poppins] font-semibold text-[42px] leading-[56px]">
          {" "}
          Start a New Project{" "}
        </h1>
        <div className="mt-[20px]">
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            start now
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
      </div>
    </>
  );
};

export default Section4;
