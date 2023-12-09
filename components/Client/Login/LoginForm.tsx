import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../../Shared/ComponentWrapper/Wrapper";
import * as Icons from "../../../Svg/Icons";
import TelInput from "../../Shared/Inputs/TelInput";
import PasswordInput from "@/components/Shared/Inputs/PasswordInput";
import CheckboxInput from "@/components/Shared/Inputs/CheckboxInput";
const LoginForm = () => {
  interface FormData {
    password: string;
    phone: any;
  }
  const [formData, setFormData] = useState<FormData>({
    password: "",
    phone: "",
  });
  const [phoneInput, setPhoneInput] = useState<any>("");
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      password: "",
      phone: "+1",
    });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    setFormData({
      ...formData,
      phone: phoneInput,
    });
  }, [phoneInput]);
  return (
    <Wrapper>
      <div className="w-full h-full grid lg:grid-cols-2 gap-12">
        <form
          onSubmit={submitHandler}
          className="w-full h-full m-auto md:px-8 md:py-16 px-2 py-6">
          <div className="w-full h-full flex flex-col justify-center items-center gap-8 p-8 m-auto">
            <div className="text-center text-3xl font-bold">
              <p>Log In</p>
              <Icons.CurvedLine fill="none" stroke="#FFBB38" ClassName="" />
            </div>
            <TelInput
              IsCompulsory
              Name="phone"
              state={formData.phone}
              SetState={(phoneInput: any) => setPhoneInput(phoneInput)}
            />
            <PasswordInput
              state={formData.password}
              SetState={changeHandler}
              label="Password"
              name="password"
              IsCompulsory
              placeholder={"Enter Password (min length 6 numbers)"}
            />
            <div className="w-full flex flex-row items-center justify-between">
              <CheckboxInput />
              <Link
                href="/"
                className="font-inter font-normal text-base text-[#008026]">
                Forgot Password?
              </Link>
            </div>
            <input
              className="w-full h-[60px] bg-black text-base capitalize text-white hover:cursor-pointer"
              type="submit"
              value={"Login"}
            />
            <div className="w-full flex flex-row items-center justify-center gap-1 text-base">
              <p className="text-gray-400">Don't have an Account?</p>
              <Link href="/auth/signup" className="font-inter font-normal">
                Sign Up Free
              </Link>
            </div>
          </div>
        </form>
        <div className="w-full h-full lg:inline-block hidden relative">
          <Image
            src="/Assets/Login/login_image.png"
            alt="login image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginForm;
