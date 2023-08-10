function ServiceCard() {
  return (
    <div className=" w-1/3 shadow-ServiceCard">
      <img src="/src/assets/telesiege.jpg" alt="" className="bg-cover" />
      <div className=" flex flex-col gap-4 p-4">
        <h3 className=" font-medium text-2xl">Aménagement</h3>
        <p>
          mobilier urbain et décoration pour l’équipement des espaces publiques
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
