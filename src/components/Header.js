import React from "react";

const Header = () => {
  let Links = [
    {
      name: "Curbside Pickup & Local Delivery Only - malaikatreats@gmail.com",
      link: "/",
    },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="mb-1">
        <ul className="text-[#778899] text-xs pt-1">
          {Links.map((link) => (
            <li
              key={link.name}
              className="mt-1 hover:text-gray-700 duration-500 text-center sm:text-left"
            >
              <a className="ml-2" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
