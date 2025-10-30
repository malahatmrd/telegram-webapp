import React from "react";
import images, { assets } from "../../assets/assets";

export default function SplashScreenWelcome() {
  return (
    <div className="mt-8 w-full mx-auto max-w-[420px] min-h-[88vh] bg-white flex flex-col items-center justify-between p-6">

      <div className="flex-1 w-full flex flex-col items-center justify-center pt-20"> 
        <div className="rounded-3xl p-4 -mt-10"> 
          <img
            src={assets.logo}
            alt="logo"
            className="w-40 h-40 object-contain"
          />
        </div>

        <h1 className="mt-8 text-2xl font-extrabold text-[#0C1C2E]"> 
          وام<span className="mx-1">2</span>ســـــــــوت
        </h1>

        <p className="mt-10 text-center leading-7 text-black text-[20px] font-bold max-w-[320px] drop-shadow-md">
          پل ارتباطی امن میان متقاضی و کارمند برای دریافت وام با احراز هویت دیجیتال
        </p>
      </div>

      <div className="w-full flex flex-col items-center pb-8">
        <button
          type="button"
          className="relative w-full max-w-[340px] h-[60px] mb-4 bg-[#0C1C2E] text-[#E9B44C]
                   rounded-2xl py-3 px-5 pr-12 font-semibold shadow-[0_10px_24px_rgba(0,0,0,.18)]
                   flex items-center"
          onClick={() => console.log('خوش آمدید!')}
        >
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            خوش آمدید !
          </span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center">
            <img src={assets.butBack} alt="arrow" className="w-6 h-6" />
          </span>
        </button>
      </div>

    </div>
  );
}