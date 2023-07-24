import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";


const MyCollege = () => {
    const [applications, setApplications] = useState([])
    const { user } = useAuth()
    const userEmail = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/applications?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [userEmail])

    console.log(applications)
    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-8">Your Colleges</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-6 font-semibold">

                {
                    applications?.map(application =>

                        <div
                            key={application._id}
                            className="flex flex-col md:flex-row gap-4 border p-2"
                        >
                            <div>
                                <img className="w-[250px]" src={application.photo} alt="" />
                            </div>

                            <div className="flex flex-col  justify-center">
                                <h1 className="font-bold">College Name : {application?.college?.collegeName}</h1>
                                <h1>Candidate Name: {application?.name}</h1>
                                <h1>Email : {application?.email}</h1>
                                <h1>Phone : {application?.phone}</h1>
                                <h1>Date Of Birth : {application?.dateOfBirth}</h1>
                                <h1>Address : {application?.address}</h1>
                                <h1>Subject Name : {application?.subject}</h1>


                                <Link to={`/review/${application?.college?.collegeName}`} className="btn btn-primary">Review</Link>
                            </div>

                        </div>)
                }


                <div>

                </div>
            </div>
        </div>
    );
};

export default MyCollege;