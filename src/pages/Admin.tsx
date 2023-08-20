import { useLocation } from 'react-router-dom';
import CategoriesPage from '../admin/categories/page';
import DashboardPage from '../admin/dashboard/page';
import Navbar from '../admin/navigation/Navbar';
import ProductsPage from '../admin/products/page';
import SettingsPage from '../admin/settings/page';

export default function Admin() {
  const loc = useLocation();

  return (
    <div>
      <Navbar />
      {loc.pathname === '/admin' && <DashboardPage />}
      {loc.pathname === '/admin/categories' && <CategoriesPage />}
      {loc.pathname === '/admin/produits' && <ProductsPage />}
      {loc.pathname === '/admin/parametres' && <SettingsPage />}
    </div>
  );
}
