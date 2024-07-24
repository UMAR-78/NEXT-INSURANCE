import React from "react";

const insuranceOptions = [
  {
    name: "General Liability",
    icon: "./lob-general-liability-black-white-3.png",
    background: "#00d7ff",
    description:
      "Accidentally damaged customer property? General liability insurance makes those uh-oh moments okay by covering a wide range of incidents and basic risks. Contractors and cleaners can add tools and equipment coverage to protect their gear, as well.",
    link: "#",
  },
  {
    name: "Workers’ Compensation",
    icon: "./lob-tools-equipment-black-white-3.png",
    background: "#ff32a0",
    description:
      "If you have employees, workers’ comp is mandatory in almost every state to help cover medical bills and lost wages if a workplace accident occurs. And don’t forget about the boss — add business owner’s coverage to protect yourself as well.",
    link: "#",
  },
  {
    name: "Professional Liability/E&O",
    icon: "./lob-errors-omissions-black-white-1.png",
    background: "#00e650",
    description:
      "If you’re accused of making an error at work, we’ve got your back. Get professional liability insurance (also known as errors & omissions insurance) and you’ll be protected from certain types of lawsuits and claims.",
    link: "#",
  },
  {
    name: "Commercial Auto",
    icon: "./lob-auto-black-white-2.png",
    background: "#ff4100",
    description:
      "Vehicle-related damage shouldn’t mean you have to pump the brakes on your bottom line. With commercial auto, you’re covered for dents, tows and damage to someone else’s car or truck. Add HNOA coverage for extra protection on rentals and employee vehicles.",
    link: "#",
  },
  {
    name: "Tools & Equipment",
    icon: "./lob-tools-equipment-black-white-3.png",
    background: "#dcf000",
    description:
      "Add a tools and equipment upgrade to your general liability insurance. If your gear ever gets damaged or stolen, we’ll be there to abracadabra them back in a flash.",
    link: "#",
  },
  {
    name: "Commercial Property",
    icon: "./lob-property-black-white-2.png",
    background: "#ac00e7",
    description:
      "Commercial property insurance isn’t just for buildings — it can protect almost all the gear, inventory and equipment you need to do business.",
    link: "#",
  },
  {
    name: "Business Owner’s Policy",
    icon: "./lob-business-owner-policy-black-white-2.png",
    background: "#ed9100",
    description:
      "A business owner’s policy (BOP) combines general liability and commercial property into one handy package. It’s a great option for protecting your business if you have a physical location, equipment or inventory and if you deal with customers or the public.",
    link: "#",
  },
];

const InsuranceSection: React.FC = () => {
  return (
    <div className="max-w-screen-4xl mx-auto p-4 md:p-6 mt-5 md:mt-20 flex flex-col items-center">
      <div className="">
        <h1 className="text-4xl md:text-6xl text-center mb-4 leading-tight">
          Let’s find the coverage <br /> you need for your <br /> business.
        </h1>
        <p className="text-center text-base md:text-2xl mt-10 mb-6">
          Business insurance is divided into different policies. We offer 7
          types <br /> so it’s easy to design the coverage that fits your
          business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
        {insuranceOptions.map((option) => (
          <div
            key={option.name}
            className="flex flex-col justify-between md:w-[258px] h-54 group border rounded-lg "
          >
            <div
              style={{ backgroundColor: option.background }}
              className="m-3 flex justify-center items-center"
            >
              <img
                src={option.icon}
                alt={option.name}
                className="w-full h-36 p-3 object-contain"
              />
            </div>
            <div className="pt-2 pl-4 pr-4 flex-grow flex flex-col">
              <h6 className="flex font-semibold items-center gap-2">
                {option.name}
              </h6>
              <p className="text-[14px] leading-5 mt-2 flex-grow">
                {option.description}
              </p>
              <div className="flex justify-center">
                <a
                  href={option.link}
                  className="my-4 w-2/3 text-center text-black border border-black rounded-full py-3 transition duration-300 hover:bg-black hover:text-white"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceSection;
