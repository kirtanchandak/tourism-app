import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://img.freepik.com/free-vector/india-background_1284-22033.jpg?w=900&t=st=1659982371~exp=1659982971~hmac=968dedbdc00aaa74389eb7c31d2484c6e601b0fbe2f1fd9b85d7bae7d31132cc"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Book your tickits hassle free!
              </h1>
              <p class="mb-8 leading-relaxed text-gray-300">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div class="flex justify-center">
                <p>
                  <Link
                    href="/gallery"
                    class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Book Now!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
