import PartnersCard from './PartnersCard';

function OurPartners() {
  return (
    <div className="flex flex-col w-full h-auto gap-8 md:gap-14 justify-center items-center">
      <div className=" w-full flex">
        <h2 className="content-title">Ils nous font confiances</h2>
      </div>
      <div className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 w-full gap-[2vw]">
        <div className=" md:col-span-2 md:row-span-2">
          <PartnersCard image="assets/partners/labellemontagne.jpeg" />
        </div>
        <PartnersCard image="assets/partners/peyragudes.jpeg" />
        <PartnersCard image="assets/partners/nordicsportsnature.jpeg" />
        <PartnersCard image="assets/partners/villarddelans.jpeg" />
        <PartnersCard image="assets/partners/laclusaz.jpeg" />
        <PartnersCard image="assets/partners/skiclubgeneve.jpeg" />
        <PartnersCard image="assets/partners/formigueres.jpeg" />
        <PartnersCard image="assets/partners/fontromeu.jpeg" />
        <PartnersCard image="assets/partners/lafeclaz.jpeg" />
        <PartnersCard image="assets/partners/lesarcs.jpeg" />
        <PartnersCard image="assets/partners/roquefortlespins.jpeg" />
      </div>
    </div>
  );
}

export default OurPartners;
