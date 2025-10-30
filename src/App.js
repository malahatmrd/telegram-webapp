import { useEffect, useMemo, useState } from "react";

export default function App() {
  const [isTg, setIsTg] = useState(false);
  const tg = useMemo(() => window?.Telegram?.WebApp, []);

  useEffect(() => {
    if (tg) {
      setIsTg(true);
      tg.ready();
      tg.expand();          // پر کردن صفحه داخل تلگرام
      // tg.MainButton.show(); // اگه خواستی از دکمه اصلی تلگرام استفاده کنی
    }
  }, [tg]);

  const user = tg?.initDataUnsafe?.user;

  return (
    <div style={{ padding: 20 }}>
      <h1>وب‌اپ تلگرام 🚀</h1>

      {isTg ? (
        <p>سلام {user?.first_name || "کاربر"}!</p>
      ) : (
        <p style={{ opacity: 0.7 }}>
          الان داخل تلگرام نیستی؛ فقط UI رو می‌بینی. (API تلگرام اینجا کار نمی‌کنه)
        </p>
      )}

      {/* اینجا بقیه‌ی UI خودت رو پیاده کن */}
      <button
        onClick={() => alert("اینجا بعداً به بک‌اند وصل می‌کنیم")}
        style={{ background: "#0088cc", color: "#fff", border: 0, padding: "10px 16px", borderRadius: 8 }}
      >
        ادامه
      </button>
    </div>
  );
}
