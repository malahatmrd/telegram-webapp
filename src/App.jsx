import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SplashScreenWelcome from "./components/SplashScreen/SplashScreenWelcome.jsx";
import SplashScreenStart from "./components/SplashScreen/SplashScreenStart.jsx";

// یک کامپوننت داخلی برای پشتیبانی از AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreenWelcome />} />
        <Route path="/splash/start" element={<SplashScreenStart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg flex flex-col overflow-hidden">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
