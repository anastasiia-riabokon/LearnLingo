import {useEffect, useState} from "react";
import Select from "react-select";

const CustomDatalist = ({label, options, placeholder, onChange, value}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <div>
      <p className="subtitle-card text-[14px] mb-[8px]">{label}</p>
      <Select
        options={options}
        value={selectedValue}
        onChange={handleChange}
        placeholder={placeholder}
        isClearable={true}
      />
    </div>
  );
};
export default CustomDatalist;
