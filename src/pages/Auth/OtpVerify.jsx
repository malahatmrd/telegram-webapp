import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

export default function OtpVerify({ onClose }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [status, setStatus] = useState(null);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code === "1234") setStatus("success");
    else setStatus("error");
  };

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
        <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-[10px] bg-[#E6E2E4] text-[#040E1A] text-[22px] font-bold px-10 py-1.5 [text-shadow:0_2px_0_rgba(0,0,0,0.25)]">
          ثبت نام
        </div>

        <p className="flex items-center justify-center text-[16px] font-semibold leading-7 mb-8">
          <img
            src={assets.Letter}
            alt="letter"
            className="w-[22px] h-[22px] object-contain ml-2"
          />
          <span className="text-[#040E1A]">
            کد <span className="font-bold">یکبار مصرف</span>{" "}
            <span className="text-[#040E1A80] font-medium">
              ارسال شده را وارد کنید.
            </span>
          </span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-4 mb-5" dir="ltr">
            {otp.map((num, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp[index] && index > 0) {
                    document.getElementById(`otp-${index - 1}`).focus();
                  }
                }}
                className="w-12 h-12 text-center border border-[#BC802A66] rounded-lg text-[20px] font-bold text-[#040E1A]
                           focus:ring-0 focus:border-[#BC802A] outline-none transition-colors duration-200 bg-white
                           hover:bg-[#FFF9F9] focus:bg-[#FFF9F9]"
              />
            ))}
          </div>

          {status === "error" && (
            <p className="text-[14px] text-[#FF0004] font-semibold mb-3">
              کد نامعتبر است، دوباره تلاش کنید!
            </p>
          )}
          {status === "success" && (
            <p className="text-[14px] text-[#00C10D] font-semibold mb-3">
              کد دوباره ارسال گردید!
            </p>
          )}

          <p className="text-[13px] text-[#040E1A80] mb-6">
            ارسال دوباره کد: <span className="font-semibold">3:00 دقیقه</span>
          </p>

          <button
            type="submit"
            className="w-full bg-[#040E1A] text-[#BC802A] rounded-2xl py-3 text-[17px] font-extrabold tracking-wide shadow-sm active:scale-95 transition-transform duration-150"
          >
            {status === "error" ? "ارسال دوباره کد" : "ادامه"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
