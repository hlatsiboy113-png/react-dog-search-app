import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DogDetailsPage from "./pages/DogDetailsPage/DogDetailsPage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog/:id" element={<DogDetailsPage />} />
        </Routes>
      </main>

      <footer>
        <p>
          © 2026 Dog Explorer Project | Built by Cohesion Core with React &
          The Dog API | iHub Africa 2026 Cohort
        </p>
      </footer>
    </div>
  );
}

export default App;