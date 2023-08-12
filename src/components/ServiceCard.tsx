// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ServiceCard(options: { image: any; title: any; description: any }) {
  const { image, title, description } = options;
  return (
    <div className=" overflow-hidden w-full h-[18vw] lg:h-auto shadow-Card flex lg:flex-col justify-start bg-white">
      <img
        src={image}
        alt=""
        className=" relative object-cover lg:h-[15vw] w-[40vw] lg:w-auto"
      />
      <div className=" flex flex-col gap-4 p-4 justify-center lg:items-start">
        <h3 className=" font-medium text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
