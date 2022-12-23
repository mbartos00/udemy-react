import React, { useImperativeHandle, useRef } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef(
  (
    { state, labelContent, type, value, id, onChange, onBlur },
    ref
  ) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return { focus: activate };
    });

    return (
      <div
        className={`${classes.control} ${
          state.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={id}>{labelContent}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
