import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FeaturesIndex from './pages/FeaturesIndex';
import FeatureAdmin from './pages/FeatureAdmin';
import FeatureCaseworker from './pages/FeatureCaseworker';
import FeatureCandidate from './pages/FeatureCandidate';
import FeatureClient from './pages/FeatureClient';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import BookDemo from './pages/BookDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesIndex />} />
          <Route path="/features/admin" element={<FeatureAdmin />} />
          <Route path="/features/caseworker" element={<FeatureCaseworker />} />
          <Route path="/features/candidate" element={<FeatureCandidate />} />
          <Route path="/features/client" element={<FeatureClient />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/book-demo" element={<BookDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
