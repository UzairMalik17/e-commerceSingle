import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../../Shared/ComponentWrapper/Wrapper";
import * as Icons from "../../../Svg/Icons";
import PasswordInput from "@/components/Shared/Inputs/PasswordInput";
import TextInput from "@/components/Shared/Inputs/TextInput";
import TelInput from "@/components/Shared/Inputs/TelInput";

const SignupForm = () => {
  interface FormData {
    name: string;
    email: string;
    phone: any;
    password: string;
    confirmPassword: string;
    otp: string;
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [phoneInput, setPhoneInput] = useState<any>("");
  const [match, setMatch] = useState<boolean>(false);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "+1",
      password: "",
      confirmPassword: "",
      otp: "",
    });
    setMatch(false);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    setMatch(formData.password === formData.confirmPassword);
    console.log(match);
  }, [formData.password, formData.confirmPassword]);
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
              <p>Create Account</p>
              <Icons.BigCurvedLine
                fill="none"
                stroke="#FFBB38"
                ClassName="w-full"
              />
            </div>
            <TextInput
              placeholder={"Enter Your Full Name"}
              state={formData.name}
              SetState={changeHandler}
              Type="text"
              IsCompulsory
              label="Full Name"
              Name="name"
              borderColor="#008026"
            />
            <TextInput
              placeholder="Email Address"
              state={formData.email}
              SetState={changeHandler}
              Type="email"
              IsCompulsory
              label="Email Address"
              Name="email"
              borderColor="#008026"
            />
            <TelInput
              IsCompulsory
              Name="phone"
              state={formData.phone}
              SetState={(phoneInput: any) => setPhoneInput(phoneInput)}
            />
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <PasswordInput
                state={formData.password}
                SetState={changeHandler}
                label="Password"
                Name="password"
                IsCompulsory
                placeholder={"Enter Password (min length 6 numbers)"}
              />
              <PasswordInput
                state={formData.confirmPassword}
                SetState={changeHandler}
                label="Confirm Password"
                Name="confirmPassword"
                IsCompulsory
                placeholder={"Enter Password (min length 6 numbers)"}
              />
            </div>
            <div className="w-full flex flex-col justify-start items-end gap-0.5">
              <TextInput
                placeholder={"Enter the 4 digit verification code"}
                state={formData.otp}
                SetState={changeHandler}
                Type="text"
                IsCompulsory
                label="OTP"
                Name="otp"
                borderColor="#008026"
              />
              <p className="text-[#008026] text-xs">Resend OTP?</p>
            </div>
            <p
              className={`w-full text-center text-red-600 text-base font-semibold ${
                match ? "hidden" : "inline-block"
              }`}>
              Passwords do not Match!
            </p>
            <input
              className={`w-full h-[60px] text-base capitalize text-white  ${
                match
                  ? "hover:cursor-pointer bg-black"
                  : "hover:cursor-not-allowed bg-gray-400"
              }`}
              type="submit"
              value={"Create Account"}
            />
            <div className="w-full flex flex-row items-center justify-center gap-1 text-base">
              <p className="text-gray-400">Already have an Account?</p>
              <Link href="/auth/login" className="font-inter font-normal">
                Login
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

export default SignupForm;
