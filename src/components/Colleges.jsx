import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";


const Colleges = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('https://edu-stay-server.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className="border m-1 p-4">
            <h1 className="font-bold text-center text-2xl my-5">Our Colleges</h1>
            <section className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >


                {
                    colleges.map(college => (
                        <CollegeCard
                            key={college._id}
                            college={college}
                        ></CollegeCard>
                    ))
                }



            </section>
        </div>
    );
};

export default Colleges;