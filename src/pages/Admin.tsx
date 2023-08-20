import { useLocation } from 'react-router-dom';
import AddCategory from '../admin/categories/add-category';
import CategoriesPage from '../admin/categories/page';
import DashboardPage from '../admin/dashboard/page';
import Navbar from '../admin/navigation/Navbar';
import AddProduct from '../admin/products/add-product';
import ProductsPage from '../admin/products/page';
import SettingsPage from '../admin/settings/page';

export default function Admin() {
  const loc = useLocation();

  return (
    <div>
      <Navbar />
      {loc.pathname === '/admin' && <DashboardPage />}
      {loc.pathname === '/admin/categories' && <CategoriesPage />}
      {loc.pathname === '/admin/categories/new' && <AddCategory />}
      {loc.pathname === '/admin/produits' && <ProductsPage />}
      {loc.pathname === '/admin/produits/new' && <AddProduct />}
      {loc.pathname === '/admin/parametres' && <SettingsPage />}
    </div>
  );
}
