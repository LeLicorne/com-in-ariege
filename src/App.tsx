import { Route, Routes } from 'react-router-dom';
import InConstruction from './pages/ComingSoon';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const siteState: string = 'home';

function App() {
  if (siteState === 'ComingSoon') {
    return <InConstruction />;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
