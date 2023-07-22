import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            navigate(from, { replace: true })
        })
        .catch(err=>{
            console.log(err.message)
            
        })
    }
    return (
        <>
            <button className='btn btn-outline w-full font-bold text-xl' onClick={handleGoogleSignIn}> google sign in</button>
        </>
    );
};

export default SocialLogin;
