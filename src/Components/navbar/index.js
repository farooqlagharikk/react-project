import React from "react";
import navicon from "../../assests/img/Group 97.jpg"
const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between  mt-5 max-auto px-[30px]">
           <div className="w-[50px] mx-[30px] rounded-[30px]">
            <img src={navicon}/>
          </div>
          <nav>
            <ul className="flex px-4 gap-[30px]">
              <li>
                {" "}
                <span className="text-[orange]">
                  {" "}
                  <a href="#">Home</a>
                </span>
              </li>
              <li className="text-white">
                <a href="#"> Works</a>
              </li>
              <li className="text-white">
                <a href="#">About </a>
              </li>
            </ul>
          </nav>
          <div className="">
            <as
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact us
            </as>
          </div>
        </div>
        {/* end navbar */}

        
      </div>
    </>
  );
};

export default Navbar;
