export default function Title(options: { title: string; desc: string }) {
  const { title, desc } = options;
  return (
    <div className="flex flex-col gap-6 sm:gap-8 mt-32 sm:mt-52">
      <h1 className="page-title">{title}</h1>
      <h3 className="page-subtitle">{desc}</h3>
    </div>
  );
}
