// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ServiceCard(options: { image: any; title: any; description: any }) {
  const { image, title, description } = options;
  return (
    <div className=" w-1/3 h-auto shadow-Card flex flex-col justify-between">
      <img src={image} alt="" className=" h-full object-cover" />
      <div className=" flex flex-col gap-4 p-4 h-fit bg-white">
        <h3 className=" font-medium text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
