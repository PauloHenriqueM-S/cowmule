export default function Recovery() {
  return (
    <>
      <div className="grid place-items-center mt-40">
        <div className="flex items-center justify-center flex-col w-[50vh] h-[30vh] text-[#1F2B3D] text-center border-6 rounded-[20px] border-[#1F2B3D] border-solid mt-10 ">
          <form action="get" className="flex flex-col p-0 m-0 ">
            <label htmlFor="email" className="pb-2 pt-2">
              USERNAME OR EMAIL
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "
            />
            <button
              type="submit"
              className="rounded-[20px] border-2 border-[#1F2B3D] border-solid bg-[#1F2B3D] text-white pb-2 pt-2 mt-5"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
