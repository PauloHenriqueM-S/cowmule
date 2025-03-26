import Link from "next/link"

export default function MainPage() {
  return (
    <>
    <div className="flex flex-row">
    <aside id="sidebar" className="flex flex-col border-6 h-full w-[200px] rounded-[20px] border-[#1F2B3D] border-solid text-[#1F2B3D]">
      <section  className="flex flex-col justify-between ml-5 mt-5">
        <p>Inbox</p>
        <ul className="flex flex-col justify-between ml-5 mt-2 h-[150px]">
          <li className="mt-1 mb-1"><Link href="/">Tasks</Link></li>
          </ul>
      </section>
      <section className="flex flex-col justify-between ml-5 mt-5">
        <p>Project</p>
        <ul className="flex flex-col ml-5 mt-2 h-[150px]">
        <li className="mt-1 mb-1"><Link href="/">Roadmap</Link></li>
        <li className="mt-1 mb-1"><Link href="/">Epics</Link></li>
        <li className="mt-1 mb-1"><Link href="/">Features</Link></li>
        <li className="mt-1 mb-1"><Link href="/">Tasks</Link></li>
        <li className="mt-1 mb-1"><Link href="/">Backlog</Link></li>
        </ul>
      </section>
      <section className="flex flex-col justify-between ml-5 mt-5">
        <p>Kanban</p>
        <ul className="flex flex-col ml-5 mt-2 h-[150px]">
          <li className="mt-1 mb-1"><Link href="/">Tasks</Link></li>
          <li className="mt-1 mb-1"><Link href="/">Backlog</Link></li>
        </ul>
      </section>
      <section className="flex flex-col justify-between ml-5 mt-5">
        <p>Scrum agile</p>
        <ul className="flex flex-col ml-5 mt-2 h-[150px]">
          <li className="mt-1 mb-1"><Link href="/">Sprints</Link></li>
          <li className="mt-1 mb-1"><Link href="/">Dashboards</Link></li>
          <li className="mt-1 mb-1"><Link href="/">Backlog</Link></li>
        </ul>
      </section>
    </aside>
    <div id="content" className="text-[#1F2B3D] mt-5 ml-5 mr-5 w-full">
      <section className="flex flex-row gap-[100px] w-full mb-10">
          <input type="text" name="Search" id="search" placeholder="Search" className="text-center border-2 rounded-[20px] border-[#1F2B3D] border-solid bg-[#1F2B3D] text-white"/>
          <p>Epic</p>
          <p>Feature</p>
          <p>Task</p>
          <p>Labels</p>
      </section>
      <section>
        <div className="flex flex-row justify-between ml-30 mr-30 mb-5 ">
          <p>To Do</p>
          <p>In Progress</p>
          <p>In Review</p>
          <p>Done</p>
        </div>
        <div className="flex flex-row justify-between ">
          <section id="toDo" className="flex flex-col ml-2.5 mt-2.5 mb-2.5 w-[250px] h-[400px]  border-6 rounded-[20px] border-[#1F2B3D] border-solid">
            <div className="flex justify-center items-center ml-2.5 mr-2.5 mt-2.5 mb-2.5 border-6 rounded-[20px] border-[#1f2b3d] border-solid">
              <h1>task 6</h1>
            </div>
          </section>
          <section id="inProgress" className="flex flex-col mt-2.5 mb-2.5 w-[250px] h-[400px]  border-6 rounded-[20px] border-[#1F2B3D] border-solid">
          <div className="flex justify-center items-center mr-2.5 ml-2.5 mt-2.5 mb-2.5 border-6 rounded-[20px] border-[#1f2b3d] border-solid">
              <h1>task 5</h1>
            </div>
          </section>
          <section id="inReview" className="flex flex-col mt-2.5 mb-2.5 w-[250px] h-[400px]  border-6 rounded-[20px] border-[#1F2B3D] border-solid">
            <div className=" flex justify-center items-center mr-2.5 ml-2.5 mt-2.5 mb-2.5 border-6 rounded-[20px] border-[#1f2b3d] border-solid">
              <h1>task 4</h1>
            </div>
            </section>
          <section id="done" className="flex flex-col mr-2.5 mt-2.5 mb-2.5 w-[250px] h-[400px]  border-6 rounded-[20px] border-[#1F2B3D] border-solid">
            <div className="flex flex-col justify-center items-center mr-2.5 ml-2.5 mt-2.5 mb-2.5 border-6 rounded-[20px] border-[#1f2b3d] border-solid">
              <h1>task 1</h1>
            </div>
            <div className="flex flex-col justify-center items-center mr-2.5 ml-2.5 mt-2.5 mb-2.5 border-6 rounded-[20px] border-[#1f2b3d] border-solid">
              <h1>task 2</h1>
            </div>
            <div className="flex flex-col justify-center items-center mr-2.5 ml-2.5 mt-2.5 mb-2.5 border-6 rounded-[20px] border-[#1f2b3d] border-solid">
              <h1>task 3</h1>
            </div>

            </section>
        </div>
      </section>
      <section>
        <h1>Sprint burndown</h1>
        <div className="flex flex-row justify-between border-6 rounded-[20px] border-[#1F2B3D] border-solid">
        </div>
      </section>
    </div>
    </div>
    </>
  )
}