import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";

export const SortModal = ({ show, onClose, onApply }) => {
  const [selected, setSelected] = useState("contracts");

  const options = [
    { id: "contracts", label: "تعداد قرارداد" },
    { id: "stars", label: "تعداد ستاره" },
    { id: "experience", label: "قدمت کارمند" },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="sort-modal"
          className="fixed inset-0 z-[60] flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 120, damping: 16 },
            }}
            exit={{
              y: "-100%",
              opacity: 0,
              transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
            }}
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
            className="
              relative z-10 w-full max-w-md mx-auto
              bg-white rounded-b-[32px]
              shadow-[0_8px_32px_rgba(0,0,0,0.2)]
              px-5 pt-6 pb-8
            "
          >
            <div className="bg-[#040E1A1A] rounded-[12px] flex items-center justify-between px-4 py-3 mb-6">
              <div className="flex items-center gap-2">
                <img
                  src={assets.black_Lists}
                  alt="icon"
                  className="w-6 h-6 object-contain opacity-80"
                />
                <span className="text-[#0E1621] font-semibold text-[18px]">
                  مرتب‌سازی بر اساس
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`
                    w-full flex items-center justify-between
                    border border-[#C98D34]
                    rounded-[12px] px-4 py-3 text-[16px] font-medium
                    transition
                    ${selected === opt.id ? "bg-[#FFF8EF]" : "bg-transparent"}
                  `}
                >
                  <span className="text-[#0E1621]">{opt.label}</span>
                  <span
                    className={`
                      w-8 h-8 rounded-[6px] border-2 border-[#C98D34] grid place-items-center
                      ${selected === opt.id ? "bg-[#C98D34]" : "bg-transparent"}
                    `}
                  >
                    {selected === opt.id && (
                      <img
                        src={assets.check}
                        alt="selected"
                        className="w-5 h-5 object-contain"
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                onApply(selected);
                onClose();
              }}
              className="
                w-full bg-[#0E1621]
                text-[#C98D34] font-semibold text-[18px]
                py-3 rounded-[14px]
                hover:opacity-90 transition shadow-md
              "
            >
              اعمال فیلتر
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
