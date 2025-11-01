import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";
import { SortModal } from "./SortModal";

export const FilterModal = ({ show, onClose, setSortType }) => {
  const [showSortModal, setShowSortModal] = useState(false);
  const [sortType, setLocalSortType] = useState("contracts");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="filter-modal"
          className="fixed inset-0 z-50 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
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
              px-5 pt-4 pb-6
            "
          >
            <div className="bg-[#040E1A1A] rounded-[12px] flex items-center justify-between px-4 py-3 mb-6">
              <div className="flex items-center gap-2">
                <img
                  src={assets.black_Filter}
                  alt="filter icon"
                  className="w-7 h-7 object-contain opacity-80"
                />
                <span className="text-[#0E1621] font-semibold text-[20px]">
                  فیلتر
                </span>
              </div>
            </div>

            <div
              onClick={() => setShowSortModal(true)}
              dir="rtl"
              className="
                border border-[#C98D34] rounded-[12px] h-12
                flex items-center justify-between px-4 cursor-pointer
                text-[#C98D34] text-[16px] font-bold mb-6
              "
            >
              <div className="flex items-center gap-2 min-w-0">
                <img
                  src={assets.Lists}
                  alt="list"
                  className="w-6 h-6 object-contain opacity-70"
                />
                <span className="text-right truncate">
                  {sortType === "contracts"
                    ? "تعداد قرارداد"
                    : sortType === "stars"
                    ? "تعداد ستاره"
                    : "قدمت کارمند"}
                </span>
              </div>

              <img
                src={assets.down}
                alt="arrow"
                className="w-5 h-5 object-contain opacity-70"
              />
            </div>

            <SortModal
              show={showSortModal}
              onClose={() => setShowSortModal(false)}
              onApply={(val) => {
                setLocalSortType(val);
                setSortType(val); 
              }}
            />

            <button
              onClick={onClose}
              className="
                w-full bg-[#0E1621]
                text-[#C98D34] font-semibold text-[20px]
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
