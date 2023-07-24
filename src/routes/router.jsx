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
import PrivetRoute from "./PrivateRoute";
import Error from "../components/Error";
import PasswordResetForm from "../components/PasswordResetForm";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
              path:"/",
              element:<Home></Home>
            },
            {
              path:"college/:id",
              element: <PrivetRoute><CollegeDetails></CollegeDetails></PrivetRoute>
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
              element:<PrivetRoute><Admission></Admission></PrivetRoute>
            },
            {
              path:"college/admission/:id",
              element:<PrivetRoute><Apply></Apply></PrivetRoute>
            },
            {
              path:"my-colleges",
              element:<PrivetRoute><MyCollege></MyCollege></PrivetRoute>
            },
            {
              path:"review/:collegeName",
              element:<PrivetRoute><ReviewForm></ReviewForm> </PrivetRoute>
            },
            {
              path:"profile",
              element:<PrivetRoute><ProfileCard></ProfileCard> </PrivetRoute>
            },
            {
              path:"editProfile",
              element: <PrivetRoute><EditProfile></EditProfile></PrivetRoute>
            },
            {
              path:"passwordReset",
              element: <PasswordResetForm></PasswordResetForm>
            },
    
          ]
    },
    
]);

export default router;