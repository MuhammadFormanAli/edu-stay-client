import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const PasswordResetForm = () => {
    const { manageForgetPassword } = useAuth()
    const [message, setMessage] = useState('');

    const handlePasswordReset = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        manageForgetPassword(email)
            .then(() => {
                Swal.fire('Password reset email sent. Please check your email.')
                setMessage('')
            })
            .catch(error => setMessage(`Error: ${error.message}`))

    }
    return (
        <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-md my-4 border">
            <h2 className="text-xl font-semibold mb-4">Password Reset</h2>

            <form onSubmit={handlePasswordReset}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <input className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600" type="submit" value="Reset Password" />
            </form>


            {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
        </div>
    );
};

export default PasswordResetForm;