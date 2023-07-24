import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const {googleSignIn,facebookSignIn} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)

            const loggedInUser = result.user;      //{ name, email, photo, role }
            const saveUser = { name: loggedInUser?.displayName, email: loggedInUser?.email, photo: loggedInUser?.photoURL }
            
            fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {
                                    console.log('Successful');
                                }
                            })



            navigate(from, { replace: true })
        })
        .catch(err=>{
            console.log(err.message)
            
        })
    }

    const handleFacebookSignIn=()=>{
        facebookSignIn()
        .then(result =>{
            console.log(result.user)
            const loggedInUser = result.user;      //{ name, email, photo, role }
            const saveUser = { name: loggedInUser?.displayName, email: loggedInUser?.email, photo: loggedInUser?.photoURL }
            
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        console.log('Successful');
                    }
                })


            navigate(from, { replace: true })
        })
        .catch(err=>{
            console.log(err.message)
            
        })
    }
    return (
        <>
            <button className='btn btn-outline w-full font-bold text-xl' onClick={handleGoogleSignIn}> google sign in</button>
            <button className='btn btn-outline w-full font-bold text-xl mt-4' onClick={handleFacebookSignIn}> facebook sign in</button>
        </>
    );
};

export default SocialLogin;
