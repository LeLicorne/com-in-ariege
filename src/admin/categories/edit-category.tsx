import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { LuPlus, LuX } from 'react-icons/lu';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import CategoryCard from '../../components/CategoryCard';
import { useDeleteSubcategoryMutation, useGetCategoryByIdQuery, useUpdateCategoryMutation } from '../../redux/api';
import Button from '../ui/button';
import Heading from '../ui/heading';
import Images from '../ui/images';
import Input from '../ui/input';
import Separator from '../ui/separator';

export default function EditCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data: category, isLoading } = useGetCategoryByIdQuery({ categoryId });
  const [updateCategory, res] = useUpdateCategoryMutation();
  const [deleteSubcategory, subRes] = useDeleteSubcategoryMutation();
  const nav = useNavigate();

  const [name, setName] = useState('');
  const [subcat, setSubcat] = useState('');
  const [subcats, setSubcats] = useState<{ id: string; name: string }[]>([]);
  const [image, setImage] = useState('');

  const toastId = 'update-category';

  function handleAdd() {
    const newSubcat = { id: uuid(), name: subcat };
    setSubcats((c) => [...c, newSubcat]);
    setSubcat('');
  }

  async function handleUpdateCategory() {
    if (!category) return;
    if (!categoryId) return;
    if (name.length < 2) return;
    if (!image) return;

    const subcategories: string[] = [];
    const actualsubcats: string[] = [];
    category.subcategories?.map((subs) => subcategories.push(subs.name));
    subcats.map((subs) => actualsubcats.push(subs.name));
    const newsubcats = actualsubcats.filter((s) => !subcategories.includes(s));

    if (category.name === name && category.imageUrl === image && newsubcats.length === 0) {
      nav('/admin/categories');
    }

    await updateCategory({ categoryId, name, imageUrl: image, subcategories: newsubcats });
  }

  async function handleDeleteSubcategory(subcategoryId: string) {
    if (!subcategoryId) return;
    await deleteSubcategory({ subcategoryId });
  }

  useEffect(() => {
    if (res.isLoading) {
      toast.loading('Chargement...', { id: toastId });
    }

    if (res.isSuccess) {
      toast.success('Catégorie actualisée', { id: toastId });
      nav('/admin/categories');
    }
    if (res.isError) {
      toast.error(`Erreur lors de l'actualisation`, { id: toastId });
      nav('/admin/categories');
    }
  }, [res, subRes, nav]);

  useEffect(() => {
    if (subRes.isLoading) {
      toast.loading('Chargement...', { id: toastId });
    }

    if (subRes.isSuccess) {
      toast.success('Sous-catégorie supprimée', { id: toastId });
    }
    if (subRes.isError) {
      toast.error('Erreur lors de la suppression', { id: toastId });
    }
  }, [subRes]);

  useEffect(() => {
    if (category) {
      setName(category.name);
      const subcategories: { id: string; name: string }[] = [];
      category.subcategories?.map((subs) => subcategories.push({ id: subs.id, name: subs.name }));
      setSubcats(subcategories);
      setImage(category.imageUrl);
    }
  }, [category]);

  if (isLoading) return <div>Loading ...</div>;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Modifier la catégorie" description="Modifier une catégorie" />
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
                    key={subc.id}
                    className="flex flex-row items-center text-base bg-secondary text-grey w-fit rounded-md pl-3"
                  >
                    {subc.name}
                    <button
                      type="button"
                      onClick={() => handleDeleteSubcategory(subc.id)}
                      className="text-base py-2 px-3"
                    >
                      <LuX />
                    </button>
                  </div>
                );
              })}
            </div>
            <Images selected={image} setSelected={setImage} path="img/categories/" />
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
        <Button icon={<LuPlus size={16} />} value="Actualiser la catégorie" onClick={() => handleUpdateCategory()} />
      </div>
    </div>
  );
}
