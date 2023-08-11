/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImQuotesLeft } from 'react-icons/im';

function TeamMemberCard(options: {
  image: any;
  name: any;
  position: any;
  description: any;
}) {
  const { image, name, position, description } = options;
  return (
    <div className=" w-full h-72 shadow-Card flex flex-row items-center px-10 gap-10">
      <img src={image} alt="" className=" h-full" />
      <div className=" flex flex-col gap-5">
        <h3 className=" flex flex-col font-semibold text-xl">
          {name}
          <span className=" font-normal text-base text-black/40">
            {position}
          </span>
        </h3>
        <p className=" font-light text-base text-black/65 relative">
          <ImQuotesLeft
            size={15}
            className=" absolute top-[-20px] left-[-20px]"
          />
          {description}
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
