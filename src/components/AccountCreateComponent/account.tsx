'use client'
import { validatePassword } from "@/scripts/validation";
import bcrypt from "bcryptjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";

export default function Account() {
  const { register, handleSubmit, watch } = useForm();
  const password = watch("password");
  const validation = validatePassword(password);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  }

  async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  const onSubmit = async (data: any) => {
    if (data.password !== data.repeatPassword) {
      alert("As senhas nao correspondem!");
      return;
    }

    if (!validation.uppercase || !validation.specialCharacter || !validation.number || !validation.characterLong) {
      alert("A senha deve conter pelo menos uma letra maiuscula, um caractere especial (!@#$%^&*) e um numero.");
      return;
    }

    if (!isValidEmail) {
      alert("Email invalido!");
      return;
    }

    const hashedPassword = await hashPassword(data.password);
    console.log("Username:", data.username);
    console.log("Email:", data.email);
    console.log("Password:", hashedPassword);

    alert("Conta criada com sucesso!");
    redirect('/login');
  }

  return (
    <>
      <div className="grid place-items-center mt-2">
        <div className="flex items-center justify-center flex-col w-[50vh] h-[80vh] text-[#1F2B3D] text-center border-6 rounded-[20px] border-[#1F2B3D] border-solid mt-10 ">
          <form action="post" className="flex flex-col p-0 m-0 " onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username" className="pb-2 pt-2">USERNAME</label>
            <input placeholder='Username' {...register('username')} className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pt-1 pb-1 mb-2 text-center align-middle"/>
            <label htmlFor="email" className="pb-2 pt-2">EMAIL</label>
            <input placeholder='Email' {...register('email')} value={email} onChange={handleEmailChange} className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pt-1 pb-1 mb-2 text-center align-middle"/>
            <label htmlFor="password" className="pb-2 pt-2">PASSWORD</label>
            <input type='password' placeholder='Password' {...register('password')} className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pt-1 pb-1 mb-2 text-center align-middle" value={password}/>
            <label htmlFor="password" className="pb-2 pt-2">REPEAT PASSWORD</label>
            <input type="password" placeholder='Repeat Password' {...register('repeatPassword')} className="border-2 rounded-[20px] border-[#1F2B3D] border-solid pt-1 pb-1 mb-2 text-center align-middle"/>
            <p id="uppercase" className={`pb-2 pt-5 text-left flex items-center ${validation.uppercase ? "text-green-500" : "text-red-500"}`}>
            <span>{validation.uppercase ? "✔️" : "❌"}</span>
            &nbsp; Least 1 uppercase
            </p>
            <p id="specialCharacter" className={`pb-2 pt-2 text-left flex items-center ${validation.specialCharacter ? "text-green-500" : "text-red-500"}`}>
            <span>{validation.specialCharacter ? "✔️" : "❌"}</span>
            &nbsp; Least 1 special character
            </p>
            <p id="number" className={`pb-2 pt-2 text-left ${validation.number ? "text-green-500" : "text-red-500"}`}>
            <span>{validation.number ? "✔️" : "❌"}</span>
            &nbsp; Least 1 number
            </p>
            <p id="characterLong" className={`pb-2 pt-2 text-left ${validation.characterLong ? "text-green-500" : "text-red-500"}`}>
            <span>{validation.characterLong ? "✔️" : "❌"}</span>
            &nbsp; Least 6 character
            </p>
            <button type="submit" className="rounded-[20px] border-2 border-[#1F2B3D] border-solid bg-[#1F2B3D] text-white pb-2 pt-2 mt-5">Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
}
