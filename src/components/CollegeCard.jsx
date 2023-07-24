import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from 'react-icons/fa';

const CollegeCard = ({college}) => {
    // console.log(' from college card', college)
    
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={college?.collegeImg} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">College Name : {college?.collegeName}</h2>
                <p>Admission Deadline:{college?.admissionDate}</p>
                <p>Events : {college?.events?.map((event,index) => <span key={index}>{event.eventName},</span>)} </p>
                <p>Total Reachers Papers : {college?.researchPapers}</p>
                <p>Events : {college?.sportsCategories?.map((sport,index) => <span key={index}>{sport.categoryName},</span>)} </p>
                
                <p className='text-yellow-700'>Rating:<Rating className='text-yellow-500'

                                placeholderRating={college?.collegeRating}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar />}
                                fullSymbol={<FaStar />}></Rating></p>

                
                <div className="card-actions justify-end">
                     <Link to={`/college/${college?._id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;