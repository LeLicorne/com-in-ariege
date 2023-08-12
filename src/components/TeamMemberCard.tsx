/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImQuotesLeft } from 'react-icons/im';
import { BsChatRightQuote } from 'react-icons/bs';

function TeamMemberCard(options: {
  image: any;
  name: any;
  position: any;
  description: any;
}) {
  const { image, name, position, description } = options;
  return (
    <div className=" w-full h-[30vw] xl:h-[19vw] shadow-Card flex flex-row items-center justify-between gap-5 pr-5 xl:p-0">
      <img
        src={image}
        alt=""
        className="h-full xl:w-1/2 object-cover self-end"
      />
      <div className="hidden xl:flex flex-col gap-5 p-4 w-1/2">
        <h3 className=" flex flex-col font-semibold xl:text-[1.2vw] whitespace-nowrap">
          {name}
          <span className=" font-normal xl:text-[1vw] text-black/40">
            {position}
          </span>
        </h3>
        <p className=" font-light xl:text-[0.9vw] text-black/65 relative">
          <ImQuotesLeft
            size="1vw"
            className=" absolute top-[-20px] left-[-20px]"
          />
          {description}
        </p>
      </div>

      <div className=" xl:hidden flex items-center h-full gap-4">
        <div className=" flex flex-col h-full items-center justify-center p-[1vw] gap-[1vw]">
          <BsChatRightQuote size="10vw" className=" flex" />
          <h3 className=" flex flex-col font-semibold text-[2.2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.2vw] whitespace-nowrap">
            {name}
            <span className=" flex font-normal text-[2.1vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1vw] text-black/40 whitespace-normal">
              {position}
            </span>
          </h3>
        </div>
        <p className=" font-light text-[1.7vw] md:text-[1.7vw] lg:text-[1.4vw] xl:text-[0.9vw] text-black/65 relative">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
