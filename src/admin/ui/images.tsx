import { useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import useUploadImage from '../../hooks/useUploadImage';
import getAllImages from '../../utils/storage';

const Image = ({ url, set }: { url: string; set: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <button type="button" onClick={() => set(url)} className="flex items-center w-full h-full">
      <img src={url} alt={url} className="w-full h-full object-cover" />
    </button>
  );
};

export default function Images(options: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { selected, setSelected } = options;
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[] | null>();

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.target;
    if (!files) return;
    const selectedFile = files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  };

  // Getting the progress and url from the hook
  const { progress, url } = useUploadImage(file);

  useEffect(() => {
    getAllImages('img/categories').then((res) => setImages(res));
  }, []);

  if (!images) return null;

  return (
    <div className="w-full flex flex-row flex-wrap rounded-md border bg-transparent px-3 py-2 mt-2">
      {images.map((image) => {
        return (
          <div
            key={image}
            className={`flex w-[100px] h-[100px] m-2 ${
              image === selected ? 'border-2 border-primary' : ''
            } transition-all`}
          >
            <Image url={image} set={setSelected} />
          </div>
        );
      })}
      <div
        className={`relative flex w-[100px] h-[100px] m-2 
        ${!url ? 'border-4 border-dashed border-secondary' : ''} 
        ${url === selected ? 'border-2 border-success' : ''} transition-all`}
      >
        <input
          id="image"
          type="file"
          onChange={handleChange}
          className={`absolute w-full h-full opacity-0 cursor-pointer ${url ? 'hidden' : ''}`}
        />
        {url && <Image url={url} set={setSelected} />}
        {!url && (
          <div className="flex w-full h-full justify-center items-center text-4xl text-secondary">
            {!file && <LuPlus />}
            {file && <p className="text-2xl">{progress}%</p>}
          </div>
        )}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
