/* eslint-disable no-underscore-dangle */
import { LuCreditCard, LuDollarSign, LuPackage } from 'react-icons/lu';
import { useGetDashboardQuery } from '../../redux/api';
import Heading from '../ui/heading';
import Separator from '../ui/separator';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ name, icon, value }: { name: string; icon: any; value: string | number }) => {
  return (
    <div className="rounded-lg border bg-white text-black shadow-sm">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">{name}</h3>
        {icon}
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-semibold">{value}</div>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  const { data, isLoading } = useGetDashboardQuery();

  function getInfos() {
    if (!data) return '';
    const nonArchived = data.find((d) => d.isArchived === false);
    if (!nonArchived) return '';
    return [nonArchived._count.id, nonArchived._sum.stock];
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Vue générale de votre boutique" />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          <Card name="Vues" icon={<LuDollarSign className="h-4 w-4 text-grey" />} value="À venir" />
          <Card
            name="Produits"
            icon={<LuCreditCard className="h-4 w-4 text-grey" />}
            value={data ? getInfos()[0] : '...'}
          />
          <Card name="Stock" icon={<LuPackage className="h-4 w-4 text-grey" />} value={data ? getInfos()[1] : '...'} />
        </div>
      </div>
    </div>
  );
}
