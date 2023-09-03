import { useState } from 'react';
import { Image } from '../../models/shop';

export default function ProductImages(options: { img: Image[] | undefined }) {
  const { img } = options;
  const [images, setImages] = useState(img);

  function handleClick(id: number) {
    if (!images) return;
    const newImgs = [...images];
    const mainImg = newImgs[0];
    newImgs[0] = newImgs[id];
    newImgs[id] = mainImg;
    setImages(newImgs);
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full flex flex-col gap-3 lg:gap-5">
        <div className="w-full aspect-square object-cover p-2 bg-secondary">
          <img src="/assets/placeholder.jpg" alt="" />
        </div>
        <div className="grid grid-cols-4 gap-3 lg:gap-5 w-full overflow-hidden">
          <img src="/assets/placeholder.jpg" alt="" className="bg-secondary w-full p-2" />
          <img src="/assets/placeholder.jpg" alt="" className="bg-secondary w-full p-2" />
          <img src="/assets/placeholder.jpg" alt="" className="bg-secondary w-full p-2" />
          <img src="/assets/placeholder.jpg" alt="" className="bg-secondary w-full p-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3 lg:gap-5">
      <div className="w-full aspect-square object-cover p-2 bg-secondary">
        <img src={images[0].url} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-3 lg:gap-5 w-full overflow-hidden">
        {images.slice(1, images.length).map((image, index) => {
          return (
            <button type="button" key={image.id} onClick={() => handleClick(index + 1)}>
              <img src={image.url} alt="" className="bg-secondary w-full aspect-square p-2" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
