import React from "react";
import { Link } from "react-router-dom";
import { InputField, PrimaryButton } from "./Register";

function Login({ setUserOrEmail, setPassword, handleAction }) {
  return (
    <main className="bg-white items-stretch flex flex-col  flex-grow flex-shrink-0 min-h-screen text-black">
      <div className=" flex-grow w-full justify-center items-stretch flex py-8 mx-auto box-border ">
        <div className="flex flex-col justify-center max-w-sm flex-grow ">
          <div className="py-3 mb-3 flex flex-col items-center border-2">
            <InstaLogo />
            <div className="mb-5 w-full">
              <form className="flex flex-col">
                <InputField
                  onChange={(e) => setUserOrEmail(e.target.value)}
                  placeHolder={"username or email"}
                />
                <InputField
                  onChange={(e) => setPassword(e.target.value)}
                  placeHolder={"Password"}
                />
                <PrimaryButton
                  onClick={(e) => handleAction()}
                  label={"Login"}
                />
                <div className="mx-10 mt-5 mb-5">
                  <div className=" flex flex-row items-center">
                    <div className=" top-[0.45rem] bg-[var(--ig-separator)] h-[2px] flex-grow"></div>
                    <div className=" uppercase mx-4 font-600 ">or</div>
                    <div className=" top-[0.45rem] bg-[var(--ig-separator)] h-[2px] flex-grow"></div>
                  </div>
                </div>
                <button className=" text-sm inline-block text-center cursor-pointer ">
                  <span className=" w-4 h-4 bg-black mr-2 top-1"></span>
                  <span>Login with google</span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center py-3 border-2">
            <p className="m-4">
              Don't have an account?
              <Link to={"/register"} className=" text-blue-400 hover:underline">
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
export function InstaLogo() {
  return (
    <div className="font-extrabold text-4xl flex-shrink-0 text-center flex-grow-0  mt-10 mb-10 flex flex-col  ">
      INSTACLONE
    </div>
  );
}
