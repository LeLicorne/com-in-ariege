import Heading from '../ui/heading';
import Separator from '../ui/separator';

export default function ProductsPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Produits" description="Gérer les produits de votre boutique" />
        <Separator />
      </div>
    </div>
  );
}
