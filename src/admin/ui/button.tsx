// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = ({ icon, value }: { icon: any; value: string }) => {
  return (
    <button
      type="button"
      className="
      inline-flex
      items-center
      justify-center
      rounded-md
      text-sm
      font-medium
      transition-colors
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-ring
      focus-visible:ring-offset-2
      disabled:pointer-events-none
      disabled:opacity-50
      bg-primary
      text-white
      hover:bg-primary/80
      h-10
      px-4 py-2"
    >
      <div className="mr-2 h-4 w-4">{icon}</div>
      {value}
    </button>
  );
};

export default Button;
