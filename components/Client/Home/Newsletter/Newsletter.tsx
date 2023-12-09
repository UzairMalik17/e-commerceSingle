import React from "react";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
const Newsletter: React.FC = () => {
  const [email, setemail] = useState("");
  return (
    <div className="w-full h-[300px] pt-10">
      <div className="w-full h-full flex flex-col items-center justify-center gap-8 bg-[url('/Assets/Home/Newsletter/background.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="font-bold text-xl sm:text-4xl">Get our latest offer</p>
          <p className="text-base sm:text-lg">Newsletter</p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setemail("");
          }}
          className="w-11/12 md:w-full max-w-[550px] h-12 flex flex-row items-center justify-center gap-0 bg-white-main">
          <div className="w-10 sm:w-14 h-full flex justify-center items-center">
            <CiMail className="w-6 h-6" />
          </div>
          <input
            placeholder="EMAIL ADDRESS"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
            required
            className="w-[calc(100%-40px-64px)] sm:w-[calc(100%-56px-128px)] h-full placeholder:text-black-main leading-3 border-none outline-none"></input>
          <button
            type="submit"
            value={"submit"}
            className="w-16 sm:w-32 h-full bg-green-600 text-white-main">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
