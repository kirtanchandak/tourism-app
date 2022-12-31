import React from "react";
import Link from "next/link";

function gallery() {
  return (
    <div className="bg-gray-800">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-400 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://i.pinimg.com/originals/99/02/b9/9902b90e5e15f798c5762cc52f7950bb.jpg"
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                  Taj Mahal
                </h2>
                <p class="leading-relaxed">Explore the wonder of the world!</p>
                <p>
                  <Link
                    href="/"
                    class="mt-3 text-gray-900 inline-flex items-center"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-2">
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-400 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-group-of-monuments-hampi-0-2020-11-10-t-15-16-37.jpg"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                      Group of Monuments, Hampi
                    </h2>
                    <p class="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a class="mt-3 text-gray-900 inline-flex items-center">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Wind_Palace-Jaipur-India0002.JPG/1280px-Wind_Palace-Jaipur-India0002.JPG"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                      Hawa Mahal
                    </h2>
                    <p class="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a class="mt-3 text-gray-900 inline-flex items-center">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default gallery;
