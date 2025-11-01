import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets"; 

export const SuccessBottomSheet = ({ onClose, onGoHome }) => {

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" onClick={onClose} />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative z-10 w-full max-w-lg bg-white rounded-t-[40px] px-6 pt-8 pb-10 shadow-[0_-8px_24px_rgba(0,0,0,0.15)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        dir="rtl"
      >
        <div className="text-center">
          <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#0E1621] mb-4">
            درخواست شما با موفقیت ثبت شد
          </h3>

          <img
            src={assets.Form_Validation} 
            alt="success"
            className="w-28 h-28 object-contain mx-auto my-3"
          />

          <p className="text-gray-500 text-[14px] sm:text-[16px] leading-7 mb-6">
            پس از پیگیری‌های لازم، در اسرع وقت با شما تماس 
            <br/>
            گرفته خواهد شد.
          </p>

          <button
            type="button"
            onClick={onGoHome || onClose}
            className="w-full bg-[#0E1621] text-[#BC802A] text-[20px] sm:text-[17px] font-semibold py-4 rounded-[16px] hover:opacity-90 transition active:scale-95 shadow-lg"
          >
            بازگشت به خانه
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessBottomSheet;
