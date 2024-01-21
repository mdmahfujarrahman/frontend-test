import MainLayout from "./components/Layout/MainLayout";
import AppProvider from "./context/AppContext";

function App() {
    return (
        <AppProvider>
            <MainLayout />
        </AppProvider>
    );
}

export default App;
