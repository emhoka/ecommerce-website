import React from "react";
const TopNav = () => {
  return (
      <nav className="bg-white">
        <div className="mx-auto container px-2 sm:px-6 lg:px-8">
        <div class="md:flex justify-between py-4 items-center  relative">
        <div class="font-rubik text-3xl">
        Ecommerce
        </div>

        <div className=" bg-white rounded-3xl items-center w-2/3 p-1  border border-gray-300">
          <input
            className="rounded-full w-ful h-10 pl-5 pr-10 bg-white focus:outline-none appearance-none"
            placeholder="Search"
          />
        </div>
        <div >
        FAQs
        </div>
        </div></div>
      </nav>
  );
};
export default TopNav;
