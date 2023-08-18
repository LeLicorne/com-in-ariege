function ProductImages(options: { imgs: { img: string; name: string }[] }) {
  const { imgs } = options;

  return (
    <div className="w-full flex flex-col gap-5">
      <div className=" w-full object-cover p-[50px] bg-secondary">
        <img src={`src/assets/${imgs[0].img}`} alt="" />
      </div>
      <div className="flex gap-5 object-cover w-full overflow-hidden">
        <img
          src={`src/assets/${imgs[1].img}`}
          alt=""
          className=" bg-secondary w-full p-3"
        />
        <img
          src={`src/assets/${imgs[2].img}`}
          alt=""
          className=" bg-secondary w-full p-3"
        />
        <img
          src={`src/assets/${imgs[3].img}`}
          alt=""
          className=" bg-secondary w-full p-3"
        />
        <img
          src={`src/assets/${imgs[4].img}`}
          alt=""
          className=" bg-secondary w-full p-3"
        />
      </div>
    </div>
  );
}

export default ProductImages;
