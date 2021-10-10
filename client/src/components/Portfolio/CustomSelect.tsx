import React from "react";
import Select from "react-select";

const CustomSelect = () => {
  const options = [
    { value: "allWeather", label: "all weather" },
    { value: "permanent", label: "permanent" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <Select options={options} onChange={(e) => console.log(e?.value)} />
    </div>
  );
};

export default CustomSelect;
