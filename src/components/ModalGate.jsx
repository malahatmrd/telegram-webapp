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

  const [modalKey, setModalKey] = useState(Date.now());

  React.useEffect(() => {
    setModalKey(Date.now());
  }, [modal, step]);

  if (modal === "choose-user") {
    if (step === "choose")
      return (
        <ChooseUserTypeModal
          key={modalKey}
          onSelect={(type) => {
            if (type === "referral") setStep("referral");
            else if (type === "chooseEmployee") navigate("/suggested-employees");
            else closeModal();
          }}
        />
      );

    if (step === "referral")
      return <ReferralCodeModal key={modalKey} onClose={closeModal} />;

    if (step === "suggestedList")
      return (
        <div className="fixed inset-0 z-50 bg-white" key={modalKey}>
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
