import { useState } from "react";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  let Links = [
    { name: "CAKES", link: "/" },
    { name: "CUPCAKES & CAKEPOPS", link: "/" },
    { name: "CHOCOLATE STRAWBERRIES", link: "/" },
    { name: "BREAKABLE HEARTS", link: "/" },
  ];
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p className="text-base ">x</p>
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#FFCBA5"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[18vw] bg-[#FFCBC4] p-7 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {/* <h3 className="mt-20 text-3xl font-semibold text-white">
          I am a sidebar
        </h3> */}
        <div className="mt-10 mr-10">
          <span>
            <img src="mk-logo.ico" alt="" />
          </span>
        </div>
        <ul className="text-gray-600">
          {Links.map((link) => (
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;