import React, { useState } from "react";

export const ScreenSelector = () => {
  const [items, setItems] = useState([
    { label: "Day", value: "day" },
    { label: "Combat", value: "combat" },
    { label: "Travel", value: "travel" },
  ]);
  const [value, setValue] = useState("day");
  return (
    <div>
      <label>Change View:</label>
      <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
