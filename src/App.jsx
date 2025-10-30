// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreenWelcome from "./components/SplashScreen/SplashScreenWelcome.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg flex flex-col">
        <Routes>
          <Route path="/" element={<SplashScreenWelcome />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
