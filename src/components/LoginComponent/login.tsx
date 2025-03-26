import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="grid place-items-center mt-40">
        <div className="flex items-center justify-center flex-col w-[50vh] h-[50vh] text-[#1F2B3D] text-center border-6 rounded-[20px] border-[#1F2B3D] border-solid mt-10 ">
          <form action="get" className="flex flex-col p-0 m-0 ">
            <label htmlFor="email" className="pb-2 pt-2">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "
            />
            <label htmlFor="password" className="pb-2 pt-2">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2"
            />
            <button
              type="submit"
              className="rounded-[20px] border-2 border-[#1F2B3D] border-solid bg-[#1F2B3D] text-white pb-2 pt-2 mt-5"
            >
              Sign in
            </button>
          </form>
          <div className="flex flex-col mt-10">
            <Link href="/" className="mt-2 mb-2">
              I CAN&apos;T REMEMBER MY PASSWORD
            </Link>
            <Link href="/" className="mt-2 mb-2">
              I DON&apos;T HAVE AN ACCOUNT!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
