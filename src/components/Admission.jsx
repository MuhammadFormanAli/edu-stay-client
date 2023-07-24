import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";


const Admission = () => {
    const [colleges, setColleges] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:5000/colleges`)
            .then(res => res.json())
            .then(data => setColleges(data))

    }, [])
    console.log(colleges)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bo p-5 my-6">
           

        {
           colleges?.map(college => <div
           key={college._Id}
           >
            <Link to={`/college/admission/${college?._id}`}  >
                <div className="w-[250px] text-center border p-6 ">
                    <img className="w-full rounded" src={college?.collegeImg} alt="" />
                    <h1>{college?.collegeName}</h1>
                </div>
            </Link>
            </div>) 
        }
        </div>
    );
};

export default Admission;