import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>🐾 PawFinder</h1>
          <p>Welcome to your Dog Explorer App!</p>
        </div>
        <div>
          <h2>Get started</h2>
          <p>
            The project structure is ready. You can now begin building your API features.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Project Goals</h2>
          <p>Complete your API and Dog Display deliverables.</p>
          <ul>
            <li>Integrate Dog API</li>
            <li>Create Dog Grid and Cards</li>
            <li>Implement Dog Details Page</li>
          </ul>
        </div>
        <div id="social">
          <h2>Team Roles</h2>
          <p>Working together for real world impact.</p>
          <ul>
            <li>Mahlatse: Project Lead</li>
            <li>Nonkululeko: Search & Navigation</li>
            <li>Karabo: API & Dog Display</li>
            <li>Emily: UI & Presentation</li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
