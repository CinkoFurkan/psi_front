import { createBrowserRouter } from "react-router-dom";
import ClosingPage from "../pages/closing";

const routes = createBrowserRouter([
    {
        path: "*",
        element: <ClosingPage />
    }
]);

export default routes;