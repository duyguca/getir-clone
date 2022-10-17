import React from "react";
import { BsGlobe } from "react-icons/bs";
import { RiUserFill, RiUserAddFill } from "react-icons/ri";
function Header() {
  return (
    <div className="bg-brand-color">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#">
          <img
            src="https://cdn.getir.com/marketing/Getir_Logo_1621812382342.png"
            className=" items-center h-8"
          />
        </a>
        <nav className="flex gap-x-8 text-sm font-semibold">
          <a
            href="#"
            className="flex text-white items-center transition-all text-opacity-80 hover:text-opacity-100"
          >
            <BsGlobe size={20} />
            Turkce(TR)
          </a>
          <a
            href="#"
            className="flex text-white items-center transition-all text-opacity-80 hover:text-opacity-100"
          >
            <RiUserFill size={20} />
            Giris Yap
          </a>
          <a
            href="#"
            className="flex text-white items-center transition-all text-opacity-80 hover:text-opacity-100"
          >
            <RiUserAddFill size={20} />
            Kayit Ol
          </a>
        </nav>
      </div>
    </div>
  );
}
export default Header;
