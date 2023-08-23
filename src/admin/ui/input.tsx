/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Input(options: {
  label: string;
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
  value: string | number;
  setValue: any;
  numeric?: boolean;
}) {
  const { label, placeholder, error, errorMessage, value, numeric, setValue } = options;
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        className={`text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
          error ? 'text-error' : ''
        }`}
        htmlFor={label}
      >
        {label}
        <input
          className="
          flex h-10 w-full
          rounded-md border bg-transparent
          px-3 py-2 mt-2
          text-base
          file:border-0 file:bg-transparent file:text-base file:font-medium
          placeholder:text-secondary
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={placeholder}
          id={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={label}
          type={numeric ? 'number' : 'text'}
        />
      </label>
      {error && <p className="text-sm text-error">{errorMessage}</p>}
    </div>
  );
}
