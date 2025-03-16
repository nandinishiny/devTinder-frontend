import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Home from "./components/Home";
import Login from "./components/Login";

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
            },
            {
                path:"/login",
                element: <Login/>
            }

        ]
    }
]);
export default AppRouter;