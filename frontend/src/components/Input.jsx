/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        ref={ref}
        id={props.id}
        name={props.name}
        className="px-4 py-1 placeholder-zinc-600 ring-1 ring-zinc-600 rounded-3xl"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default Input;
