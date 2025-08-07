import { useState, useEffect } from "react";

export default function WaterReminder() {
  const [lastDrinkTime, setLastDrinkTime] = useState(null);
  const [drinkCount, setDrinkCount] = useState(0);
  const [message, setMessage] = useState("");

  // Reminder every 30 minutes (1800000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage("Time to drink water! 💧");
    }, 1800000); // 30 minutes

    return () => clearInterval(interval);
  }, []);

  function handleDrink() {
    setLastDrinkTime(new Date().toLocaleTimeString());
    setDrinkCount((prev) => prev + 1);
    setMessage("");
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <p>Drink count: {drinkCount}</p>
      <p>Last drink time: {lastDrinkTime || "Not yet"}</p>
      {message && (
        <p style={{ color: "blue", fontWeight: "bold" }}>{message}</p>
      )}
      <button
        onClick={handleDrink}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        I drank water 💧
      </button>
    </div>
  );
}