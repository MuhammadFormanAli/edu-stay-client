import { Link } from "react-router-dom";

const CollegeCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src="/college.jpg" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">College Name : Sirajganj College</h2>
                <p>Admission Deadline:12.12.2012</p>
                <p>Events : yoga Class, Cooking Classes </p>
                <p>Total Reachers Papers : 15</p>
                <p>Sports : Football, Cricket</p>
                <div className="card-actions justify-end">
                    <Link to='/details' className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;