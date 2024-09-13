import React from "react";
import logo from "../Images/cusplogo.webp";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa6";

const MagicLink2 = () => {
  return (
    <div className="bg-[#FFFCF6]">
      <div className="flex items-center justify-center h-screen  rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center h-auto w-96 border border-gray-300 shadow-lg p-6 rounded-md ">
          <div className="">
            <img src={logo} className="w-28" alt="cusp-logo" />
          </div>
          <div className="mt-6 pb-2 text-center">
            <p className="text-[#004A9C] text-[14px] font-[600]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="text-[14px] text-[#121416] text-center space-y-3 border-b border-b-gray-300">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p className="pb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="text-center pt-4 text-[#172B4D]">
            <p className="text-[14px]">
              ph number:+999999999,email:cuspsolar.com
            </p>
            <p className="text-[14px]">cuspsolar.com</p>
            <div className="flex gap-3 justify-center mt-4">
              <div className="p-1  border-2 border-[#9A9EA6]  rounded-full">
                <FaLinkedinIn size={14} className="text-[#9A9EA6]" />
              </div>
              <div className="p-1  border-2 border-[#9A9EA6]  rounded-full">
                <FaFacebookF size={14} className="text-[#9A9EA6]" />
              </div>
              <div className="p-1  border-2 border-[#9A9EA6]  rounded-full">
                <FaYoutube size={14} className="text-[#9A9EA6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicLink2;
