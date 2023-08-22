/* eslint-disable no-underscore-dangle */
import { createColumnHelper } from '@tanstack/react-table';
import { useGetAdminCategoriesQuery } from '../../redux/api';
import ActionsButtons from '../ui/action-button';
import { DataTable } from '../ui/data-table';

type AdminCategory = {
  id: string;
  name: string;
  subcategories: string;
  products: string;
};

const columnHelper = createColumnHelper<AdminCategory>();

const columns = [
  columnHelper.accessor('name', {
    header: () => <span>Nom</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('subcategories', {
    header: () => <span>Sous-catégories</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('products', {
    header: () => <span>Produits</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('id', {
    header: () => {},
    cell: (info) => <ActionsButtons type="categories" id={info.getValue()} />,
  }),
];

export default function Table() {
  const { data } = useGetAdminCategoriesQuery();
  const categories: AdminCategory[] = [];

  if (!data) return null;

  data.map((item) =>
    categories.push({
      id: item.id,
      name: item.name,
      subcategories: item._count.subcategories,
      products: item._count.products,
    })
  );

  return <DataTable searchKey="name" columns={columns} data={categories} />;
}
