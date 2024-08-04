import React from "react";

const WhyNext: React.FC = () => {
  return (
    <div className="max-w-screen-4xl mx-auto  mt-16 md:mt-32">
      <section className="bg-customLightBlue flex flex-col-reverse md:flex-row  ">
        <div className="md:w-[70%] flex flex-col text-center md:text-start justify-center text-black p-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            WHY NEXT?
          </h2>
          <p className="md:w-[35rem] text-2xl md:text-3xl font-semibold mt-5">
            See why 500,000+ U.S. businesses trust NEXT for small business
            insurance.
          </p>
        </div>
        <div className="md:[30%] flex ">
          <img
            src="./why-next_768x886.jpg"
            alt="Why Next"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      <section className="bg-white py-16 px-8 md:px-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
          Trusted by business owners like you
        </h2>
        <div className="grid grid-cols-2 gap-8 md:flex md:flex-wrap md:justify-center md:space-x-20">
          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-5xl font-bold text-[#009e73]">500K+</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Businesses insured
            </p>
          </div>
          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-5xl font-bold text-[#009e73]">50</h3>
            <p className="text-lg md:text-xl text-gray-700">
              States NEXT serves
            </p>
          </div>
          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-5xl font-bold text-[#009e73]">1,300+</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Professions covered
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#009e73]">4.7/5</h3>
            <p className="text-lg md:text-xl text-gray-700">Google rating</p>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
        <div className="flex-1 text-center lg:text-left lg:mr-8">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            Protection when you need it
          </h2>
          <p className="text-lg mb-6">
            Are you “the king of unfortunate things happening” like NEXT
            customer Neil Newcomb of ATL ProWinds? No problem. We combine
            insurance expertise and a passion for small business with
            purpose-built technology to support and protect business owners like
            Neil — and you.
          </p>
          <a
            href="#"
            className="bg-customBlue text-white rounded-full px-4 py-1 text-lg font-semibold transition duration-300 hover:bg-customLightBlue"
          >
            Get Instant Quote
          </a>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <div className="">
            <img
              src="./atlanta-prowinds-neil-2.png" // Replace with the actual image source
              alt="Neil Newcomb"
              className="rounded-lg  w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyNext;
