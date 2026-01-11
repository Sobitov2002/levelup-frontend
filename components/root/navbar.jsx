import React from "react";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="container m-auto p-4  ">
     
      <div className="h-[10vh] min-h-[60px] flex items-center fixed bg-white border-b border-[#e5e7eb] top-0 left-0 right-0 z-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
        <Image src="/icon.png" alt="Icon" width={40} height={40} />
        <div className=" bg-white ">
          <div className="flex items-center text-[14px]  space-x-8 text-gray-600">
            <Link href="#" className="text-blue-600   font-samebold">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-900 ">
              Posts
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Notes
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Contact
            </Link>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default navbar;
