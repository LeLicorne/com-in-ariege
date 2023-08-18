export default function Title(options: { title: string; desc: string }) {
  const { title, desc } = options;
  return (
    <div className="flex flex-col gap-6 sm:gap-8 mt-32 sm:mt-52">
      <h1 className="font-semibold text-5xl text-black">{title}</h1>
      <h3 className="font-normal text-black/60 md:mr-[25%]">{desc}</h3>
    </div>
  );
}
