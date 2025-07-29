// FormInput.jsx
import React from 'react';
import './FormInput.css';

const FormInput = ({ label, name, type, value, onChange, error, required }) => {
  return (
    <div className="form-group">
      <label>
        {label}
        {required && <span className="required-asterisk">*</span>}
        :
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'error' : ''}
        autoComplete={name === "password" ? "new-password" : undefined}
        required={required} // good for HTML5 validation too!
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;
