
const ImageGallery = () => {
    const Photos = [
        {collegeName:'University of Tokyo', img:'https://www.u-tokyo.ac.jp/content/400111788.jpg'},
        {collegeName:'National University of Singapore', img:'https://law.nus.edu.sg/wp-content/uploads/2019/07/Commencement2019_pic1.jpg'},
        {collegeName:'University of Toronto', img:'https://alumni.utoronto.ca/sites/default/files/styles/content_scale_width_1200px_40/public/assets/page/social-image/UofT4383_20140609_ConvocationCeremony_7-lpr.jpg?itok=LVl4yJpT'},
        {collegeName:'Columbia University', img:'https://news.climate.columbia.edu/wp-content/uploads/2023/05/All-the-Grads-2_Class-Day-2023-1536x1152.jpg'},
        {collegeName:'University College London', img:'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1646844088620_mainnews2012_x1.jpg'},
        {collegeName:'Princeton University', img:'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2023/05/20230530_Commencement_CS_2349_3000x1688.jpg?itok=2csCfm23'},
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