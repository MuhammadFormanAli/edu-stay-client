import { Link } from "react-router-dom";

const CollegeCard = ({college}) => {
    console.log(' from college card', college)
    
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={college?.collegeImg} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">College Name : {college?.collegeName}</h2>
                <p>Admission Deadline:{college?.admissionDate}</p>
                <p>Events : {college?.events?.map((event,index) => <span key={index}>{event.eventName},</span>)} </p>
                <p>Total Reachers Papers : {college?.totalResearchPapers}</p>
                <p>Events : {college?.sportsCategories?.map((sport,index) => <span key={index}>{sport.categoryName},</span>)} </p>
                <div className="card-actions justify-end">
                    <Link to={`/college/${college?._id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;