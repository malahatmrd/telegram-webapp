import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

export default function SignUp({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-[2px]"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="w-full max-w-[420px] bg-white rounded-t-[30px] shadow-lg p-6 pb-10 text-center"
      >
        <div className="absolute top-3 left-0 right-0 flex justify-center">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        <div className="flex justify-center mt-2 mb-3">
          <img src={assets.logo} alt="logo" className="w-14 h-14 object-contain" />
        </div>

        <h2 className="text-[18px] font-bold text-[#040E1A] mb-3">ثبت نام</h2>

        <p className="text-[14px] font-semibold text-[#040E1A] leading-6 mb-6">
          از معرفی تا امضای قرارداد بانکی،<br /> همه‌چیز فقط در{" "}
          <span className="text-[#C98D34]">دو سوت!</span>
        </p>

        <form className="space-y-4">
          <input
            type="text"
            inputMode="numeric"
            placeholder="کد ملی"
            className="w-full border border-[#E0E0E0] rounded-xl py-3 px-4 text-center text-[15px] font-medium outline-none focus:ring-2 focus:ring-[#C98D34]"
          />
          <input
            type="tel"
            placeholder="شماره تماس"
            className="w-full border border-[#E0E0E0] rounded-xl py-3 px-4 text-center text-[15px] font-medium outline-none focus:ring-2 focus:ring-[#C98D34]"
          />
          <button
            type="submit"
            className="w-full bg-[#040E1A] text-[#C98D34] rounded-xl py-3 font-bold text-[16px] mt-3 shadow-md"
          >
            ارسال کد
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-400 hover:text-gray-600 text-[20px]"
          aria-label="بستن"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}
