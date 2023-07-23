import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";



const Apply = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [error, setError] = useState('')

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm();




    const onSubmit = data => {
        const { subject, name, email,  photo: photo } = data

        console.log(name, email, photo, subject)
        reset()
        navigate(from, { replace: true })
        setError('')
    };



    return (
        <div className='mb-4 w-full lg:w-1/2 mx-auto bg-base-300 p-4 my-4 rounded-md'>
            <h1 className='text-3xl text-center font-bold my-4'>Apply</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* { ‘Candidate Name, Subject, Candidate Email, Candidate
                     Phone number, address, date of birth, and image field. And submit button. } */}






                <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                    <input
                        id="name"
                        defaultValue={user?.displayName}
                        type="text" {...register('name', { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.name && <div className='text-red-600'>Name is required</div>}
                </div>

                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
                <Controller
                    name="subject"
                    control={control}
                    rules={{ required: 'This field is required' }} // Set validation rules if needed
                    render={({ field }) => (
                        <select
                        id="subject"
                         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" {...field}>
                            <option value="">Select Your Subject</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    )}
                />


                <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <input id="email" defaultValue={user?.email} type="email" {...register('email',  { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.email && (
                        <div className='text-red-600'>
                            {errors.email.type === 'required' ? 'Email is required' : 'Invalid email address'}
                        </div>
                    )}
                </div>


                <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone Number</label>
                    <input
                        id="phone"
                        type="text" {...register('phone', { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.phone && <div className='text-red-600'>Phone Number is required</div>}
                </div>

                <div>
                    <label htmlFor="address" className="block mb-2 font-medium text-gray-700">Address</label>
                    <input
                        id="address"
                        type="text" {...register('address', { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.address && <div className='text-red-600'>Address is required</div>}
                </div>

                <div>
                    <label htmlFor="dateOfBirth" className="block mb-2 font-medium text-gray-700">Date Of Birth</label>
                    <input
                        id="dateOfBirth"
                        type="date" {...register('dateOfBirth', { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.dateOfBirth && <div className='text-red-600'>Birth Date is required</div>}
                </div>


                <div>
                    <label htmlFor="photo" className="block mb-2 font-medium text-gray-700">Photo URL</label>
                    <input
                        id="photo"
                        type="text"
                        {...register('photo', { required: true })}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    />
                    {errors.photoURL && <div className='text-red-600'>Photo URL is required</div>}
                </div>


                <div className='flex items-center gap-4'>
                    <button className='btn btn-primary my-4' type="submit">Submit</button>

                </div>
            </form>
            <small className='text-red-600 text-center block m-1'>{error}</small>



        </div>
    );
};

export default Apply;