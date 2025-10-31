import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

export default function SignUp({ onClose, onNext }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="relative w-full max-w-[420px] bg-white rounded-t-[30px] shadow-lg px-6 pt-9 pb-12 text-center"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-7 inline-flex items-center justify-center rounded-[10px] bg-[#E6E2E4] text-[#040E1A] text-[18px] font-bold px-10 py-1.5 [text-shadow:0_2px_0_rgba(0,0,0,0.12)]">
          ثبت نام
        </div>

        <p className="text-[20px] font-bold text-[#040E1A] leading-8 text-center mb-5">
          از معرفی تا امضای قرارداد بانکی،
          <br />
          <span className="text-[#040E1A]">
            همه چیز <span className="text-[#C98D34]">فقط</span>{" "}
            <span className="text-[#C98D34]">در</span>
          </span>
          <img
            src={assets.Group}
            alt="group"
            className="inline-block mx-1 w-[35px] h-[35px] object-contain align-middle"
          />
          <span className="text-[#C98D34]">دو سوت!</span>
        </p>

        <p className="text-[16px] leading-7 text-center font-medium text-[#040E1A80] mb-9">
          لطفاً <span className="text-[#040E1A] font-bold">کد ملی</span> و{" "}
          <span className="text-[#040E1A] font-bold">شماره تماس</span> خود را جهت ثبت‌نام
          <br />
          وارد کنید.
        </p>

        <form className="space-y-7">
          <div className="relative group">
            <label className="absolute right-5 -top-3 px-2 text-[14px] font-bold text-[#BC802A] bg-white rounded-2xl">
              کدملی :
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="1405630145"
              className="w-full rounded-2xl border border-[#BC802A] bg-white text-right
                         text-[16px] font-bold text-[#040E1A66] placeholder-[#040E1A66]
                         py-3.5 px-4 outline-none focus:ring-0 focus:border-[#BC802A]
                         hover:bg-[#FFF9F9] focus:bg-[#FFF9F9] transition-colors duration-200"
            />
          </div>

          <div className="relative group">
            <label className="absolute right-5 -top-3 px-2 text-[14px] font-bold text-[#BC802A] bg-white rounded-2xl">
              شماره تماس :
            </label>
            <input
              type="tel"
              placeholder="09141234567"
              className="w-full rounded-2xl border border-[#BC802A] bg-white text-right
                         text-[16px] font-bold text-[#040E1A66] placeholder-[#040E1A66]
                         py-3.5 px-4 outline-none focus:ring-0 focus:border-[#BC802A]
                         hover:bg-[#FFF9F9] focus:bg-[#FFF9F9] transition-colors duration-200"
            />
          </div>

          <button
            type="button"
            onClick={onNext}
            className="mt-2 w-full bg-[#040E1A] text-[#BC802A] rounded-2xl py-3.5 text-[17px] font-extrabold tracking-wide shadow-sm active:scale-95 transition-transform duration-150 cursor-pointer"
          >
            ارسال کد
          </button>
        </form>
      </motion.div>
    </div>
  );
}
