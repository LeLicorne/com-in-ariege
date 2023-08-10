import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import InConstruction from './pages/ComingSoon';

const siteState = 'home';

function App() {
  if (siteState === 'ComingSoon') {
    return <InConstruction />;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
