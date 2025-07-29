import React from 'react';
import './Button.css';

const Button = ({ type = 'button', onClick, children }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="form-button"
        >
            {children}
        </button>
    );
};

export default Button;
