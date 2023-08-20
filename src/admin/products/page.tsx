import { LuPlus } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/button';
import Heading from '../ui/heading';
import Separator from '../ui/separator';

export default function ProductsPage() {
  const nav = useNavigate();
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Produits" description="Gérer les produits de votre boutique" />
        <Button icon={<LuPlus size={16} />} value="Nouveau produit" onClick={() => nav('produits/new')} />
      </div>
      <Separator />
    </div>
  );
}
