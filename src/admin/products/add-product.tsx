import { useState } from 'react';
import Heading from '../ui/heading';
import Input from '../ui/input';
import Separator from '../ui/separator';

export default function AddProduct() {
  const [name, setName] = useState('');

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
    </div>
  );
}
