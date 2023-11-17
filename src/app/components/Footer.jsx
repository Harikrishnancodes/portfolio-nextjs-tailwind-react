import React from "react";
import copyright from "../../../public/copyright.svg"
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      
        <p className="text-slate-600">All rights reserved.  <Image src={copyright} alt="copyright Icon" />  Harikrishnan</p> 
       
      </div>
    </footer>
  );
};

export default Footer;
