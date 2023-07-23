
const ImageGallery = () => {
    const Photos = [
        {collegeName:'ABC College', img:'/college.jpg'},
        {collegeName:'ABCD College', img:'/college.jpg'},
        {collegeName:'AM College', img:'/college.jpg'},
        {collegeName:'AM College', img:'/college.jpg'},
        {collegeName:'AM College', img:'/college.jpg'},
        {collegeName:'AM College', img:'/college.jpg'},
    ]
    return (
        <div className="border m-1 p-4">
            <h1 className="text-center font-bold text-2xl mt-4">Gallery</h1>
            <p className="text-center font-semibold text-xl">Some Photos from graduation party</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-3">
                
                {
                    Photos.map((photo, index)=> <div 
                    key={index}
                    className="relative">
                    <img className="rounded" src={photo.img} alt="" />
                <div className=" w-full h-full flex justify-center items-center absolute top-0 opacity-0 hover:opacity-90 bg-slate-950 bg-opacity-50 text-2xl font-bold text-white transition duration-700 ">
                    <h1>{photo.collegeName}</h1>
                </div>

            </div>)
                }

               
                
          
            </div>
        </div>
    );
};

export default ImageGallery;