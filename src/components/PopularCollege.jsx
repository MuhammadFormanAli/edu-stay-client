import CollegeCard from "./CollegeCard";


const PopularCollege = () => {
    return (
        <div className="border m-1 p-4">
             <h1 className="font-bold text-center text-2xl my-5">Popular Colleges</h1>
        <section className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
           
            
            <CollegeCard></CollegeCard>
            <CollegeCard></CollegeCard>
            <CollegeCard></CollegeCard>
             
        </section>
        </div>
    );
};

export default PopularCollege;