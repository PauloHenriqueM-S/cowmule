import Image from "next/image";
import icon from "@/img/cowmule-removebg-preview.png";

export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-start h-25 p-0 m-[5px] border-6 rounded-[20px] border-[#1F2B3D] border-solid">
        <Image
          src={icon}
          alt="Cowmule"
          width={100}
          height={50}
          className="m-1"
        />
        <h1 className="flex self-center text-4xl text-[#1F2B3D]">Cowmule</h1>
      </div>
    </>
  );
}
