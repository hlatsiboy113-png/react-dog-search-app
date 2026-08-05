import { DogProvider } from "./context/DogContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DogProvider>
            <App />
        </DogProvider>
    </React.StrictMode>
