import TeamMemberCard from './TeamMemberCard';

function OurTeam() {
  return (
    <div className=" w-full h-auto flex flex-col px-[7%] gap-14">
      <div className=" w-full flex">
        <h2 className=" font-semibold text-4xl">Notre équipe</h2>
      </div>
      <div className=" flex flex-row w-full justify-evenly gap-[7%]">
        <TeamMemberCard
          image="src/assets/menface.png"
          name="Alexis LO RE"
          position="Responsable communication"
          description="Bonjour à tous ! Je suis Alexis, responsable communication de l'entreprise. Passionné de sports d'hiver et de montagne, je mets en lumière notre expertise technique et nos équipements de pointe. Mon objectif est de vous inspirer pour des aventures inoubliables sur les pistes."
        />
        <TeamMemberCard
          image="src/assets/menface.png"
          name="Philippe LO RE"
          position="Responsable commercial"
          description="Bonjour à tous ! Je suis Philippe, le responsable commercial de l'entreprise. Amoureux des sports de glisse, mon objectif est de fournir à nos clients les meilleurs équipements pour leurs aventures hivernales. En collaboration avec mon frère Alexis, nous combinons notre expertise pour vous offrir une expérience client unique."
        />
      </div>
    </div>
  );
}

export default OurTeam;
