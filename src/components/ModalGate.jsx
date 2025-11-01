import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ChooseUserTypeModal } from "../pages/Auth/RoleSelection/ChooseUserTypeModal";
import { ReferralCodeModal } from "../pages/Auth/RoleSelection/ReferralCodeModal";
import { SuggestedEmployeesPage } from "../pages/Auth/RoleSelection/SuggestedEmployeesPage";

export default function ModalGate() {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const modal = params.get("modal");
  const [step, setStep] = useState("choose");

  const closeModal = () => {
    params.delete("modal");
    setParams(params);
    setStep("choose");
  };

  if (modal === "choose-user") {
    if (step === "choose")
      return (
        <ChooseUserTypeModal
          onSelect={(type) => {
            if (type === "referral") setStep("referral");
            else if (type === "chooseEmployee") {
              navigate("/suggested-employees");
            }
            else closeModal();
          }}
        />
      );

    if (step === "referral")
      return <ReferralCodeModal onClose={closeModal} />;

    if (step === "suggestedList")
      return (
        <div className="fixed inset-0 z-50 bg-white">
          <SuggestedEmployeesPage 
            onClose={closeModal}
            onSelectEmployee={(name) => {
              console.log("کارمند انتخاب شده:", name);
              closeModal();
            }}
          />
        </div>
      );
  }

  return null;
}