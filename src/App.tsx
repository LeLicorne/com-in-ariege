import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import InConstruction from './pages/CommingSoon';

const siteState = 'CommingSoon';

function App() {
  if (siteState === 'CommingSoon') {
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
