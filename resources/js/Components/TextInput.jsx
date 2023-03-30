import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ 
    type = 'text', 
    name,
    id,
    value,
    defaultValue,
    placeholder,
    autoComplete,
    required,
    handleChange,
    isError,
    className = '',
    isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                name={name}
                id={id}
                value={value}
                defaultValue={defaultValue}
                className={
                    'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                placeholder={placeholder}
                onChange={(e)=>handleChange(e)}
            />
        </div>
    );
});
