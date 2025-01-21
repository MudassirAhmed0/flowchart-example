"use client";
import React from "react";
import Link from "next/link";

const PaginationActions = () => {
  return (
    <div className="flex items-stretch justify-center md:gap-x-[2.08333333333vw] gap-x-[16px]">
      <Link href="/">
        <img
          className=" md:w-[4.16666666667vw] flipped w-[32px] cursor-pointer"
          src="/images/icons/pagination-right.svg"
          alt="pagination"
        />
      </Link>
      <div className="flex">
        <Link
          href="#"
          className="hover:text-[#4FE0A3] cursorpointer transition-all duration-500 md:w-[4.16666666667vw] w-[32px] text-[#4A4A4A] flex justify-center items-center heading4 font-[500]"
        >
          <span className="block">10</span>
        </Link>
        <Link
          href="#"
          className="hover:text-[#4FE0A3] cursorpointer transition-all duration-500 md:w-[4.16666666667vw] w-[32px] text-[#4A4A4A] flex justify-center items-center heading4 font-[500]"
        >
          <span className="block">..</span>
        </Link>
        <Link
          href="#"
          className="hover:text-[#4FE0A3] cursorpointer transition-all duration-500 md:w-[4.16666666667vw] w-[32px] text-[#4A4A4A] flex justify-center items-center heading4 font-[500]"
        >
          <span className="block">4</span>
        </Link>
        <Link
          href="#"
          className="hover:text-[#4FE0A3] cursorpointer transition-all duration-500 md:w-[4.16666666667vw] w-[32px] text-[#4A4A4A] flex justify-center items-center heading4 font-[500]"
        >
          <span className="block">3</span>
        </Link>
        <Link
          href="#"
          className="hover:text-[#4FE0A3] cursorpointer transition-all duration-500 md:w-[4.16666666667vw] w-[32px] text-[#4A4A4A] flex justify-center items-center heading4 font-[500]"
        >
          <span className="block">2</span>
        </Link>
        <Link
          href="#"
          className="hover:text-[#4FE0A3] cursorpointer transition-all duration-500 md:w-[4.16666666667vw] w-[32px] text-[#4A4A4A] flex justify-center items-center heading4 font-[500]"
        >
          <span className="block">1</span>
        </Link>
      </div>
      <Link href="/">
        <img
          className=" md:w-[4.16666666667vw] flipped w-[32px] cursor-pointer"
          src="/images/icons/pagination-left.svg"
          alt="pagination"
        />
      </Link>
    </div>
  );
};

export default PaginationActions;
