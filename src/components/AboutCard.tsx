import { FaRecycle, FaStar, FaTree, FaUserFriends } from 'react-icons/fa';

function AboutCard(options: {
  title: string;
  paragraphe: string;
  image: string;
  leftImage?: boolean;
  valueCards?: boolean;
}) {
  const { title, paragraphe, image, leftImage, valueCards } = options;

  const icons = [
    <FaTree key={0} size="100%" color="#80CA7A" />,
    <FaRecycle key={1} size=" 100%" color="#80CA7A" />,
    <FaUserFriends key={2} size="100%" color="#80CA7A" />,
    <FaStar key={3} size="100%" color="#80CA7A" />,
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12 p-6 lg:p-16">
      {leftImage && <img src={image} alt="" className="lg:w-1/2 object-cover" />}
      <div className="flex flex-col gap-12 w-full">
        <h2 className="text-black text-3xl font-semibold">{title}</h2>
        <p className="flex flex-col h-full text-black text-xl text-justify font-normal leading-[30px] whitespace-break-spaces">
          {paragraphe}
        </p>
        {valueCards && (
          <div className="flex w-full gap-8 flex-wrap">
            {icons.map((icon) => {
              return (
                <div
                  key={icon.key}
                  className="flex h-24 w-24 xl:h-28 xl:w-28 shadow-cardless justify-center items-center p-8"
                >
                  {icon}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {!leftImage && <img src={image} alt="" className="lg:w-1/2 object-cover" />}
    </div>
  );
}

export default AboutCard;
