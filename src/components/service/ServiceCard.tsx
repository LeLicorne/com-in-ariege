function ServiceCard(options: { image: string; title: string; description: string }) {
  const { image, title, description } = options;
  return (
    <div className="overflow-hidden w-full h-[18vw] lg:h-auto shadow-card flex lg:flex-col justify-start bg-white">
      <img src={image} alt="" className="relative object-cover lg:h-[30vw] w-auto lg:w-auto" />
      <div className="flex flex-col p-6 sm:gap-2 sm:p-2 md:gap-4 md:p-4 justify-center lg:items-start">
        <h3 className="font-medium text-xl sm:text-2xl">{title}</h3>
        <p className="hidden sm:block">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
