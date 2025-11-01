import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";

export const ReferralCodeModal = ({ onClose }) => {
    const [code, setCode] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        const cleanValue = value.replace(/[^\dA-Za-z]/g, "").toUpperCase();
        if (!cleanValue) return;

        const newCode = [...code];
        newCode[index] = cleanValue;
        setCode(newCode);

        if (index < code.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            const newCode = [...code];

            if (newCode[index]) {
                newCode[index] = "";
                setCode(newCode);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }

        if (e.key === "ArrowRight" && index < code.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
        if (e.key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData
            .getData("text")
            .replace(/[^\dA-Za-z]/g, "")
            .toUpperCase()
            .split("")
            .slice(0, code.length);

        const newCode = [...code];
        pastedData.forEach((char, i) => {
            newCode[i] = char;
        });
        setCode(newCode);

        const nextIndex = Math.min(pastedData.length, code.length - 1);
        inputRefs.current[nextIndex]?.focus();
    };

    const handleSubmit = () => {
        const referralCode = code.join("");
        console.log("کد معرف:", referralCode);
        onClose?.();
    };

    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 flex items-end justify-center bg-black/20 backdrop-blur-[1px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
            >
                <motion.div
                    key="sheet"
                    initial={{ y: 56, opacity: 0.9 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 56, opacity: 0.9 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    className="relative bg-white w-[393px] h-[432px]
                     rounded-t-[36px] border border-black/10
                     shadow-[0_18px_48px_rgba(0,0,0,0.28)]
                     px-6 pt-6 pb-7 text-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex h-full flex-col items-center text-center">
                        <div className="mt-2">
                            <img src={assets.Frame_rol} alt="" />
                        </div>

                        <div className="flex-1" />

                        <div className="flex flex-col items-center gap-6 mb-3">
                            <p className="text-[18px] text-center leading-6" dir="rtl">
                                <span className="text-[#0D0E12] font-extrabold">کد معرفی</span>
                                <span className="text-gray-500 font-bold"> را وارد کنید!</span>
                            </p>

                            <div className="flex justify-center gap-3" dir="ltr">
                                {code.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(e.target.value, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        onPaste={handlePaste}
                                        onFocus={(e) => e.target.select()}
                                        className="w-12 h-12 rounded-[10px]
                               border border-[#C98D34]/60
                               text-center text-lg font-semibold
                               focus:outline-none focus:border-[#C98D34]
                               transition-colors duration-200
                               bg-white text-[#0D0E12]"
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-[320px] h-[62px]
                           border border-[#C98D34]
                           rounded-[17px]
                           bg-[#0D0E12] text-[#BC802A]
                           font-medium text-[20px] cursor-pointer
                           hover:bg-[#1a1c22] transition-colors duration-200
                           active:scale-95 transform transition-transform"
                            >
                                ارسال
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
