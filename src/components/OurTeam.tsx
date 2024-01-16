import TeamMemberCard from './TeamMemberCard';

function OurTeam() {
  return (
    <div className=" w-full h-auto flex flex-col gap-8 md:gap-14">
      <div className=" w-full flex">
        <h2 className="content-title">Notre équipe</h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-evenly gap-4 xl:gap-[7%]">
        <TeamMemberCard
          image="assets/menface.png"
          name="Alexis LO RE"
          position="Responsable commercial"
          description="Bonjour à tous ! Je suis Alexis, responsable commercial de l'entreprise. Grand amoureux de nature, de montagne, ma motivation est de vous accompagner pour réaliser vos projets et en faire une expérience incroyable à la montagne et en dehors alors N'hésitez pas à me contacter !"
        />
        <TeamMemberCard
          image="assets/menface.png"
          name="Philippe LO RE"
          position="Responsable commercial"
          description="Bonjour à tous ! Je suis Philippe, le responsable commercial de l'entreprise. Mon objectif est de fournir à nos clients les meilleurs équipements. En collaboration avec mon frère Alexis, nous combinons notre expertise pour vous offrir une expérience client unique."
        />
      </div>
    </div>
  );
}

export default OurTeam;
