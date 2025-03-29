import Image from "next/image";
import icon from "@/img/cowmule-removebg-preview.png";

export default function TaskCreate() {
  return (
    <>
      <div className="grid place-items-center mt-5">
        <div className="z-10 text-[#1F2B3D] flex flex-col rounded-[20px] border-6 border-[#1F2B3D] border-solid w-[50vh] p-2.5">
        <section id="taskInfo">
          <div className="flex flex-col">
            <label htmlFor="taskName" className="ml-1.5">Task Name</label>
            <input type="text" className="border-2 rounded-[5px] border-[#1F2B3D] border-solid mb-1.5" />
            <label htmlFor="taskDescription" className="ml-1.5">Description</label>
            <textarea name="taskDescription" id="taskDescription" className="mb-1.5 resize-none border-2 rounded-[5px] border-[#1F2B3D] border-solid h-[150px]"></textarea>
          </div>
          <div className="grid grid-cols-2 ml-1.5">
            <section className="order-1 flex flex-row gap-1.5 mb-1.5">
            <label htmlFor="project">Project</label>
            <input type="text" className="mr-2.5 w-full h-[28px] border-2 rounded-[5px] border-[#1F2B3D] border-solid" />
            </section>
            <section className="flex flex-row order-3 gap-1.5 mb-1.5">
            <label htmlFor="Due date" className="w-1/2">Due date</label>
            <input type="text" className="mr-2.5 w-full h-[28px] border-2 rounded-[5px] border-[#1F2B3D] border-solid" />
            </section>
            <section className="flex flex-row order-5 gap-1.5">
            <label htmlFor="members">Members</label>
            <div className="flex -space-x-2 overflow-hidden">
            <Image src={icon} alt="Avatar" width={50} height={50} className="inline-block size-10 rounded-full border-[#1f2b3d] border-solid border-2"/>
            <Image src={icon} alt="Avatar" width={50} height={50} className="inline-block size-10 rounded-full border-[#1f2b3d] border-solid border-2"/>
            <Image src={icon} alt="Avatar" width={50} height={50} className="inline-block size-10 rounded-full border-[#1f2b3d] border-solid border-2"/>
            </div>
            </section>
            <section className="flex flex-row order-2 gap-1.5">
            <label htmlFor="project">PBI</label>
            <input type="text" className="mr-2.5 h-[28px] w-full border-2 rounded-[5px] border-[#1F2B3D] border-solid" />
            </section>
            <section className="flex flex-row order-4 gap-1.5">
            <label htmlFor="project">Priority</label>
            <input type="text" className="mr-2.5 w-full h-[28px] border-2 rounded-[5px] border-[#1F2B3D] border-solid" />
            </section>
            <section className="flex flex-row order-6 gap-1.5">
            <label htmlFor="project">Labels</label>
            <input type="text" className="mr-2.5 w-full h-[28px] border-2 rounded-[5px] border-[#1F2B3D] border-solid" />
            </section>
          </div>
          <div>
            <section className="mt-2.5 mb-2.5 mr-2.5 ml-2.5 flex flex-col justify-between">
              <p>Acceptance criteria</p>
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
      </div>
          <div>
            <section id="DefinitionOfDone" className="mt-2.5 mb-2.5 flex flex-col justify-between">
              <p className="ml-1.5">Definition of done</p>
              <textarea name="DefinitionOfDone" id="definitionOfDone" className="mb-1.5 resize-none border-2 rounded-[5px] border-[#1F2B3D] border-solid"></textarea>
            </section>
            <section id="Attachments" className="mt-2.5 mb-2.5 mr-2.5 ml-2.5 flex flex-col justify-between">
              <h1>Attachments</h1>
              <p className="ml-1.5">+ Add document</p>
            </section>
          </div>
        </section>
        <section id="comments">
          <h1 className=" ml-2.5 mb-2.5">Comments</h1>
          <div className="flex flex-row">
            <section id="comment" className="ml-2.5 w-[150px]">
            <Image src={icon} alt="Avatar" width={50} height={50} className="border-2 rounded-[50px] border-[#1F2B3D] border-solid" />
            </section>
            <div className="flex flex-col">
              <h1 className="ml-1.5 mb-1.5">Username</h1>
              <p className="ml-1.5 mb-1.5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div>
            <h1 className="ml-1.5 mb-1.5">Username</h1>
            <textarea name="comment" id="comment" className="resize-none h-[30px] w-full border-2 rounded-[5px] border-[#1F2B3D] border-solid"></textarea>
          </div>
        </section>
        <div className="flex flex-row justify-end">
        <button type="submit" className="border-2 rounded-[5px] border-[#1f2b3d] border-solid bg-[#1f2b3d] w-[100px] mb-2.5 mr-5 text-white">Discard</button>
        <button type="reset" className="border-2 rounded-[5px] border-[#1f2b3d] border-solid bg-[#1f2b3d] w-[100px] mb-2.5 mr-5 text-white">Save</button>
        </div>
        </div>
      </div>
    </>
  );
}