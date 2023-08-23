import { useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Heading from '../ui/heading';
import Input from '../ui/input';
import Separator from '../ui/separator';
import Select from '../ui/select';
import { useAddProductMutation, useGetCategoriesQuery } from '../../redux/api';
import Picker from '../ui/picker';
import Button from '../ui/button';
import { Category, Product, Image } from '../../models/shop';
import Images from '../ui/images';

export default function AddProduct() {
  const nav = useNavigate();
  const [addProduct, res] = useAddProductMutation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [subcategoryId, setSubcategoryId] = useState<string>('');
  const [stock, setStock] = useState<number>(0);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const [warranty, setWarranty] = useState('');
  const [reference, setReference] = useState('');
  const [ecologic, setEcologic] = useState(false);
  const { data: categories } = useGetCategoriesQuery();
  const toastId = 'add-product';

  function getCat(cats: Category[]) {
    const catList: { name: string; value: string }[] = [{ name: 'Aucune', value: '' }];
    cats.map((cat) => catList.push({ name: cat.name, value: cat.id }));
    return catList;
  }

  function getSubCat() {
    if (!categories) return [];
    const subCatList: { name: string; value: string }[] = [{ name: 'Aucune', value: '' }];
    const selectedCat = categories.find((cat) => cat.id === categoryId);
    if (!selectedCat) return [];
    selectedCat.subcategories?.map((subCat) => subCatList.push({ name: subCat.name, value: subCat.id }));
    return subCatList;
  }

  async function handleAddProduct() {
    if (
      name.length < 2 ||
      reference.length < 1 ||
      description.length < 10 ||
      warranty.length < 1 ||
      image.length === 0
    ) {
      return;
    }
    const tblImages: Partial<Image>[] = [];
    tblImages.push({
      url: 'https://firebasestorage.googleapis.com/v0/b/comin-ariege.appspot.com/o/img%2Fproducts%2Fmaldives.jpg?alt=media&token=5e793a3c-805f-4a1c-9864-626c54ec9459 add-product.tsx:58:12',
    });
    tblImages.push({
      url: 'https://firebasestorage.googleapis.com/v0/b/comin-ariege.appspot.com/o/img%2Fproducts%2Fmaldives.jpg?alt=media&token=5e793a3c-805f-4a1c-9864-626c54ec9459 add-product.tsx:58:12',
    });
    tblImages.push({
      url: 'https://firebasestorage.googleapis.com/v0/b/comin-ariege.appspot.com/o/img%2Fproducts%2Fmaldives.jpg?alt=media&token=5e793a3c-805f-4a1c-9864-626c54ec9459 add-product.tsx:58:12',
    });

    const product: Partial<Product> = {
      reference,
      name,
      description,
      categoryId,
      subcategoryId,
      stock,
      isFeatured,
      isArchived,
      warranty,
      ecologic,
      price,
      images: tblImages,
    };
    await addProduct({ product });
  }

  useEffect(() => {
    if (res.isLoading) {
      toast.loading('Loading...', { id: toastId });
    }

    if (res.isSuccess) {
      toast.success('Produit créee', { id: toastId });
      nav('categories');
    }
    if (res.isError) {
      toast.error('Produit non créee', { id: toastId });
      nav('produits');
    }
  }, [res, nav]);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Créer un produit" description="Ajoute un nouveau produit" />
      </div>
      <Separator />
      <Input
        label="Référence"
        placeholder="Référence du produit"
        errorMessage="Minimum un caractères"
        value={reference}
        setValue={setReference}
      />
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
      <Select name="Catégorie" opts={getCat(categories || [])} value={categoryId} setValue={setCategoryId} />
      <Select name="Sous catégorie" opts={getSubCat()} value={subcategoryId} setValue={setSubcategoryId} />
      <Input
        label="Stock"
        placeholder="Stock du produit"
        errorMessage="Minimum un caractères"
        value={stock}
        setValue={setStock}
        numeric
      />
      <Picker name="Produit du moment" desc="" value={isFeatured} setValue={setIsFeatured} />
      <Picker name="Produit archivé" desc="" value={isArchived} setValue={setIsArchived} />
      <Picker name="Produit écologique" desc="" value={ecologic} setValue={setEcologic} />
      <Input
        label="Garantie"
        placeholder="Garantie du produit"
        errorMessage="Minimum un caractères"
        value={warranty}
        setValue={setWarranty}
      />
      <Input
        label="Prix"
        placeholder="Prix du produit"
        errorMessage="Minimum un caractères"
        value={price}
        setValue={setPrice}
        numeric
      />
      <Images selected={image} setSelected={setImage} path="img/products/" />
      <div className="pt-8">
        <Button icon={<LuPlus size={16} />} value="Ajouter le produit" onClick={() => handleAddProduct()} />
      </div>
    </div>
  );
}
