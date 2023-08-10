import ServiceCard from './ServiceCard';
import ServiceMomentCard from './ServiceMomentCard';

function Services() {
  return (
    <div className="flex flex-col h-auto w-full items-center gap-16 z-10 mb-24">
      <div className=" flex flex-row gap-[7%] px-[7%]">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className=" w-full px-[7%]">
        <ServiceMomentCard />
      </div>
    </div>
  );
}

export default Services;
