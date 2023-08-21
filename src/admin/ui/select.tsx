/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Select(options: {
  name: string;
  opts: {
    name: string;
    value: string;
  }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { name, opts, value, setValue } = options;
  return (
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor=":r1f:-form-item"
      >
        {name}
      </label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        {opts.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
