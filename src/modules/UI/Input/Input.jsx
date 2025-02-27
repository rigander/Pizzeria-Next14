import styles from './Input.module.scss';
import React, { forwardRef } from 'react';

const Input = React.forwardRef(({ value, onChange, placeholder, type = 'text', className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${styles.input} ${className}`}
            {...props}
        />
    );
});

export default Input;
