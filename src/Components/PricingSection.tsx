import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

const Pricing: React.FC = () => {
  const features = [
    "Native authentication",
    "Third party authentication",
    "Built-in authorization (ABAC)",
    "Event streaming",
    "Multi-factor authentication",
  ];
  return (
    <div className="relative max-w-screen-4xl mx-auto p-4 md:p-6 mt-5 md:mt-20 text-white">
      {/* Purple Background with Clipped Wave */}
      <div
        className="absolute -z-20 top-0 left-0 w-full h-96"
        style={{
          background: "linear-gradient(180deg, #00d7ff 0%, #00a9c0 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
        }}
      ></div>

      {/* Pricing Content Section */}
      <div className="z-10 mt-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Our pricing</h1>
        <div className="md:flex justify-center mt-10 space-x-4">
          <div className="flex border rounded-lg shadow-md">
            {/* Pricing Card 1 - Startup */}
            <div className="bg-white text-black p-4 md:p-6 rounded-l-lg w-[25rem]">
              <h2 className="text-xl font-semibold">Startup</h2>
              <span className="flex items-end gap-2 justify-center">
                <p>from</p>
                <p className="mt-4 text-3xl font-extrabold text-customLightBlue">
                  $150
                </p>
                <p className="text-sm text-gray-600">/month</p>
              </span>
              <button className="mt-6 bg-customLightBlue w-full text-white px-4 py-2 rounded">
                START FREE TRIAL
              </button>
              <h6 className="font-semibold text-base text-left mt-6">
                Capabilities
              </h6>
              <ul className="mt-3 text-left">
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  Up to 5 developers
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  No SLA
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  Up to 100 DBs
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  US and EU Region Groups
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  Basic throughput
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  {" "}
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  Standard support
                </li>
              </ul>
            </div>

            {/* Pricing Card 2 - Pro */}
            <div className="bg-white text-black p-6 border-l rounded-r-lg w-[25rem]">
              <h2 className="text-xl font-semibold">Pro</h2>
              <span className="flex items-end gap-2 justify-center">
                <p>from</p>
                <p className="mt-4 text-3xl font-extrabold text-customLightBlue">
                  $500
                </p>
                <p className="text-sm text-gray-600">/month</p>
              </span>
              <button className="mt-6 w-full bg-customLightBlue text-white px-4 py-2 rounded transition-all hover:bg-customLightBlue">
                START FREE TRIAL
              </button>

              <h6 className="font-semibold text-base text-left mt-6">
                Capabilities
              </h6>
              <ul className="mt-3 text-left">
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  Startup +
                </li>
                <li className="mb-1 flex items-center gap-1 text-base ">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  Up to 15 developers
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />
                  Fauna logs
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />
                  Backup and restore
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue " />{" "}
                  Unlimited DBs
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  US, EU, and Global Region Groups
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  Enhanced throughput
                </li>
                <li className="mb-1 flex items-center gap-1 text-base">
                  <IoIosArrowRoundForward className="text-2xl text-customLightBlue" />{" "}
                  Standard support
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing Card 3 - Enterprise */}
          <div className="shadow-md bg-gradient-to-r  from-customLightBlue to-customBlue text-white p-6 rounded-lg  border border-white w-[25rem]">
            <h2 className="text-xl font-semibold">Enterprise</h2>
            <p className="mt-4 text-4xl font-bold">Custom pricing</p>
            <button className="mt-5 w-full bg-white text-customBlue px-4 py-2 rounded hover:opacity-90 transition-opacity">
              CONTACT SALES
            </button>
            <h6 className="font-semibold text-base text-left mt-6">
              Capabilities
            </h6>
            <ul className="mt-3 text-left">
              <li className="mb-1 flex items-center gap-1 text-base">
                <IoIosArrowRoundForward className="text-2xl text-white" />{" "}
                Startup +
              </li>
              <li className="mb-1 flex items-center gap-1 text-base ">
                <IoIosArrowRoundForward className="text-2xl text-white" /> Up to
                15 developers
              </li>
              <li className="mb-1 flex items-center gap-1 text-base">
                <IoIosArrowRoundForward className="text-2xl text-white" />
                Fauna logs
              </li>
              <li className="mb-1 flex items-center gap-1 text-base">
                <IoIosArrowRoundForward className="text-2xl text-white" />
                Backup and restore
              </li>
              <li className="mb-1 flex items-center gap-1 text-base">
                <IoIosArrowRoundForward className="text-2xl text-white " />{" "}
                Unlimited DBs
              </li>
              <li className="mb-1 flex items-center gap-1 text-base">
                <IoIosArrowRoundForward className="text-2xl text-white" /> US,
                EU, and Global Region Groups
              </li>
              <li className="mb-1 flex items-center gap-1 text-base">
                <IoIosArrowRoundForward className="text-2xl text-white" />{" "}
                Enhanced throughput
              </li>
              <li className="mb-1 flex items-center gap-1 text-base">
                <IoIosArrowRoundForward className="text-2xl text-white" />{" "}
                Standard support
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-[75rem] flex flex-col items-center justify-center ">
        {/* ---Free plan section--- */}
        <div className="w-[76rem] bg-white text-black border rounded-lg p-5 mt-24 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Free Plan</h2>
              <p className="mt-2 text-gray-500">For learning Fauna</p>
              <button className="mt-4 bg-customLightBlue text-white px-4 py-2 rounded-md">
                START FOR FREE
              </button>
            </div>

            <div className="flex flex-col mt-6 md:mt-0">
              <h6 className="font-semibold text-lg">Capabilities</h6>
              <ul className="mt-3">
                <li className="mb-2 flex items-center gap-2">
                  <IoIosArrowRoundForward className="text-customBlue" /> All
                  Fauna core capabilities
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <IoIosArrowRoundForward className="text-customBlue" /> ABAC,
                  MFA, streams, third-party authorization
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <IoIosArrowRoundForward className="text-customBlue" />{" "}
                  Community support only
                </li>
              </ul>
            </div>

            <div className="flex flex-col mt-6 md:mt-0">
              <h6 className="font-semibold text-lg">Limits</h6>
              <ul className="mt-3">
                <li className="mb-2 flex items-center gap-2">
                  <IoIosArrowRoundForward className="text-customBlue" /> 100k
                  TROs, 50k TWOs, 500k TCOs per month
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <IoIosArrowRoundForward className="text-customBlue" /> 1GB
                  storage
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <IoIosArrowRoundForward className="text-customBlue" /> 5 DBs
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* comparison section */}
        <div className="w-[76rem]">
          <h2 className="text-5xl font-semibold text-black mt-20 text-center">
            Compare plans
          </h2>
          <div className="bg-white text-black border rounded-lg p-6   mt-10 shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left table-auto">
                <thead>
                  <tr>
                    <th className="py-3 px-4 font-semibold">FEATURE</th>
                    <th className="py-3 px-4 font-semibold text-center">
                      STARTUP
                    </th>
                    <th className="py-3 px-4 font-semibold text-center">PRO</th>
                    <th className="py-3 px-4 font-semibold text-center">
                      ENTERPRISE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-3 px-4">{feature}</td>
                      <td className="py-3 px-4 text-center">
                        <IoMdCheckmark className="text-green-600 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <IoMdCheckmark className="text-green-600 mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <IoMdCheckmark className="text-green-600 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Pricing;
