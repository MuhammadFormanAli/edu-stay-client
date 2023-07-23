import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Colleges from "../components/Colleges";
import Admission from "../components/Admission";
import Apply from "../components/Apply";
import CollegeDetails from "../components/CollegeDetails";



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
              path:"details",
              element:<CollegeDetails></CollegeDetails>
            },
            {
              path:"register",
              element:<Register></Register>
            },
            {
              path:"login",
              element:<Login></Login>
            },
            {
              path:"colleges",
              element:<Colleges></Colleges>
            },
            {
              path:"admission",
              element:<Admission></Admission>
            },
            {
              path:"apply",
              element:<Apply></Apply>
            },
    
          ]
    },
    
]);

export default router;