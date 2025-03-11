import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Home from "./components/Home";

const AppRouter = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element:<Home/> 
            },
            {
                path: "/about",
                element: <div>about</div>
            }

        ]
    }
]);
export default AppRouter;