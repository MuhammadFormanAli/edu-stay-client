import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from 'react-icons/fa';


const Reviews = () => {
    const [reviews, setReviews] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res=> res.json())
    .then(result => setReviews(result))
},[])

console.log(reviews)

    return (
        <div className="my-4 border bg-slate-100 p-4">
            <h1 className="font-bold text-3xl text-center my-5">Student Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">

                {
                    reviews?.map(review =><div
                     key={review._id} 
                     className='bg-white border  p-3 rounded-br-[50px] rounded-tl-[50px]'
                     >

                    <div className='flex items-center ml-5 '>
                        <img className="text-center rounded-full my-2 w-1/4" src={review?.image} alt="Client" />
                        <div className='ml-5'>
                            <h3 className="text-xl font-bold">{review?.name}</h3>
                            <h3 className="text-base font-bold">{review?.collegeName} </h3>

                            <p className='text-yellow-700'>Rating:<Rating className='text-yellow-500'
                                placeholderRating={review?.ratting}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar />}
                                fullSymbol={<FaStar />}></Rating></p>

                        </div>
                    </div>

                    <div className='ml-5'>
                        <p className="">{review?.testimonial}</p>
                    </div>
                </div> )
                }

                


            </div>
        </div>
    );
};

export default Reviews;