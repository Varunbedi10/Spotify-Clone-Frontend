const TextInput = ({ label, placeholder, className, value, setValue }) => {
  return (
    <div className={`TextInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        type="password"
        placeholder={placeholder}
        className="p-3 border border-solid border-gray-400 rounded placeholder-gray-300"
        id={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
