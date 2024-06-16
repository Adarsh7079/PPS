import React from "react";
import { LuSearch } from "react-icons/lu";

const Events = () => {
  return (
    <div>
      <section className="bg-[url('https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/6-background-1.jpg')] w-full h-[350px] bg-cover flex flex-col justify-center items-center gap-5">
        <img
          src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/seo-and-web.svg"
          alt=""
          className="w-[70px] h-[70px] mt-20"
        />
        <h1 className="text-gray-700 text-3xl">Events Central</h1>
        <div className="flex flex-col gap-3">
          <div className="bg-gray-400 h-[4px] w-[70px] flex mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="w-full md:w-2/3 mx-auto px-4 md:px-0 py-6 md:py-10">
        <div className="border-2 border-gray-200 p-3">
          <div className="flex flex-wrap gap-3 justify-end items-center">
            <div className="flex items-center">Events Filter</div>
            <div>
              <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Dropdown hover{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownHover"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="search"
                placeholder="search"
                className="w-full md:w-auto h-[40px] rounded-l-lg border border-gray-300 px-4"
              />
              <div className="bg-[#3b8ea4] h-[40px] flex justify-center items-center w-[50px] rounded-r-lg">
                <LuSearch className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-t-0 border-gray-200 p-3">
          <div className="flex justify-between flex-wrap">
            <div className="w-full md:w-[200px] flex justify-start font-semibold">Title</div>
            <div className="w-full md:w-[800px] flex justify-start font-semibold">Details</div>
            <div className="w-full md:w-[200px] flex justify-start font-semibold">Date</div>
          </div>
          <div>
            <div className="flex justify-between flex-wrap text-gray-500 py-3">
              <h1 className="w-full md:w-[200px]">National conference of Young Psychiatrist</h1>
              <h1 className="w-full md:w-[800px]">
                National conference of Young Psychiatrist at Bhopal on 5th & 6th August 2023.
              </h1>
              <h1 className="w-full md:w-[200px]">05/08/2023 12:00 am</h1>
            </div>
            <div className="flex justify-between flex-wrap text-gray-500 py-3">
              <h1 className="w-full md:w-[200px]">National conference of Young Psychiatrist</h1>
              <h1 className="w-full md:w-[800px]">
                National conference of Young Psychiatrist at Bhopal on 5th & 6th August 2023.
              </h1>
              <h1 className="w-full md:w-[200px]">05/08/2023 12:00 am</h1>
            </div>
            <div className="flex justify-between flex-wrap text-gray-500 py-3">
              <h1 className="w-full md:w-[200px]">National conference of Young Psychiatrist</h1>
              <h1 className="w-full md:w-[800px]">
                National conference of Young Psychiatrist at Bhopal on 5th & 6th August 2023.
              </h1>
              <h1 className="w-full md:w-[200px]">05/08/2023 12:00 am</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
