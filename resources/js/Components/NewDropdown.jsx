import React from "react";
import Select from "react-select";

const NewDropdown = ({ options, value, onChange, name, handleOnChange, type }) => {
  const selectOption = options.map((option)=> ({
    value: option.id,
    label: option.name,
  }));

  return (
    <Select
      name={name}
      options={selectOption}
      value={selectOption.find((option) => option.value === value)}
      onChange={(option) => onChange(option.value)}
      type={type}
      handleOnChange={handleOnChange}
    />
  )
}

export default NewDropdown;