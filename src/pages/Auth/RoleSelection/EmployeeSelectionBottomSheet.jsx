import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";
import { SuccessBottomSheet } from "./SuccessBottomSheet";

export const EmployeeSelectionBottomSheet = ({ employee, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [afterExit, setAfterExit] = useState("none"); 
  const [showSuccess, setShowSuccess] = useState(false);

  const closeWithAnimation = (next = "close") => {
    setAfterExit(next);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeWithAnimation("success");
  };

  const sheetVariants = {
    initial: { y: "100%", rotate: -5, opacity: 0.6, scale: 0.95 },
    animate: {
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
    exit: {
      y: "120%",
      rotate: 10,
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.55, ease: [0.45, 0, 0.55, 1] },
    },
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (afterExit === "success") {
            setShowSuccess(true);
            setAfterExit("none");
          } else if (afterExit === "close") {
            onClose?.();
            setAfterExit("none");
          }
        }}
      >
        {isOpen && !showSuccess && (
          <motion.div
            key="employee-sheet"
            className="fixed inset-0 z-50 flex items-end justify-center"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={backdropVariants}
          >
            <motion.div
              variants={backdropVariants}
              className="absolute inset-0 bg-black/30 backdrop-blur-[3px]"
              onClick={() => closeWithAnimation("close")}
            />

            <motion.div
              variants={sheetVariants}
              className="
                relative z-10 bg-white w-full max-w-lg
                rounded-t-[40px] pt-[50px] pb-8 px-6  
                shadow-[0_-8px_32px_rgba(0,0,0,0.25)]
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -top-[430px] left-1/2 -translate-x-1/2 pointer-events-none">
                <motion.img
                  initial={{ scale: 0.9, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 100 }}
                  src={assets.girl}
                  alt=""
                  className="w-[800px] h-[800px] object-contain transform scale-150"
                />
              </div>

              <div className="relative z-20 mt-10">
                <div className="text-center mb-3 mt-5" dir="rtl">
                  <div className="text-center mb-8 mt-6" dir="rtl">
                    <div className="flex items-center justify-center gap-2 mb-2 mt-8">
                      <img
                        src={assets.Time_Watch}
                        alt="time watch"
                        className="w-7 h-7 object-contain"
                      />
                      <p className="text-black text-[16px] font-extrabold">
                        شما در صف شماره{" "}
                        <span className="text-[#C98D34] font-bold text-[20px]">
                          {employee?.id ?? 3}
                        </span>{" "}
                        هستید...
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-5 text-[21px] leading-8 text-center text-black font-extrabold"
                    dir="rtl"
                  >
                    <span className="block">از معرفی تا امضای قرارداد بانکی،</span>
                    <span className="block flex items-center justify-center gap-2">
                      <span>همه‌چیز</span>
                      <span className="text-[#C98D34] font-bold">فقط در</span>
                      <img
                        src={assets.run_man}
                        alt="run man"
                        className="w-8 h-8 object-contain inline-block"
                      />
                      <span className="text-[#C98D34] font-bold">دو سوت!</span>
                    </span>
                  </p>

                  <p
                    className="mt-6 text-center leading-7 text-[15px] sm:text=[17px]"
                    dir="rtl"
                  >
                    <span className="text-gray-400">لطفاً </span>
                    <span className="font-semibold text-gray-700">نام</span>
                    <span className="text-gray-400"> - </span>
                    <span className="font-semibold text-gray-700">نام خانوادگی</span>
                    <span className="text-gray-400"> و </span>
                    <span className="font-semibold text-gray-700">شماره تماس</span>
                    <span className="text-gray-400"> خود را جهت</span>
                    <br />
                    <span className="text-gray-400">هماهنگی‌های لازم وارد کنید.</span>
                  </p>
                </div>

                <form className="flex flex-col gap-5" dir="rtl" onSubmit={handleSubmit}>
                  <div className="relative mt-4" dir="rtl">
                    <span className="absolute -top-3 right-5 px-2 bg-white text-[#C98D34] text-[14px] font-medium">
                      نام و نام خانوادگی:
                    </span>
                    <input
                      type="text"
                      placeholder=" نام و نام خانوادگی..."
                      autoComplete="off"
                      className="w-full h-14 border border-[#C98D34] rounded-[999px] px-5 text-[16px] text-gray-500 bg-white outline-none
                                 text-right placeholder:text-[16px] placeholder:font-medium placeholder:text-gray-400"
                    />
                  </div>

                  <div className="relative mt-5" dir="rtl">
                    <span className="absolute -top-3 right-5 px-2 bg-white text-[#C98D34] text-[14px] font-medium">
                      شماره تماس:
                    </span>
                    <input
                      type="tel"
                      placeholder="09141234567"
                      className="w-full h-14 border border-[#C98D34] rounded-[999px] px-5 text-[16px] text-gray-800 bg-white outline-none
                                 text-right placeholder:text-[18px] placeholder:font-medium placeholder:text-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-5 bg-[#0E1621] text-white text-[17px] font-semibold py-4 rounded-[16px] hover:opacity-90 transition active:scale-95 shadow-lg"
                  >
                    ارسال
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccess && (
          <SuccessBottomSheet
            key="success-sheet"
            onClose={() => {
              setShowSuccess(false);
              onClose?.();
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
