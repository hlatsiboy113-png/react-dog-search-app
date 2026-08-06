import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ResultsHeader from "./components/ResultsHeader/ResultsHeader";
import DogGrid from "./components/DogGrid/DogGrid";

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