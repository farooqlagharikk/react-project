import React from "react";
import bgimg from "../../assests/img/vector2.png";
import bgimg2 from "../../assests/img/vector1.png";

const Section = () => {
  return (
    <>
      <div className="container mx-auto  ">
        <div className="">
          <div>
            <div className=" text-center mt-[100px] ">
              <h3 className="font-[poppins] font-semibold text-[20px] leading-[28px] text-[orange] ">
                Our Documentation
              </h3>
              <p className="font-[poppins] text-white font-semibold text-[30px]  leading-[45px] mt-[10px]  ">
                See what our profile is like and how we work for your business
              </p>
            </div>

            <div className="flex justify-center justify-between">
              <div className="w-[50px]">
                <img src={bgimg} />
              </div>

              <div className=" w-50px">
                <img src={bgimg2} />
              </div>
            </div>

            {/* second sec */}

            <div className="mt-[100px] ">
              <div className="flex gap-[30px] mx-[100px]">
                <div>
                  <div className="flex gap-[20px]   ">
                    <div className="bg-[blue] h-[200px] w-[250px] pt-[30px] rounded-[10px] px-[10px] ">
                      <h1 className="text-center font-[poppins] font-semibold text-white text-[56px] leading-[72px] ">
                        70K+
                      </h1>
                      <h4 className="text-center font-[poppins] text-[18px] leading-[32px] text-white">
                        {" "}
                        We have more than customers
                      </h4>
                    </div>

                    <div className="bg-[blue] h-[200px] w-[250px] pt-[30px] rounded-[10px] px-[10px]">
                      <h1 className="text-center font-[poppins] font-semibold text-white text-[56px] leading-[72px] text-[#FF6800]">
                        100+
                      </h1>
                      <h4 className="text-center font-[poppins] text-[18px] leading-[32px] text-white ">
                        {" "}
                        Projects we have completed{" "}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-[20px] mx-auto mt-[40px]">
                      <div className="bg-[blue] h-[200px] w-[250px] pt-[30px] rounded-[10px] px-[10px] ">
                        <h1 className="text-center font-[poppins] font-semibold ; text-white text-[56px] leading-[72px] text-[#FF2D59] ">
                          10M+
                        </h1>
                        <h4 className="text-center font-[poppins] text-[18px] leading-[32px] text-white">
                          Projects we have completed
                        </h4>{" "}
                      </div>

                      <div className="bg-[blue] h-[200px] w-[250px] pt-[30px] rounded-[10px] px-[10px] ">
                        <h1 className="text-center font-[poppins] font-semibold text-[#4ADB61] text-[56px] leading-[72px]">
                          200+
                        </h1>

                        <h4 className="text-center font-[poppins] text-[18px] leading-[32px] text-white ">
                          Projects we have completed{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right div */}
                <div>
                  <h1 className="font-[poppins] font-semibold text-white text-[45px] leading-[50px]">
                    Customer satisfaction is our first priority{" "}
                  </h1>
                  <p className="text-white mt-[10px] font-normal text-[18px] leading-[32px]  ">
                    {" "}
                    We serve many customers, ranging from small businesses,
                    medium entrepreneurs, to world-renowned companies. Their
                    satisfaction is our pleasure. We strive to provide the best
                    service by:
                  </p>
                  <div className="mt-[10px]" >
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                     <span className="text-white mt-[60px]">Provide idea support from our creative team</span>
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                     <span className="text-white mt-[20px]">Provide attractive and professional design services </span>
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                     <span className="text-white mt-[20px]">Support for service 24 hours a week </span>
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                     <span className="text-white mt-[20px]">Helping our customers to grow their business </span>
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                     <span className="text-white ">Provide support to market products through online marketplace  </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </>


  );
};

export default Section;
