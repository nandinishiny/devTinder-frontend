import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const AppRouter = createBrowserRouter([
    {
        element: <App />,
        path: "/",
    },{
        path: "/about",
        element: <div>about</div>
    }
]);
export default AppRouter;