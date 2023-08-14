import { BsChatRightQuote } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';

function TeamMemberCard(options: {
  image: string;
  name: string;
  position: string;
  description: string;
}) {
  const { image, name, position, description } = options;
  return (
    <div className="w-full h-[20vw] lg:h-[19vw] shadow-Card flex flex-row items-center justify-between pr-5 lg:pr-5">
      <img
        src={image}
        alt=""
        className="h-full lg:w-1/2 object-cover self-end"
      />
      <div className="hidden lg:flex flex-col gap-5 p-4 h-full w-1/2">
        <h3 className=" flex flex-col font-semibold lg:text-[1.2vw] whitespace-nowrap">
          {name}
          <span className=" font-normal lg:text-[1vw] text-black/40">
            {position}
          </span>
        </h3>
        <p className=" font-light text-justify lg:text-[0.9vw] text-black/65">
          <ImQuotesLeft
            size="1vw"
            className=" absolute top-[-20px] left-[-20px]"
          />
          {description}
        </p>
      </div>

      <div className="lg:hidden flex items-center h-full gap-4">
        <div className="flex flex-col h-full items-center justify-center p-2 gap-2">
          <div className="flex w-full justify-end">
            <BsChatRightQuote size="5vw" />
          </div>
          <h3 className="flex flex-col font-semibold text-[1.8vw] md:text-[2vw] whitespace-nowrap">
            {name}
            <span className="flex font-normal text-[1.5vw] md:text-[1.8vw] text-black/40 whitespace-normal">
              {position}
            </span>
          </h3>
        </div>
        <p className="font-light text-[1.5vw] md:text-[1.7vw] text-black/65">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
