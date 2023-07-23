import { Link } from "react-router-dom";


const Admission = () => {
    return (
        <div>
        <Link to='/apply' >
            <div className="w-[250px] text-center border p-6 ">
                <img className="w-full rounded" src="/college.jpg" alt="" />
                <h1>College Name</h1>
            </div>
        </Link>
        </div>
    );
};

export default Admission;