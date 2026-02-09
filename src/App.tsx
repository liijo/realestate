import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './store/FavoritesContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const PropertyDetails = lazy(() => import('./pages/PropertyDetails').then(module => ({ default: module.PropertyDetails })));
const Favorites = lazy(() => import('./pages/Favorites').then(module => ({ default: module.Favorites })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* Navbar placeholder */}
          <header className="bg-white shadow-sm p-4">
            <div className="container mx-auto">
              <h1 className="text-xl font-bold text-blue-600">RealEstate</h1>
            </div>
          </header>

          <main className="flex-grow">
            <Suspense fallback={<div className="flex justify-center items-center h-64">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <footer className="bg-gray-800 text-white p-6 mt-auto">
            <div className="container mx-auto text-center">
              &copy; 2026 RealEstate Platform
            </div>
          </footer>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
