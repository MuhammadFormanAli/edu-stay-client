import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BiHide, BiShow } from "react-icons/bi";
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { signIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const [errorMessage, setErrorMessage] = useState('')

    const from = location.state?.from?.pathname || '/'
    console.log(location)

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const password = watch('password', '');



    const onSubmit = data => {
        const {  email, password } = data
        signIn(email,password)
        .then(result=>{
            navigate(from, { replace: true })
            console.log(result)
            Swal.fire('Log In successful')
            
        })
        .catch(error=>{
            setErrorMessage(error.message)
        })
        
        reset()
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='mb-4 w-full lg:w-1/2 mx-auto bg-base-300 p-4 my-4 rounded-md'>
            <h1 className='text-3xl text-center font-bold my-4'>Please Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <input id="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.email && (
                        <div className='text-red-600'>
                            {errors.email.type === 'required' ? 'Email is required' : 'Invalid email address'}
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password</label>
                    <div className='relative'>
                        <input id="password" type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])/, })}
                            className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        />
                        <button className='btn btn-sm absolute top-1 right-1' type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? <BiShow></BiShow> : <BiHide> </BiHide>}
                        </button>
                    </div>
                    {errors.password && (
                        <div className='text-red-600'>
                            {errors.password.type === 'required'
                                ? 'Password is required'
                                : errors.password.type === 'minLength'
                                    ? 'Password must be at least 6 characters long'
                                    : 'Password must contain a capital letter and a special character'}
                        </div>
                    )}
                    {/* TODO: positioning show hide button */}

                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-700">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        {...register('confirmPassword', {
                            required: true,
                            validate: value => value === password || 'Passwords do not match',
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.confirmPassword && <div className='text-red-600'>{errors.confirmPassword.message}</div>}
                </div>

                <div className='flex items-center gap-4'>
                    <button className='btn btn-primary my-4' type="submit">Log In</button>
                    <p>Do not have an account <Link to="/register" className='text-blue-700 underline'>Register</Link></p>
                </div>
            </form>
                <Link to='/passwordReset' className=" font-medium text-indigo-600 hover:text-indigo-500 ">Forgot your password?</Link>
<div>
    
    {
    errorMessage && <small className='text-red-500'>{errorMessage}</small>
    }
</div>
            <div className='my-2'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;