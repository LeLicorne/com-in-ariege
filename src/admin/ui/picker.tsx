/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Picker(options: {
  name: string;
  desc: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { name, desc, value, setValue } = options;
  return (
    <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
      <input
        type="checkbox"
        checked={value}
        onChange={() => setValue((c) => !c)}
        className="h-4 w-4 shrink-0 rounded-sm border"
        id={name}
      />
      <div className="space-y-1 leading-none">
        <label className="text-sm font-medium leading-none" htmlFor={name}>
          {name}
        </label>
        <p className="text-sm text-grey">{desc}</p>
      </div>
    </div>
  );
}
