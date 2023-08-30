/* eslint-disable no-underscore-dangle */
import { createColumnHelper } from '@tanstack/react-table';
import { useGetAdminProductQuery } from '../../redux/api';
import ActionsButtons from '../ui/action-button';
import { DataTable } from '../ui/data-table';

type AdminProduct = {
  reference: string;
  id: string;
  name: string;
  category: string;
  subcategory: string;
  isFeatured: string;
  isArchived: string;
  ecologic: string;
  stock: string;
  price: string;
};

const columnHelper = createColumnHelper<AdminProduct>();

const columns = [
  columnHelper.accessor('reference', {
    header: () => <span>Reference</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('name', {
    header: () => <span>Nom</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('category', {
    header: () => <span>Catégorie</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('subcategory', {
    header: () => <span>Sous-catégorie</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('isFeatured', {
    header: () => <span>Produit du moment</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('isArchived', {
    header: () => <span>Produit archivé</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('ecologic', {
    header: () => <span>Produit écologique</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('stock', {
    header: () => <span>Stock</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('price', {
    header: () => <span>Prix</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('id', {
    header: () => {},
    cell: (info) => <ActionsButtons type="products" id={info.getValue()} />,
  }),
];

export default function Table() {
  const { data } = useGetAdminProductQuery();
  const products: AdminProduct[] = [];

  if (!data) return null;

  data.map((item) =>
    products.push({
      reference: item.reference,
      id: item.id,
      name: item.name,
      category: item.category?.name ? item.category.name : '',
      subcategory: item.subcategory?.name ? item.subcategory.name : '',
      isFeatured: item.isFeatured === true ? 'Oui' : 'Non',
      isArchived: item.isArchived === true ? 'Oui' : 'Non',
      ecologic: item.ecologic === true ? 'Oui' : 'Non',
      stock: item.stock.toString(),
      price: `${item.price.toString()} €`,
    })
  );

  return <DataTable searchKey="reference" columns={columns} data={products} />;
}
