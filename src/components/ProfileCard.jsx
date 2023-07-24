import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";



const ProfileCard = () => {
    const { user } = useAuth()

    const [eduUser, setEduUser]= useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res=> res.json())
        .then(result =>setEduUser(result))
    },[user?.email])


    return (
        <div>
            <div className="max-w-sm my-6 border mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img className=" block mx-auto rounded-full my-2 h-[250px]" src={user?.photoURL} alt="Avatar" />
                <div className="py-4 px-6">
                    <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
                    <p className="text-gray-600 text-sm">Email: {user?.email}</p>
                    <p className="text-gray-600 text-sm">{eduUser?.university}</p>
                    <p className="text-gray-600 text-sm">{eduUser?.address}</p>
                    <div className="mt-4">
                        <Link to='/editProfile' className=" btn btn-outline">Edit</Link>
                    </div>
                </div>
            </div>

            

        </div>
    );
};

export default ProfileCard;