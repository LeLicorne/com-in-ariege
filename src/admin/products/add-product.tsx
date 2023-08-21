import { useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import Heading from '../ui/heading';
import Input from '../ui/input';
import Separator from '../ui/separator';
import Select from '../ui/select';
import { useGetCategoriesQuery } from '../../redux/api';
import Picker from '../ui/picker';
import Button from '../ui/button';
import { Category } from '../../models/shop';
import Images from '../ui/images';

export default function AddProduct() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string>('');
  const [subcategory, setSubcategory] = useState<string>('');
  const [stock, setStock] = useState('');
  const [featured, setFeatured] = useState(false);
  const [archived, setArchived] = useState(false);
  const [prix, setPrix] = useState('');
  const [image, setImage] = useState('');
  const { data: categories } = useGetCategoriesQuery();

  function getCat(cats: Category[]) {
    const catList: { name: string; value: string }[] = [{ name: 'Aucune', value: '' }];
    cats.map((cat) => catList.push({ name: cat.name, value: cat.id }));
    return catList;
  }

  function getSubCat() {
    if (!categories) return [];
    const subCatList: { name: string; value: string }[] = [{ name: 'Aucune', value: '' }];
    const selectedCat = categories.find((cat) => cat.id === category);
    if (!selectedCat) return [];
    selectedCat.subcategories?.map((subCat) => subCatList.push({ name: subCat.name, value: subCat.id }));
    return subCatList;
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Créer un produit" description="Ajoute un nouveau produit" />
      </div>
      <Separator />
      <Input
        label="Nom"
        placeholder="Nom du produit"
        errorMessage="Minimum deux caractères"
        value={name}
        setValue={setName}
      />
      <Input
        label="Description"
        placeholder="Description du produit"
        errorMessage="Minimum dix caractères"
        value={description}
        setValue={setDescription}
      />
      <Select name="Catégorie" opts={getCat(categories || [])} value={category} setValue={setCategory} />
      <Select name="Sous catégorie" opts={getSubCat()} value={subcategory} setValue={setSubcategory} />
      <Input
        label="Stock"
        placeholder="Stock du produit"
        errorMessage="Minimum un caractères"
        value={stock}
        setValue={setStock}
      />
      <Picker name="Produit du moment" desc="" value={featured} setValue={setFeatured} />
      <Picker name="Produit archivé" desc="" value={archived} setValue={setArchived} />
      <Input
        label="Prix"
        placeholder="Prix du produit"
        errorMessage="Minimum un caractères"
        value={prix}
        setValue={setPrix}
      />
      <Images selected={image} setSelected={setImage} path="img/products/" />
      <div className="pt-8">
        <Button icon={<LuPlus size={16} />} value="Ajouter le produit" onClick={() => nav('products')} />
      </div>
    </div>
  );
}
