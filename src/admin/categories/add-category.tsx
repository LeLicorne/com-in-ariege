import { useState } from 'react';
import { LuPlus, LuX } from 'react-icons/lu';
import Heading from '../ui/heading';
import Input from '../ui/input';
import Separator from '../ui/separator';

export default function AddCategory() {
  const [name, setName] = useState('');
  const [subcat, setSubcat] = useState('');
  const [subcats, setSubcats] = useState<string[]>([]);

  function handleAdd() {
    setSubcats((c) => [...c, subcat]);
    setSubcat('');
  }

  function handleRemove(item: string) {
    setSubcats(subcats.filter((i) => i !== item));
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Créer une catégorie" description="Ajoute une nouvelle catégorie" />
      </div>
      <Separator />
      <Input
        label="Nom"
        placeholder="Nom de la catégorie"
        errorMessage="Minimum deux caractères"
        value={name}
        setValue={setName}
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row w-full gap-3">
          <Input label="Sous-catégories" placeholder="Nom de la sous-catégorie" value={subcat} setValue={setSubcat} />
          <button
            type="button"
            onClick={handleAdd}
            className="flex self-end items-center justify-center h-10 px-3 py-2 text-sm rounded-full hover:bg-secondary transition-colors"
          >
            <LuPlus />
          </button>
        </div>
        <div className="flex flex-row gap-2">
          {subcats.map((subc) => {
            return (
              <div
                key={subc}
                className="flex flex-row items-center text-base bg-secondary text-grey w-fit rounded-md pl-3"
              >
                {subc}
                <button type="button" onClick={() => handleRemove(subc)} className="text-base py-2 px-3">
                  <LuX />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
