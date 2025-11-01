import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";
import { EmployeeSelectionBottomSheet } from "./EmployeeSelectionBottomSheet";
import { FilterModal } from "./FilterModal";
import { StarRating } from "./StarRating";


export const SuggestedEmployeesPage = ({ onClose, onSelectEmployee }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState("contracts");
  const navigate = useNavigate();

  const employees = [
  { id: 1, name: "شایان هاشمی", success: 15, stars: 2, experience: 2 },
  { id: 2, name: "سارا شریعتی", success: 9, stars: 4, experience: 4 },
  { id: 3, name: "سیما سعیدی", success: 22, stars: 1, experience: 1 },
  { id: 4, name: "زهرا بدوستانی", success: 12, stars: 3, experience: 5 },
  { id: 5, name: "لیدا موسوی", success: 22, stars: 5, experience: 3 },
  { id: 6, name: "اشکان پوررضایی", success: 16, stars: 2, experience: 6 },
  { id: 7, name: "سامان اعلاعی", success: 20, stars: 5, experience: 7 },
];


  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortType === "contracts") return b.success - a.success;
    if (sortType === "stars") return b.stars - a.stars;
    if (sortType === "experience") return b.experience - a.experience;
    return 0;
  });

  const handleBack = () => {
    if (onClose) onClose();
    else navigate(-1);
  };

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="min-h-screen bg-white px-5 pt-6 pb-10 flex flex-col relative">
      <div className="flex items-center justify-between mb-5" dir="rtl">
        <div className="flex items-center gap-2">
          <img src={assets.form} alt="note" className="w-10 h-10 object-contain" />
          <h2 className="text-lg font-semibold text-gray-800">لیست پیشنهادی</h2>
        </div>
        <button
          onClick={handleBack}
          className="grid place-items-center hover:bg-[#ededed] transition rounded-[10px] w-9 h-9"
        >
          <img src={assets.back} alt="back" className="w-8 h-8 object-contain" />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-5" dir="rtl">
        <div className="flex items-center flex-1 h-12 rounded-[12px] border-2 border-[#C98D34] px-3">
          <input
            type="text"
            placeholder="جستجو"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm text-right placeholder:text-[#C98D34]/60 text-gray-800"
          />
          <img
            src={assets.gold_Search}
            alt="search"
            className="w-6 h-6 object-contain opacity-60 ml-1"
          />
        </div>

        <button
          type="button"
          aria-label="فیلتر"
          onClick={() => setShowFilter(true)}
          className="w-12 h-12 rounded-[12px] border-2 border-[#C98D34] grid place-items-center hover:bg-[#C98D3410] transition"
        >
          <img
            src={assets.gold_Filter}
            alt="filter"
            className="w-6 h-6 object-contain opacity-70"
          />
        </button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto" dir="ltr">
        {sorted.map((emp) => (
          <button
            key={emp.id}
            onClick={() => handleSelectEmployee(emp)}
            className="w-full cursor-pointer text-right border-2 border-[#C98D34] rounded-[22px] px-4 py-4 hover:bg-[#FFF8EF] transition shadow-sm"
          >
            <div className="flex flex-row items-center gap-4">
              <div className="flex-1 flex flex-col items-end text-right">
                <span className="text-2xl font-bold text-[#0E1621] leading-[1.2]">
                  {emp.name}
                </span>
                <div className="mt-1 inline-flex items-center gap-2 self-end">
                  <span className="text-[12px] text-gray-500 leading-none">
                    {emp.success} قرارداد موفق
                  </span>
                  <StarRating value={emp.stars} size={16} />

                </div>
              </div>

              <div className="w-16 h-16 rounded-[16px] bg-[#EDEDED] shrink-0 overflow-hidden" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedEmployee && (
          <EmployeeSelectionBottomSheet
            employee={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
          />
        )}
      </AnimatePresence>

      <FilterModal
        show={showFilter}
        onClose={() => setShowFilter(false)}
        setSortType={setSortType}
      />
    </div>
  );
};
