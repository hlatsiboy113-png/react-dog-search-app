
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ResultsHeader from "./components/ResultsHeader";
import DogGrid from "./components/DogGrid";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <SearchBar />
                <ResultsHeader />
                <DogGrid />
            </main>
        </>
    );
}

export default App;