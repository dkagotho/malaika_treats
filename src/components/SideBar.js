import { useState } from "react";
import {
  GiStairsCake,
  GiCupcake,
  GiBrokenHeartZone,
  GiStrawberry,
} from "react-icons/gi";
import { BiBuildingHouse } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import purplegold from "../assets/purplegold.jpg";
import engaged from "../assets/engaged.MP4";
import bbh from "../assets/bbh.jpg";
// import silver from "../assets/silver.png";
// import { Link } from "react-router-dom";

const Menus = [
  {
    title: "CAKES",
    src: "cake",
    icon: <GiStairsCake />,
    subMenus: [
      {
        title: "DESIGNER",
        src: "/cakes/designer",

        cName: "designer",
      },
      {
        title: "FLAVORS",
        src: "/cakes/flavor",

        cName: "flavor",
      },
    ],
  },
  {
    title: "CUPCAKES & CAKEPOPS",
    src: "Chat",
    icon: <GiCupcake />,
    subMenus: [
      {
        title: "DOZEN",
        src: "/cupcakes/cupcakes",

        cName: "sub-nav",
      },
      {
        title: "6 PACK",
        src: "/cupcakes/cupcakes",

        cName: "sub-nav",
      },
      {
        title: "CAKEPOPS",
        src: "/cakepops/cakepops",

        cName: "sub-nav",
      },
    ],
  },
  {
    title: "CHOCOLATE STRAWBERRIES",
    src: "chocoberries",
    icon: <GiStrawberry />,
    subMenus: [
      {
        title: "DOZEN",
        src: "/chocoberries/dozen",

        cName: "sub-nav",
      },
      {
        title: "BOUQUET",
        src: "/chocoberries/bouquet",

        cName: "sub-nav",
      },
    ],
  },
  {
    title: "BREAKABLE HEARTS",
    src: "BH",
    icon: <GiBrokenHeartZone />,
    subMenus: [
      {
        title: "BH 10 STRABERRIES",
        src: "/bh/10",

        cName: "sub-nav",
      },
      {
        title: "BH 12 STRABERRIES",
        src: "/bh/12",

        cName: "sub-nav",
      },
      {
        title: "BH CUSTOM GIFT",
        src: "/bhs/custom",
      },
    ],
  },
  {
    title: "BOTTLE BOUQUETS",
    src: "Bottle bouquets",
    icon: <GiBrokenHeartZone />,
    subMenus: [
      {
        title: "LARGE BOTTLES",
        src: "/lb/large-bottles",

        cName: "sub-nav",
      },
      {
        title: "50ML BOTTLES",
        src: "/sb/50ml-bottles",

        cName: "sub-nav",
      },
      {
        title: "Custom",
        src: "/bb/custom",
      },
    ],
  },
  {
    title: "COMPANY INFO",
    src: "building",
    icon: <BiBuildingHouse />,
    subMenus: [
      {
        title: "Service 1",
        src: "/services/services1",

        cName: "sub-nav",
      },
      {
        title: "Service 2",
        src: "/services/services2",

        cName: "sub-nav",
      },
      {
        title: "Service 3",
        src: "/services/services3",
      },
    ],
  },
];

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <div className="mt-7 h-screen flex items-end justify-start sm:absolute">
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-[#FFCBC4] w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl text-gray-700 duration-500"
        onClick={toggleSideBar}
      >
        <span class="text-[#778899]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>

      <div
        className={` ${
          open ? "w-48 px-2" : "w-0 "
        } lg:w-72 bg-[#FFCBC4] h-screen relative duration-500`}
      >
        <div className="justify-center">
          <h1 className={`text-center duration-200 ${!open && "invisible"}`}>
            <img
              className="mt-10 object-scale-down h-49 w-97"
              src="mk-logo.ico"
              alt="logo"
            />
          </h1>
        </div>
        {/* buggy code, I can't get the ul to close at the same time as the Image */}
        <div className="justify-center">
          <ul
            className={`hover:text-gray-700 text-[#778899] duration-200 pt-6 ${
              !open && "invisible"
            }`}
          >
            {Menus.map((Menu, index) => (
              <>
                <li
                  key={index}
                  className={`flex p-2 cursor-pointer hover:text-gray-700 duration-500 text-[#778899] text-sm items-center gap-x-4 border-b-2 border-[#778899] hover:border-gray-700 duration-500"
                ${Menu.gap ? "mt-9" : "mt-2"}`}
                >
                  {/* when you click on the arrow all menus open */}
                  {Menu.icon}
                  <span className="flex-1">{Menu.title}</span>
                  {Menu.subMenus && (
                    <BsChevronDown
                      onClick={() => setSubMenuOpen(!subMenuOpen)}
                      // onMouseEnter={() => setSubMenuOpen(true)}
                      // onMouseEnter={() => setSubMenuOpen(false)}
                      className={`${subMenuOpen && "rotate-180"}`}
                    />
                  )}
                </li>
                {Menu.subMenus && subMenuOpen && open && (
                  <ul>
                    {Menu.subMenus.map((subMenuItem, idex) => (
                      <li
                        key={idex}
                        className="flex px-5 cursor-pointer text-center text-sm hover:text-gray-700 duration-500 text-[#778899] py-1"
                      >
                        {subMenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto h-screen overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:columns-5">
          <div className="w-full bg-silver bg-no-repeat bg-cover">
            <div className="text-sm sm:text-3xl font-semibold">
              <div className="relative text-[#EDEADE]">
                {/* <h2 className="fixed">Cellebration Cakes</h2> */}
                <h2 className="absolute ml-2 mt-2">
                  Beautiful Designs To Choose From.
                </h2>
                <button className="absolute text-sm ml-2 mt-12 bg-transparent hover:[#778899] text-[#EDEADE] font-semibold hover:text-gray-700 py-2 px-4 border border-[#EDEADE] hover:border-transparent rounded hover:bg-[#F7EF8A">
                  See More
                </button>
              </div>
              <video
                className="w-full aspect-video"
                src={engaged}
                autoPlay
                loop
                muted
                alt="video"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="text-sm mt-1 sm:text-3xl font-semibold">
              <div className="relative text-[#900C3F]">
                <h2 className="absolute ml-2 mt-2">
                  Chocolate covered strawberries
                </h2>
                <button className="absolute text-sm ml-2 mt-12 bg-transparent hover:[#900C3F] text-[#900C3F] font-semibold hover:text-white py-2 px-4 border border-[#900C3F] hover:border-transparent rounded hover:bg-[#bc0f52]">
                  See More
                </button>
              </div>
              <img className="h-[100%] w-[100%]" src={purplegold} alt="choco" />
            </div>
          </div>
          <div className="w-full">
            <div className="text-sm mt-1 sm:text-3xl font-semibold">
              <div className="relative text-[#bc0f52]">
                <h2 className="absolute ml-2 mt-2">Breakable Heart</h2>
                <button className="absolute text-sm ml-2 mt-12 bg-transparent hover:[#900C3F] text-[#900C3F] font-semibold hover:text-white py-2 px-4 border border-[#900C3F] hover:border-transparent rounded hover:bg-[#bc0f52]">
                  Shop Now
                </button>
              </div>
              <img className="h-[100%] w-[100%]" src={bbh} alt="logo" />
            </div>
          </div>
          <div className="w-full">
            <div className="text-sm mt-1 sm:text-3xl font-semibold">
              <div className="relative text-gray-700">
                <h2 className="ml-2 mt-2">Made with love</h2>
              </div>
              <div className="ml-2 mt-1 text-sm text-gray-700">
                We are committed to quality which separates us from other
                bakers. Every order is baked from scratch and handmade with love
                and care with the finest ingredients.
              </div>
              <img
                className="mt-10 object-scale-down h-48 w-96"
                src="mk-logo.ico"
                alt="logo"
              />
            </div>
          </div>
          <div className="w-full"></div>
          <div className="text-sm mt-1 sm:text-3xl font-semibold">
            <div className="relative text-gray-700">
              <h2 className="ml-2 mt-2"> @malaikatreats</h2>
              <h2 className="ml-2 mt-2">Follow us on Instagram</h2>{" "}
              <img
                className="mt-10 object-scale-down h-48 w-96"
                src="mk-logo.ico"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
