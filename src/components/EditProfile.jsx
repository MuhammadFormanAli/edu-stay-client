import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const EditProfile = () => {
    const { user, manageEmail, manageUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [eduUser, setEduUser] = useState({})



    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(result => setEduUser(result))
    }, [])


    const handleUpdateProfile = (event) => {
        event.preventDefault()
        const photo = user?.photoURL
        const name = event.target.name.value
        const email = event.target.email.value
        const address = event.target.address.value
        const university = event.target.university.value
        const updatedUser = { name, email, address, university, photo }


        manageEmail(email).then(() => {
            console.log('email updated')
            //code for update user name
            manageUser(name, photo).then(() => {
                console.log('name updated')

                fetch(`http://localhost:5000/users/${eduUser?._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {

                            Swal.fire(
                                'Updated',
                                'Your file has been updated.',
                                'success'
                            )
                            navigate(from, { replace: true })
                        }
                    })

            }).catch(error => console.log(error.message))

        }).catch(error => console.log(error.message))

        console.log('From Edit Profile', name, email, address, university, photo)
    }
    return (
        <div>
            <form onSubmit={handleUpdateProfile} className="flex flex-col gap-3 font-semibold max-w-[350px] shadow-md rounded my-6 mx-auto border p-2">
                <label htmlFor="name"> Your New Name</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" type="text" name="name" id="name" required defaultValue={user?.displayName} />

                <label htmlFor="email"> Your New Email</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" type="email" name="email" id="email" required defaultValue={user?.email} />

                <label htmlFor="address"> Your New Address</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" type="text" name="address" id="address" />

                <label htmlFor="university"> Your New University</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" type="text" name="university" id="university" />

                <input className="btn btn-outline" type="submit" value="Update Profile" />

            </form>
        </div>
    );
};

export default EditProfile;