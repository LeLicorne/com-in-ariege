// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PartnersCard(option: { image: any }) {
  const { image } = option;
  return (
    <div className=" w-full h-full shadow-cardLess p-2">
      <img src={image} alt="" className=" object-contain h-full w-full" />
    </div>
  );
}

export default PartnersCard;
