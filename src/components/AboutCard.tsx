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
      <img src={image} alt="" className="w-[800px] h-[500px] object-cover" />
    );
  };

  const littleCard = () => {
    return (
      <div className=" grid grid-cols-4 w-full">
        <div className=" h-40 w-40 shadow-CardLess flex justify-center items-center p-12">
          <FaTree size=" 100%" color="#80CA7A" />
        </div>
        <div className=" h-40 w-40 shadow-CardLess flex justify-center items-center p-12">
          <FaRecycle size=" 100%" color="#80CA7A" />
        </div>
        <div className=" h-40 w-40 shadow-CardLess flex justify-center items-center p-12">
          <FaUserFriends size=" 100%" color="#80CA7A" />
        </div>
        <div className=" h-40 w-40 shadow-CardLess flex justify-center items-center p-12">
          <FaStar size=" 100%" color="#80CA7A" />
        </div>
      </div>
    );
  };

  return (
    <div className=" flex flex-row gap-12 p-16">
      {leftImage ? imageBalise() : null}
      <div className=" flex flex-col gap-12 w-full">
        <h2 className=" text-black text-3xl font-semibold leading-7 ">
          {title}
        </h2>
        <p className="text-black text-xl font-normal leading-[30px] flex flex-col h-full justify-evenly ">
          {paragraphe}
        </p>
        {valueCards ? littleCard() : null}
      </div>
      {!leftImage ? imageBalise() : null}
    </div>
  );
}

export default AboutCard;
