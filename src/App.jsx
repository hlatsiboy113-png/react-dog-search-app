import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import DogDetailsPage from './pages/DogDetailsPage/DogDetailsPage';
import Favorites from './pages/Favorites/Favorites';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog/:id" element={<DogDetailsPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>
          © 2026 PawFinder | Built with React & The Dog API | iHub Africa 2026 Cohort
        </p>
      </footer>
    </div>
  );
}

export default App;
