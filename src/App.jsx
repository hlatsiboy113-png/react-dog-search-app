import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import DogDetailsPage from './pages/DogDetailsPage/DogDetailsPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        padding: '30px 20px', 
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>🐾 PawFinder</h1>
        <p style={{ margin: '10px 0 0', opacity: 0.9 }}>Discover your perfect canine companion</p>
      </header>
      
      <main style={{ minHeight: '70vh', paddingBottom: '40px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog/:id" element={<DogDetailsPage />} />
        </Routes>
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '30px 20px', 
        marginTop: '40px', 
        borderTop: '1px solid #eee',
        color: '#666'
      }}>
        <p>© 2026 Dog Explorer Project | Built with React & The Dog API</p>
      </footer>
    </div>
  );
}

export default App;
