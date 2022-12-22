import React from "react";

function Header() {
  return (
    <div>
      <header class="text-white body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="./logo.png" alt="" srcset="" className="w-10" />
            <span class="ml-3 text-xl text-white">BHRAMAN</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a href="" class="mr-5 hover:text-gray-500">
              Monuments
            </a>
            <a href="" class="mr-5 hover:text-gray-500">
              Explore
            </a>
            <a href="" class="mr-5 hover:text-gray-500">
              About Us
            </a>
          </nav>
          <button class="inline-flex items-center text-white bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-1">
            Explore the unexplored!
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
