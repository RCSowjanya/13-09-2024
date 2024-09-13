import React, { useState } from "react";
import logo from "../Images/cusplogo.webp";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaIndianRupeeSign,
} from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const MagicLink3 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleConfirmClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="bg-[#FFFCF6]">
      <div className="flex items-center justify-center h-screen  rounded-lg shadow-lg">
        <div className="w-[30rem] border border-gray-300 shadow-lg py-6 px-8 rounded-md ">
          <div className="text-center">
            <img src={logo} className="w-28 mx-auto" alt="cusp-logo" />
          </div>
          <div className="mt-6 pb-2 text-center">
            <p className="text-[#004A9C] text-[14px] font-[600]">
              Select Your Preferred Solar Installation Proposal
            </p>
          </div>
          <div className="">
            <p className="text-[14px] mb-2">Installer ID:#123</p>
            <p className="text-[14px] font-[700]">Project Details : </p>
            <p className="flex text-[14px]">
              -Total Project Cost(Excl.Tax):{" "}
              <span className="flex">
                <FaIndianRupeeSign
                  size={14}
                  className="mt-1 text-gray-600 ml-2"
                />
                4,00,000
              </span>
            </p>
            <p className="flex text-[14px]">
              -Total Cost(Excl.Tax):{" "}
              <span className="flex">
                <FaIndianRupeeSign
                  size={14}
                  className="mt-1 text-gray-600 ml-2"
                />
                4,00,000
              </span>
            </p>
            <p className="flex text-[14px]">
              -Total Project Cost(Excl.Tax):{" "}
              <span className="flex">
                <FaIndianRupeeSign
                  size={14}
                  className="mt-1 text-gray-600 ml-2"
                />
                4,00,000
              </span>
            </p>
            <p className="text-[#004A9C] text-[14px] my-1">
              Delivery Period in 30 days
            </p>
          </div>
          <div className="">
            <p className="text-center text-[14px] mb-2">
              Review and conform Your selection
            </p>
            <p className="text-[14px] mb-2">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="">
            <p className="text-[14px] mb-1">Your Queries</p>
            <textarea
              className="border border-gray-300 w-full p-2 rounded-md"
              placeholder="Enter Text"
              rows="3"
            />
            <p className="text-[14px] my-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="text-center border-b border-b-gray-300 pb-5">
              <button
                className="bg-green-400 text-white px-6 py-2 rounded-lg"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>

              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg w-[24rem] shadow-lg relative">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center bg-[#004A9C] text-white p-4 rounded-t-lg">
                      <h2 className="text-lg font-semibold">Confirmation</h2>
                      <button onClick={handleCloseModal} className="text-white">
                        <MdClose size={24} />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 text-center border-b border-gray-300">
                      <p>Are you sure you want to confirm your selection?</p>
                    </div>

                    {/* Modal Footer with Buttons */}
                    <div className="flex justify-end p-4 space-x-3">
                      <button
                        onClick={handleCloseModal}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                      <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

export default MagicLink3;
