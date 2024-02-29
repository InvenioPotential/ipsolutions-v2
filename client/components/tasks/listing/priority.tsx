import React from "react";
import Select from "react-select";

interface PriorityProps {
  setPriorityInput: (value: string) => void;
}
const options = [
  { value: "low", label: "Low" },
  { value: "med", label: "Medium" },
  { value: "hi", label: "High" },
];

const Priority: React.FC<PriorityProps> = ({ setPriorityInput }) => {
  const handlePriorityChange = (selectedOption: any) => {
    if (selectedOption) {
      setPriorityInput(selectedOption.label);
    }
  };

  return (
    <div>
      <Select
        options={options}
        placeholder="Select Priority"
        onChange={handlePriorityChange}
      />
    </div>
  );
};

export default Priority;