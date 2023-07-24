import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from "react-rating";


const CollegeDetails = () => {
    const [college, setCollege] = useState({})
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:5000/college/${id}`)
            .then(res => res.json())
            .then(data => setCollege(data))

    }, [id])

    console.log(college)
    return (
        <div>

            <div className="p-2">
                <img className=" md:h-[400px] w-full" src={college?.collegeImg} alt="" />
                <h1 className="font-bold text-lg mt-1">College Name : {college?.collegeName}</h1>
                <h1 className="mt-1"><span className="font-bold">Address</span> : {college?.collegeAddress}</h1>
                <h1 className="mt-1"> <span className="font-bold">About College</span> : {college?.collegeDescription}</h1>
                <h1 className="mt-1"> <span className="font-bold">Admission Date</span>  : {college?.admissionDate}</h1>

                <p className='text-yellow-700'>Rating:<Rating className='text-yellow-500'

                    placeholderRating={college?.collegeRatting}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}></Rating></p>


                <div className="my-6">
                    <h1 className="font-bold text-center text-lg mb-4">Admission Process</h1>
                    {college?.admissionProcess?.map((x, index) => <li key={index}>{x}</li>)}
                </div>

                <div ><h1 className="font-bold underline text-lg">Events </h1> {college?.events?.map((event, index) =>
                    <div
                        key={index}
                        className="my-2"
                    >

                        <p> <span className="font-semibold">Event Name : </span>{event?.eventName}</p>
                        <p> <span className="font-semibold">Event Date : </span> {event?.eventDate}</p>
                        <p> <span className="font-semibold">Event Description : </span>  {event?.eventDescription}</p>

                    </div>)

                }

                </div>
                <div> <h1 className="font-bold underline text-lg">Research Works</h1>{college?.researchWorks?.map((research, index) =>
                    <div
                        key={index}
                        className="my-2"
                    >

                        <p><span className="font-semibold">Name : </span> {research?.researchTitle}</p>
                        <p><span className="font-semibold">Description : </span>  {research?.researchDescription}</p>

                    </div>)

                }

                </div>


                <div><h1 className="font-bold underline text-lg">Sports</h1> {college?.sportsCategories?.map((categories, index) =>
                    <div
                        key={index}
                        className="my-2"
                    >

                        <p><span className="font-semibold">Name : </span> {categories?.categoryName}</p>
                        <p><span className="font-semibold">Description : </span> {categories?.categoryDescription}</p>

                    </div>)

                }

                </div>




            </div>

        </div>
    );
};

export default CollegeDetails;