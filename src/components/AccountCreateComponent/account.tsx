export default function Account() {
  return (
    <>
    <div className="grid place-items-center mt-2">
      <div className="flex items-center justify-center flex-col w-[50vh] h-[80vh] text-[#1F2B3D] text-center border-6 rounded-[20px] border-[#1F2B3D] border-solid mt-10 ">
      <form action="post" className="flex flex-col p-0 m-0 ">
        <label htmlFor="username" className="pb-2 pt-2">USERNAME</label>
        <input type="text" id="username" name="username" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "/>
        <label htmlFor="email" className="pb-2 pt-2">EMAIL</label>
        <input type="email" id="email" name="email" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2 "/>
        <label htmlFor="password" className="pb-2 pt-2">PASSWORD</label>
        <input type="password" id="password" name="password" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2" />
        <label htmlFor="password" className="pb-2 pt-2">REPEAT PASSWORD</label>
        <input type="password" id="repeat-password" name="repeat-password" className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pb-2" />
        <p id="uppercase" className="pb-2 pt-5 text-left">Least 1 upperacase</p>
        <p id="specialCharacter" className="pb-2 pt-2 text-left">Least 1 special character</p>
        <p id="number" className="pb-2 pt-2 text-left">Least 1 number</p>
        <p id="characterLong" className="pb-2 pt-2 text-left">Least 6 character long</p>
        <button type="submit" className="rounded-[20px] border-2 border-[#1F2B3D] border-solid bg-[#1F2B3D] text-white pb-2 pt-2 mt-5">Sign up</button>
      </form>
      </div>
    </div>
    </>
  )
}