import React from 'react';

const PartnerSelect = ({ option, name, value, onChange }) => {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        aria-label="Default select example"
        className="dropdown form-select"
      >
        <option selected>Please Select</option>
        {option?.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PartnerSelect;
