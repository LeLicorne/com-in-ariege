import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Admin from './pages/Admin';
import InConstruction from './pages/ComingSoon';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Shop from './pages/Shop';

const siteState: string = 'home';

function App() {
  if (siteState === 'ComingSoon') {
    return <InConstruction />;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<Shop />} />
      <Route path="/catalogue/produit/:productId" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
