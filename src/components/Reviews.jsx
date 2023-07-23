

const Reviews = () => {
    return (
        <div className="my-4 border bg-slate-100 p-4">
            <h1 className="font-bold text-3xl text-center my-5">Student Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">


                <div className='bg-white border  p-3 rounded-br-[50px] rounded-tl-[50px]'>
                    <div className='flex items-center ml-5 '>
                        <img data-aos="fade-left" className="text-center rounded-full my-2 w-1/4" src='/avatar.jpg' alt="Client" />
                        <div className='ml-5'>
                            <h3 className="text-xl font-bold">katu Samad</h3>
                            <h3 className="text-base font-bold">College Name</h3>

                        </div>
                    </div>

                    <div className='ml-5'>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit?</p>
                    </div>
                </div>
                <div className='bg-white border  p-3 rounded-br-[50px] rounded-tl-[50px]'>
                    <div className='flex items-center ml-5 '>
                        <img data-aos="fade-left" className="text-center rounded-full my-2 w-1/4" src='/avatar.jpg' alt="Client" />
                        <div className='ml-5'>
                            <h3 className="text-xl font-bold">katu Samad</h3>
                            <h3 className="text-base font-bold">College Name</h3>

                        </div>
                    </div>

                    <div className='ml-5'>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit?</p>
                    </div>
                </div>
                <div className='bg-white border  p-3 rounded-br-[50px] rounded-tl-[50px]'>
                    <div className='flex items-center ml-5 '>
                        <img data-aos="fade-left" className="text-center rounded-full my-2 w-1/4" src='/avatar.jpg' alt="Client" />
                        <div className='ml-5'>
                            <h3 className="text-xl font-bold">katu Samad</h3>
                            <h3 className="text-base font-bold">College Name</h3>

                        </div>
                    </div>

                    <div className='ml-5'>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, velit?</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Reviews;