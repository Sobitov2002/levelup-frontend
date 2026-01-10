import React from "react";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="container m-auto p-4">
      <div className="grid grid-cols-2 items-center">
        <Image src="/icon.png" alt="Icon" width={60} height={60} />
        <div className=" bg-white ">
          <div className="flex items-center text-xl  space-x-8 text-gray-600">
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
  );
};

export default navbar;
