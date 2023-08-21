import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { LuPlus, LuX } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard';
import { useAddCategoryMutation } from '../../redux/api';
import Button from '../ui/button';
import Heading from '../ui/heading';
import Images from '../ui/images';
import Input from '../ui/input';
import Separator from '../ui/separator';

export default function AddCategory() {
  const nav = useNavigate();
  const [addCategory, res] = useAddCategoryMutation();
  const [name, setName] = useState('');
  const [subcat, setSubcat] = useState('');
  const [subcats, setSubcats] = useState<string[]>([]);
  const [image, setImage] = useState('');

  function handleAdd() {
    setSubcats((c) => [...c, subcat]);
    setSubcat('');
  }

  function handleRemove(item: string) {
    setSubcats(subcats.filter((i) => i !== item));
  }

  async function handleAddCategory() {
    if (name.length < 2) {
      return;
    }
    if (!image) return;
    await addCategory({ name, imageUrl: image, subcategories: subcats });
  }

  useEffect(() => {
    if (res.isSuccess) {
      toast.success('Catégorie créee');
      nav('categories');
    }
    if (res.isError) {
      toast.error('Catégorie non créee');
      nav('categories');
    }
  }, [res, nav]);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Créer une catégorie" description="Ajoute une nouvelle catégorie" />
      </div>
      <Separator />
      <div className="flex flex-row gap-8">
        <div className="flex flex-col w-full gap-4">
          <Input
            label="Nom"
            placeholder="Nom de la catégorie"
            errorMessage="Minimum deux caractères"
            value={name}
            setValue={setName}
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-row w-full gap-3">
              <Input
                label={`Sous-catégories (${subcats.length})`}
                placeholder="Nom de la sous-catégorie"
                value={subcat}
                setValue={setSubcat}
              />
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
            <Images selected={image} setSelected={setImage} />
          </div>
        </div>
        <div className="mx-16">
          <CategoryCard
            category={{
              id: '',
              name,
              imageUrl: image,
              subcategories: undefined,
              products: undefined,
              createdAt: new Date(),
              updatedAt: new Date(),
            }}
            selectedCategory={undefined}
            handleClick={() => {}}
          />
        </div>
      </div>
      <div className="pt-8">
        <Button icon={<LuPlus size={16} />} value="Ajouter la catégorie" onClick={() => handleAddCategory()} />
      </div>
    </div>
  );
}
