import React from "react";
import { Link } from "react-router-dom";
import { InstaLogo } from "./Login";

function Register({
  handleAction,
  setUserName,
  setPassword,
  setEmail,
  setFullName,
}) {
  return (
    <main className="bg-white items-stretch flex flex-col  flex-grow flex-shrink-0 min-h-screen text-black">
      <div className=" flex-grow w-full justify-center items-stretch flex py-8 mx-auto box-border ">
        <div className="flex flex-col justify-center max-w-sm flex-grow ">
          <div className="py-3 mb-3 flex flex-col items-center border-2">
            <InstaLogo />
            <div className="mb-5 w-full">
              <form className="flex flex-col">
                <h2 className="mx-10 font-extrabold text-[var(--ig-secondary-text)] text-center">
                  Sign up to see photos and videos from your friends.
                </h2>
                {/* <PrimaryButton label={"Login with Google"} /> */}
                <div className="mx-10 mt-5 mb-5">
                  <div className=" flex flex-row items-center">
                    <div className=" top-[0.45rem] bg-[var(--ig-separator)] h-[2px] flex-grow"></div>
                    <div className=" uppercase mx-4 font-600 ">or</div>
                    <div className=" top-[0.45rem] bg-[var(--ig-separator)] h-[2px] flex-grow"></div>
                  </div>
                </div>
                <InputField
                  onChange={(e) => setEmail(e.target.value)}
                  placeHolder={"Email"}
                />
                <InputField
                  onChange={(e) => setFullName(e.target.value)}
                  placeHolder={"Full Name"}
                />
                <InputField
                  onChange={(e) => setUserName(e.target.value)}
                  placeHolder={"Username"}
                />
                <InputField
                  onChange={(e) => setPassword(e.target.value)}
                  placeHolder={"Password"}
                />
                <PrimaryButton onClick={handleAction} label={"Sign up"} />
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center py-3 border-2">
            <p className="m-4">
              Have an account?{" "}
              <Link to={"/login"} className=" text-blue-400 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
export function PrimaryButton({ label, onClick }) {
  return (
    <div className="mx-10 my-2 flex flex-row justify-start shrink-0 items-stretch ">
      <button
        type="button"
        onClick={onClick}
        className="flex-grow font-600 text-white bg-[var(--ig-primary-button)] w-auto py-2 box-border text-center px-4 rounded-lg"
      >
        {label}
      </button>
    </div>
  );
}

export function InputField({ placeHolder, onChange }) {
  return (
    <div className="mx-10 mb-2 block ">
      <div className="w-full box-border flex border-2">
        <label className="flex flex-grow">
          <input
            onChange={onChange}
            placeholder={placeHolder}
            className="bg-[rgb(250,250,250)] w-full h-8 overflow-hidden outline-none pt-[9px] pb-2 pl-2"
          ></input>
        </label>
      </div>
    </div>
  );
}
