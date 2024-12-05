const Input = ({ type, placeholder, name, value, onChange, required }) => {
    return (
        <input
            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};

export default Input;
