/* eslint-disable react/prop-types */
export default function Input(props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        className="px-4 py-1 placeholder-zinc-600 ring-1 ring-zinc-600 rounded-3xl"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
