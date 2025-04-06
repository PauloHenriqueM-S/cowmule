'use client'
import Image from "next/image";
import icon from "@/img/cowmule-removebg-preview.png";

export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-start h-25 p-0 m-[5px] border-6 rounded-[20px] border-[#1F2B3D] border-solid text-[#1F2B3D]">
        <Image
          src={icon}
          alt="Cowmule"
          width={100}
          height={50}
          className="m-1"
          loading="lazy"
        />
        <h1 className="flex self-center text-4xl text-[#1F2B3D]">Cowmule</h1>
        <div id="user" className="flex flex-row ml-auto mr-5 items-center">
        <p className="mr-2">Username</p>
        <p>|</p>
        <p className="mr-2 ml-2" onClick={() => {
          window.location.href = "/settings"
        }}>Settings</p>
        <p>|</p>
        <p className="ml-2">Logout</p>
        </div>
      </div>
    </>
  );
}
