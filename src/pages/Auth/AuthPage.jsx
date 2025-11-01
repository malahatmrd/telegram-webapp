import React from "react";
import OtpVerify from "./OtpVerify";
import ModalGate from "../../components/ModalGate";

export default function AuthPage() {
  return (
    <>
      <OtpVerify />
      <ModalGate />
    </>
  );
}
