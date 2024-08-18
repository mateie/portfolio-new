import { createTheme, Flex, MantineProvider } from "@mantine/core";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error.page";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home.page";

const theme = createTheme({
    fontFamily: "Montserrat, sans-serif",
});

const App = () => {
    return (
        <MantineProvider theme={theme} forceColorScheme="dark">
            <Router>
                <Flex className="h-screen">
                    <Sidebar />
                    <Flex justify="center" align="center" className="flex-grow">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                    </Flex>
                </Flex>
            </Router>
        </MantineProvider>
    );
};

export default App;
