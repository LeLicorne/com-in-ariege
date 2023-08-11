import ServiceCard from './ServiceCard';
import ServiceMomentCard from './ServiceMomentCard';

function Services() {
  return (
    <div className="flex flex-col h-auto w-full items-center z-10 px-[7%] gap-16">
      <div className="h-auto flex flex-row justify-between gap-[7%]">
        <ServiceCard
          image="/src/assets/telesiege.jpg"
          title="Aménagement"
          description="mobilier urbain et décoration pour l’équipement des espaces publiques"
        />
        <ServiceCard
          image="/src/assets/communication.jpg"
          title="Communication"
          description="création d’identité numérique, logo, site web et publicité pour votre activitée"
        />
        <ServiceCard
          image="/src/assets/skisignaletique.jpg"
          title="Signalétique"
          description="gamme de signaletique essentielle pour informer le public et les utilisateurs des règles de sécurité"
        />
      </div>
      <div className=" w-full h-[50vw]">
        <ServiceMomentCard />
      </div>
    </div>
  );
}

export default Services;
