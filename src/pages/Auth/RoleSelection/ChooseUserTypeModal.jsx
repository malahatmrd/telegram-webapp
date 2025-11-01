import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";

export const ChooseUserTypeModal = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="
          relative bg-white rounded-[45px]
          border border-black
          shadow-[0_18px_48px_rgba(0,0,0,0.28)]
          w-[355px] h-[240px] p-4 overflow-hidden
        "
      >
        <div className="grid place-items-center h-full text-center">
          <div className="flex flex-col items-center gap-4">
            <img
              src={assets.Face_Id}
              alt=""
              className="h-12 w-12 object-contain -translate-y-1"
            />
            <h2 className="text-xl leading-5 font-semibold text-gray-800">
              نوع ورود خود را مشخص کنید!
            </h2>

            <div className="flex flex-col items-center gap-2 mt-1">
              <button
  onClick={() => onSelect("referral")}
                className="w-[150px] h-[30px] border border-[#C98D34] text-black text-xs rounded-[10px] cursor-pointer hover:bg-[#C98D3414] transition"
              >
                کارمند معرّف دارم
              </button>

              <button
                onClick={() => onSelect("chooseEmployee")}
                className="w-[150px] h-[30px] border border-[#C98D34] text-black text-xs rounded-[10px] cursor-pointer hover:opacity-90 transition"
              >
                می‌خوام کارمند انتخاب کنم
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
