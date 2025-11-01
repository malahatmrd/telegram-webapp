import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";

export const ReferralCodeModal = ({ onClose }) => {
    const [code, setCode] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        if (value.length > 1) {
            const chars = value.replace(/[^\dA-Za-z]/g, "").split("").slice(0, code.length);
            const newCode = [...code];
            
            for (let i = 0; i < chars.length; i++) {
                const targetIndex = code.length - 1 - i;
                if (targetIndex >= 0) {
                    newCode[targetIndex] = chars[chars.length - 1 - i];
                }
            }
            
            setCode(newCode);
            
            const firstEmptyIndex = newCode.findIndex(digit => digit === "");
            const focusIndex = firstEmptyIndex === -1 ? 0 : firstEmptyIndex;
            if (inputRefs.current[focusIndex]) {
                inputRefs.current[focusIndex].focus();
            }
            return;
        }

        const newCode = [...code];
        newCode[index] = value.replace(/[^\dA-Za-z]/g, "");
        setCode(newCode);

        if (value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index < code.length - 1) {
            inputRefs.current[index + 1]?.focus();
            return;
        }
        
        if (e.key === "Backspace" && code[index]) {
            const newCode = [...code];
            newCode[index] = "";
            setCode(newCode);
            return;
        }
        
        if (e.key === "ArrowRight" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        
        if (e.key === "ArrowLeft" && index < code.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/[^\dA-Za-z]/g, "");
        const chars = pastedData.split("").slice(0, code.length);
        
        const newCode = [...code];
        
        for (let i = 0; i < chars.length; i++) {
            const targetIndex = code.length - 1 - i;
            if (targetIndex >= 0) {
                newCode[targetIndex] = chars[chars.length - 1 - i];
            }
        }
        
        setCode(newCode);
        
        const firstEmptyIndex = newCode.findIndex(digit => digit === "");
        const focusIndex = firstEmptyIndex === -1 ? 0 : firstEmptyIndex;
        if (inputRefs.current[focusIndex]) {
            inputRefs.current[focusIndex].focus();
        }
    };

    const handleSubmit = () => {
        const referralCode = code.join("");
        console.log("کد معرف:", referralCode);
    };

    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 flex items-end justify-center bg-black/20 backdrop-blur-[1px]"
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(2px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.22 }}
            >
                <motion.div
                    key="sheet"
                    initial={{ y: 56, opacity: 0.9 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 56, opacity: 0.9 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    className="
                    relative bg-white w-[393px] h-[432px]
                    rounded-t-[36px] border border-black/10
                    shadow-[0_18px_48px_rgba(0,0,0,0.28)]
                    px-6 pt-6 pb-7 text-center
                "
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

                            <div className="flex justify-center gap-3">
                                {code.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={el => inputRefs.current[index] = el}
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(e.target.value, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        onPaste={handlePaste}
                                        onFocus={(e) => e.target.select()} 
                                        className="
                                        w-12 h-12 rounded-[10px]
                                        border border-[#C98D34]/60
                                        text-center text-lg font-medium
                                        focus:outline-none focus:border-[#C98D34]
                                        transition-colors duration-200
                                        bg-white text-[#0D0E12]
                                    "
                                        dir="ltr" 
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="
                                w-[320px] h-[62px]
                                border border-[#C98D34]
                                rounded-[17px]
                                bg-[#0D0E12] text-[#BC802A]
                                font-medium text-[20px] cursor-pointer
                                hover:bg-[#1a1c22] transition-colors duration-200
                                active:scale-95 transform transition-transform
                            "
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