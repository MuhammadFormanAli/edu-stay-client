import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Colleges from "../components/Colleges";
import Admission from "../components/Admission";
import Apply from "../components/Apply";
import CollegeDetails from "../components/CollegeDetails";
import MyCollege from "../components/MyCollege";
import ReviewForm from "../components/ReviewForm";
import ProfileCard from "../components/ProfileCard";
import EditProfile from "../components/EditProfile";



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
              path:"college/:id",
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
              path:"college/admission/:id",
              element:<Apply></Apply>
            },
            {
              path:"my-colleges",
              element:<MyCollege></MyCollege>
            },
            {
              path:"review/:collegeName",
              element:<ReviewForm></ReviewForm>
            },
            {
              path:"profile",
              element:<ProfileCard></ProfileCard>
            },
            {
              path:"editProfile",
              element:<EditProfile></EditProfile>
            },
    
          ]
    },
    
]);

export default router;