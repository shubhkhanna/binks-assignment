const Input = ({ labelText, type, value, onChange, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={type}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText}
      </label>
      <input
        required
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
