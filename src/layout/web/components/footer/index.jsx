import React from "react";
import Logo from "./components/logo";
import KVKK from "./components/kvkk";
import Links from "./components/links";

const Footer = () => {
  return (
    <footer className="py-6 bg-[#2C2A22] text-white">
      <div className="container mx-auto flex flex-col items-center space-y-6 lg:flex-row lg:items-start lg:space-y-0 lg:justify-between px-4">
        <Logo />
        <KVKK />
        <Links />
      </div>
    </footer>
  );
};

export default Footer;
