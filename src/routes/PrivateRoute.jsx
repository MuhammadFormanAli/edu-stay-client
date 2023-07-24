
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';


const PrivetRoute = ({ children }) => {


    
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }

    if (user) {
        return children
    }
    if(!loading){
        Swal.fire(
            
            'You have to log in first.',
            '',
            'warning'
          );
    }
    return (
        <>
        {}
            <Navigate to="/login" state={{ from: location }}></Navigate>
        </>
    )
};

export default PrivetRoute;