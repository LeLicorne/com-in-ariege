import { Image } from '../../models/shop';

export default function ProductImages(options: { images: Image[] | undefined }) {
  const { images } = options;

  if (!images || images.length === 0) {
    return (
      <div className="w-full flex flex-col gap-3 lg:gap-5">
        <div className=" w-full object-cover p-[50px] bg-secondary">
          <img src="/src/assets/products/placeholder.jpg" alt="" />
        </div>
        <div className="grid grid-cols-4 gap-3 lg:gap-5 w-full overflow-hidden">
          <img src="/src/assets/products/placeholder.jpg" alt="" className=" bg-secondary w-full p-3" />
          <img src="/src/assets/products/placeholder.jpg" alt="" className=" bg-secondary w-full p-3" />
          <img src="/src/assets/products/placeholder.jpg" alt="" className=" bg-secondary w-full p-3" />
          <img src="/src/assets/products/placeholder.jpg" alt="" className=" bg-secondary w-full p-3" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <div className=" w-full object-cover p-[50px] bg-secondary">
        <img src={`/src/assets/products/${images[0].url}`} alt="" />
      </div>
      <div className="flex gap-5 object-cover w-full overflow-hidden">
        {images.slice(1, images.length).map((image) => {
          return <img key={image.id} src={`src/assets/${image.url}`} alt="" className=" bg-secondary w-full p-3" />;
        })}
      </div>
    </div>
  );
}
