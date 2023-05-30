import React from "react";
const TopNav = () => {
  return (
      <nav className="md:flex justify-between py-4 items-center bg-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex flex-shrink-0 items-center font-rubik text-3xl">
        Ecommerce
        </div>

        <div className=" bg-white rounded-3xl items-center w-2/3 p-1  border border-gray-300">
          <input
            className="rounded-full w-ful h-10 pl-5 pr-10 bg-white focus:outline-none appearance-none"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
        FAQs
        </div>
      </nav>
  );
};
export default TopNav;
