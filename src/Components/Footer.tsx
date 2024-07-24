import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

interface Link {
  name: string;
  url: string;
}

interface Section {
  title: string;
  links: Link[];
}

const footerData: Section[] = [
  {
    title: "What we cover",
    links: [
      { name: "Business Insurance", url: "#" },
      { name: "General Liability", url: "#" },
      { name: "Workers’ Compensation", url: "#" },
      { name: "Commercial Property", url: "#" },
      { name: "Business Personal Property", url: "#" },
      { name: "Commercial Auto", url: "#" },
      { name: "Professional Liability", url: "#" },
      { name: "Errors and Omissions", url: "#" },
      { name: "Tools & Equipment", url: "#" },
      { name: "Business Owner’s Policy", url: "#" },
      { name: "Product Liability", url: "#" },
      { name: "Employment Practices Liability", url: "#" },
      { name: "LLC Business Insurance", url: "#" },
      { name: "Liquor Liability", url: "#" },
      { name: "Certificate of Insurance", url: "#" },
    ],
  },
  {
    title: "Who we insure",
    links: [
      { name: "Architects & Engineers", url: "#" },
      { name: "Auto Services", url: "#" },
      { name: "Beauty", url: "#" },
      { name: "Cleaning", url: "#" },
      { name: "Construction", url: "#" },
      { name: "Consulting", url: "#" },
      { name: "Contractors", url: "#" },
      { name: "Education", url: "#" },
      { name: "Entertainment", url: "#" },
      { name: "Fitness", url: "#" },
      { name: "Financial Services", url: "#" },
      { name: "Food Services", url: "#" },
      { name: "Real Estate", url: "#" },
      { name: "Retail", url: "#" },
      { name: "Therapy", url: "#" },
    ],
  },
  {
    title: "Top professions",
    links: [
      { name: "Carpenter Insurance", url: "#" },
      { name: "Daycare Insurance", url: "#" },
      { name: "Debris Removal Insurance", url: "#" },
      { name: "General Contractor Insurance", url: "#" },
      { name: "Handyman Insurance", url: "#" },
      { name: "HVAC Insurance", url: "#" },
      { name: "Landscaping Insurance", url: "#" },
      { name: "Painters Insurance", url: "#" },
      { name: "Personal Trainer Insurance", url: "#" },
      { name: "Roofing Insurance", url: "#" },
      { name: "Auto Repair Shop", url: "#" },
      { name: "Yoga Teacher Insurance", url: "#" },
      { name: "Retail Store Insurance", url: "#" },
    ],
  },
  {
    title: "Most popular",
    links: [
      { name: "Accountant Insurance", url: "#" },
      { name: "Amazon Sellers", url: "#" },
      { name: "Architect Insurance", url: "#" },
      { name: "Catering Insurance", url: "#" },
      { name: "Ecommerce Insurance", url: "#" },
      { name: "Engineer Insurance", url: "#" },
      { name: "Massage Insurance", url: "#" },
      { name: "Photographer Insurance", url: "#" },
      { name: "Real Estate Agent Insurance", url: "#" },
      { name: "Restaurant Insurance", url: "#" },
      { name: "Texas General Liability", url: "#" },
      { name: "Florida General Liability", url: "#" },
      { name: "California General Liability", url: "#" },
    ],
  },
  {
    title: "About us",
    links: [
      { name: "Why NEXT?", url: "#" },
      { name: "Become an Agent", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Help Center", url: "#" },
      { name: "Insurance Glossary", url: "#" },
      { name: "Our Story", url: "#" },
      { name: "Partner With Us", url: "#" },
      { name: "Find an Agent", url: "#" },
      { name: "Sitemap", url: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [title]: !prevOpenSections[title],
    }));
  };

  return (
    <footer className="bg-[#231f20] text-white py-8">
      <div className="max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerData.map((section) => (
            <div key={section.title} className="mb-4 md:mb-0">
              <h3
                className="font-semibold text-lg border-b md:border-none md:text-3xl mb-3 cursor-pointer md:cursor-auto"
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
                <span className="float-right md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition-transform duration-200 ${
                      openSections[section.title] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </h3>
              <ul
                className={`${
                  openSections[section.title] ? "block" : "hidden"
                } md:block`}
              >
                {section.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={link.url}
                      className="hover:text-gray-300 text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white py-6">
            <div className="flex flex-col md:flex-row text-center md:text-start space-y-4 md:space-y-0 md:space-x-40">
              <a href="#" className="text-base hover:text-gray-300">
                Contact Us
              </a>
              <a href="#" className="hover:text-gray-300 text-base">
                Chat with Us
              </a>
              <span className="text-base">Mon – Fri | 8 a.m. – 5 p.m. CT</span>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-3xl hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl hover:text-gray-300">
                <FaTiktok />
              </a>
              <a href="#" className="text-3xl hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-3xl hover:text-gray-300">
                <FaLinkedin />
              </a>
              <a href="#" className="text-3xl hover:text-gray-300">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 border-t border-white py-6 space-y-4 md:space-y-0">
            <span className="text-center md:text-left">
              © 2024 Next Insurance, Inc. 975 California Ave, Palo Alto, CA
              94304, United States
            </span>
            <div className="flex flex-col items-center md:items-start md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300">
                Licenses
              </a>
            </div>
            <img src="./bbb.jpg" alt="" className="" />
          </div>
          <div className="mt-4 border-t border-white py-6">
            <p className="text-sm md:text-base">
              Issuance of coverage is subject to underwriting. Not available in
              all states. Please see the policy for full terms, conditions, and
              exclusions. Coverage examples are for illustrative purposes only.
              Your policy documents govern, terms and exclusions apply. Coverage
              is dependent on actual facts and circumstances giving rise to a
              claim. Next Insurance, Inc. and/or its affiliates is an insurance
              agency licensed to sell certain insurance products and may receive
              compensation from insurance companies for such sales. Policy
              obligations are the sole responsibility of the issuing insurance
              company. Refer to Legal Notices section for additional
              information.
            </p>
            <p className="text-sm md:text-base mt-6">
              † Any starting prices or premiums represented before an actual
              customer quote are not guaranteed and are representations of
              existing premiums of active policies as of December 6, 2023. To
              the extent permitted by law, applicants are individually
              underwritten, not all applicants may qualify. Individual rates and
              savings vary and are subject to change. Discounts and savings are
              available where state laws and regulations allow, and may vary by
              state. Certain discounts apply to specific coverages only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
