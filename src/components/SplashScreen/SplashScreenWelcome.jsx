import React from "react";
import images, { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export default function SplashScreenWelcome() {
  const navigate = useNavigate(); 
  return (
    <div className="-mt-9 w-full mx-auto max-w-[420px] min-h-screen bg-white flex flex-col">
      
      <div className="h-20"></div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="rounded-3xl p-4">
          <img
            src={assets.logo}
            alt="logo"
            className="w-40 h-40 object-contain"
          />
        </div>

        <h1 className="mt-4 text-[30px] font-extrabold text-[#040E1A]">
          وام<span className="mx-1">2</span>ســـــــــوت
        </h1>

        <p className="mt-10 text-center leading-7 text-[#040E1A] text-[20px] font-bold max-w-[320px]">
          پل ارتباطی امن میان متقاضی و کارمند برای دریافت وام با احراز هویت دیجیتال
        </p>
      </div>

      <div className="w-full px-6 pb-8">
        <button
          type="button"
          className="relative w-full max-w-[340px] mx-auto h-[60px] bg-[#040E1A] text-[#C98D34]
                 rounded-2xl font-semibold shadow-[0_10px_24px_rgba(0,0,0,.18)]
                 flex items-center cursor-pointer"
          onClick={() => navigate("/splash/start")}  
        >
          <span className="absolute inset-0 flex items-center justify-center">
            خوش آمدید !
          </span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <img src={assets.butBack} alt="arrow" className="w-6 h-6" />
          </span>
        </button>
        
      </div>

    </div>
  );
}