import { FaTree, FaRecycle, FaStar, FaUserFriends } from 'react-icons/fa';

function AboutCard(options: {
  title: string;
  paragraphe: JSX.Element[];
  image: string;
  leftImage: boolean;
  valueCards: boolean;
}) {
  const { title, paragraphe, image, leftImage, valueCards } = options;

  const imageBalise = () => {
    return (
      <img
        src={image}
        alt=""
        className="lg:h-[300px] xl:w-[800px] xl:h-[500px] object-cover"
      />
    );
  };

  const littleCard = (icon: JSX.Element) => {
    return (
      <div className="h-28 w-28 sm:h-40 sm:w-40 shadow-CardLess flex justify-center items-center p-6 sm:p-12">
        {icon}
      </div>
    );
  };

  const cardGrid = () => {
    return (
      <div className=" flex w-full gap-14 flex-wrap">
        {littleCard(<FaTree size="100%" color="#80CA7A" />)}
        {littleCard(<FaRecycle size=" 100%" color="#80CA7A" />)}
        {littleCard(<FaUserFriends size=" 100%" color="#80CA7A" />)}
        {littleCard(<FaStar size=" 100%" color="#80CA7A" />)}
      </div>
    );
  };

  return (
    <div className=" flex flex-col lg:flex-row gap-12 p-16">
      {leftImage ? imageBalise() : null}
      <div className=" flex flex-col gap-12 w-full">
        <h2 className=" text-black text-3xl font-semibold leading-7 ">
          {title}
        </h2>
        <p className="text-black text-xl font-normal leading-[30px] flex flex-col h-full justify-evenly ">
          {paragraphe}
        </p>
        {valueCards ? cardGrid() : null}
      </div>
      {!leftImage ? imageBalise() : null}
    </div>
  );
}

export default AboutCard;
