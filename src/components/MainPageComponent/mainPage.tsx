import Link from "next/link"

export default function MainPage() {
  return (
    <>
    <div id="sidebar" className="flex flex-col border-6 h-[87vh] w-[200px] rounded-[20px] border-[#1F2B3D] border-solid text-[#1F2B3D]">
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
    </div>
    <div id="content">
    </div>
    </>
  )
}