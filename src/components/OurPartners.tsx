import PartnersCard from './PartnersCard';

function OurPartners() {
  return (
    <div className="flex flex-col w-full h-auto gap-8 md:gap-14 justify-center items-center">
      <div className=" w-full flex">
        <h2 className=" font-semibold text-4xl">Ils nous font confiances</h2>
      </div>
      <div className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 w-full gap-[2vw]">
        <div className=" md:col-span-2 md:row-span-2">
          <PartnersCard image="src/assets/labellemontagne.jpeg" />
        </div>
        <PartnersCard image="src/assets/peyragudes.jpeg" />
        <PartnersCard image="src/assets/nordicsportsnature.jpeg" />
        <PartnersCard image="src/assets/villarddelans.jpeg" />
        <PartnersCard image="src/assets/laclusaz.jpeg" />
        <PartnersCard image="src/assets/skiclubgeneve.jpeg" />
        <PartnersCard image="src/assets/formigueres.jpeg" />
        <PartnersCard image="src/assets/fontromeu.jpeg" />
        <PartnersCard image="src/assets/lafeclaz.jpeg" />
        <PartnersCard image="src/assets/lesarcs.jpeg" />
        <PartnersCard image="src/assets/roquefortlespins.jpeg" />
      </div>
    </div>
  );
}

export default OurPartners;
