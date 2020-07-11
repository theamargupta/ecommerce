import React from 'react';

const Input = ({ type, name, value, placeholder, className, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className={className}
      value={value}
      required
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
