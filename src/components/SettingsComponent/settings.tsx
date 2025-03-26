import Image from "next/image"
import icon from "@/img/cowmule-removebg-preview.png"

export default function Settings(){
  return (
    <>
    <div className="grid place-items-center mt-[100px] w-[100vw] h-[70vh] text-[#1F2B3D]">
      <form action="post" className="flex flex-col justify-between h-[40vh] w-[40vh]">
        <section id="social" className="flex flex-row justify-between">
      <label htmlFor="social name" className="pb-2 pt-2">SOCIAL NAME</label>
      <input type="text" id="username" name="username" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "/>
      </section>
        <section id="avatar" className="flex flex-row items-center justify-between">
          <label htmlFor="avatar">AVATAR</label>
        <Image src={icon} alt="profileImage" width={50} height={50} className="border-2 rounded-[50px] border-[#1F2B3D] border-solid" />
        <p>New Avatar</p>
      </section>
        <section id="email" className="flex flex-row justify-between">
      <label htmlFor="email" className="pb-2 pt-2">EMAIL</label>
      <input type="text" id="email" name="email" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "/>
      </section>
        <section id="password" className="flex flex-row justify-between">
      <label htmlFor="password" className="pb-2 pt-2">PASSWORD</label>
      <input type="text" id="password" name="password" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "/>
      </section>
        <section id="systemColor" className="flex flex-row justify-between items-center">
      <p>SYSTEM COLOR</p>
      <input type="radio" id="darkMode" name="darkMode" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "/>
      <p>DARK MODE</p>
      <input type="radio" id="lightMode" name="lightMode" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "/>
      <p>LIGHT MODE</p>
      </section>
        <section id="systemLanguage" className="flex flex-row justify-between">
        <p>SYSTEM LANGUAGE</p>
        <select name="Language" id="language" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid">
          <option value="portuguese">Português</option>
          <option value="english">English</option>
          <option value="other">Other</option>
        </select>
      </section>
      </form>
      <div className="flex flex-row">
      <button type="reset" className="border-2 rounded-[20px] border-[#1f2b3d] border-solid bg-[#1f2b3d] pr-2.5 pl-2.5 mr-5 text-white">DISCARD</button>
      <button type="submit" className="border-2 rounded-[20px] border-[#1f2b3d] border-solid bg-[#1f2b3d] pr-2.5 pl-2.5 mr-5 text-white">SAVE</button>
      </div>
    </div>
    </>
  )
}