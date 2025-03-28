import Image from "next/image";
import icon from "@/img/cowmule-removebg-preview.png";

export default function CreateProject() {
  return (
    <>
    <div className="grid place-items-center">
    <div id="createProject" className="mt-10 text-[#1F2B3D] border-6 rounded-[20px] border-[#1F2B3D] border-solid w-[80vh] h-[65vh]">
      <section className="mt-2.5 mb-2.5 mr-2.5 ml-2.5 flex flex-col justify-between">
        <div id="projectInfo" className="flex flex-col">
          <label htmlFor="projectName">Project Name</label>
          <input type="text" className="border-2 rounded-[5px] border-[#1F2B3D] border-solid"/>
          <label htmlFor="projectDescription">Description</label>
          <textarea name="projectDescription" id="projectDescription" className="border-2 rounded-[5px] border-[#1F2B3D] border-solid h-[250px]"></textarea>
        </div>
        <div id="members" className="mt-2.5 mb-2.5 flex flex-row">
          <p>Members</p>
          <div id="membersAvatar" className="flex flex-row ml-5">
            <Image src={icon} alt="Avatar" width={50} height={50} className="border-2 rounded-[50px] border-[#1F2B3D] border-solid" />
          </div>
        </div>
      </section>
      <section className="mt-2.5 mb-2.5 mr-2.5 ml-2.5 flex flex-col justify-between">
        <p>Definition of done</p>
        <div id="definitionOfDone" className="mt-2.5 mb-2.5 ml-2.5">
          <div id="doneItems" className="mb-2.5">
            <input type="checkbox" name="done" id="done" />
            <label htmlFor="done" className="ml-2.5">Visual items</label>
          </div>
          <div id="addItems" >
            <p>+ Add items</p>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-end mr-5 mt-[40px]">
      <button className="w-[100px] h-[30px] mr-2.5 rounded-[5px] border-2 border-[#1F2B3D] border-solid">Discard</button>
      <button className="w-[100px] h-[30px] ml-2.5 rounded-[5px] border-2 border-[#1F2B3D] border-solid">Save</button>
      </div>
    </div>
    </div>
    </>
  );
}