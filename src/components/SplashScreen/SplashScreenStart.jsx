import React from "react";
import { assets } from "../../assets/assets";

export default function SplashScreenStart() {
  return (
    <div className="-mt-8 w-full mx-auto max-w-[420px] min-h-screen bg-white flex flex-col">

      <div className="h-40 flex items-center px-6">
        <div className="flex items-center gap-3 ">
          <div className="w-13 h-13 rounded-[10px] overflow-hidden grid place-items-center bg-black/90">
            <img
              src={assets.logo}
              alt="logo"
              className="object-contain"
            />
          </div>
          <div className="leading-4 space-y-1.5">
  <div className="text-[17px] font-bold text-[#040E1A]">vam2sot</div>
  <div className="text-[13px] font-bold text-[#8090A3]">خرید و فروش آسان وام</div>
</div>

        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="rounded-3xl">
          <img
            src={assets.FrameDolar}
            alt="FrameDolar"
            className="w-[350px] h-[350px] object-contain"
          />

          <h1 className="text-center text-[20px] font-extrabold text-[#040E1A] mb-12">
            خرید و فروش انواع وام به آسانی
            <p className="mt-5 text-center leading-7 text-[#05254B82] text-[15px] font-bold max-w-[320px]">
              همه چیز از معرفی تا امضای قرارداد بانکی، آنلاین انجام می‌شود.
            </p>
          </h1>
        </div>




      </div>

      <div className="w-full px-6 pb-8">
        <button
          type="button"
          className="relative w-full max-w-[340px] mx-auto h-[60px] bg-[#0C1C2E]
                 rounded-2xl font-semibold shadow-[0_10px_24px_rgba(0,0,0,.18)]
                 flex items-center cursor-pointer"
        >
          <span className="absolute text-[#C98D34] inset-0 flex items-center justify-center">
            شروع!
          </span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <img src={assets.butBack} alt="arrow" className="w-6 h-6" />
          </span>
        </button>
      </div>

    </div>
  );
}