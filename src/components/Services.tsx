import ServiceCard from './ServiceCard';
import ServiceMomentCard from './ServiceMomentCard';

function Services() {
  return (
    <div className="flex flex-col h-auto w-full items-center z-10 gap-16">
      <div className="h-auto w-full flex flex-col lg:flex-row justify-between gap-[5vw] lg:gap-[7%]">
        <ServiceCard
          image="/src/assets/amenagements.jpeg"
          title="Aménagement"
          description="mobilier urbain et décoration pour l’équipement des espaces publiques"
        />
        <ServiceCard
          image="/src/assets/communication.jpeg"
          title="Communication"
          description="création d’identité numérique, logo, site web et publicité pour votre activitée"
        />
        <ServiceCard
          image="/src/assets/signaletique.jpeg"
          title="Signalétique"
          description="gamme de signaletique essentielle pour informer le public et les utilisateurs des règles de sécurité"
        />
      </div>
      <div className="w-full h-[50vw]">
        <ServiceMomentCard />
      </div>
    </div>
  );
}

export default Services;
