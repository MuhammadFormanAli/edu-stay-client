import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
              path:"/",
              element:<Home></Home>
            },
            {
              path:"register",
              element:<Register></Register>
            },
            {
              path:"login",
              element:<Login></Login>
            },
    
          ]
    },
    
]);

export default router;