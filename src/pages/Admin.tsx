import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import AddCategory from '../admin/categories/add-category';
import EditCategory from '../admin/categories/edit-category';
import CategoriesPage from '../admin/categories/page';
import DashboardPage from '../admin/dashboard/page';
import Navbar from '../admin/navigation/Navbar';
import ProductsPage from '../admin/products/page';
import AddProduct from '../admin/products/add-product';
import EditProduct from '../admin/products/edit-product';

export default function Admin() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/new" element={<AddCategory />} />
        <Route path="categories/:categoryId" element={<EditCategory />} />
        <Route path="produits" element={<ProductsPage />} />
        <Route path="produits/new" element={<AddProduct />} />
        <Route path="produits/:productId" element={<EditProduct />} />
      </Routes>
    </div>
  );
}
