

import ImageGallery from "../components/ImageGallery";
import PopularCollege from "../components/PopularCollege";
import RecommendedPaper from "../components/RecommendedPaper";
import Reviews from "../components/Reviews";


const Home = () => {

    return (
        <>
            <PopularCollege></PopularCollege>
            <ImageGallery></ImageGallery>
            <RecommendedPaper></RecommendedPaper>
            <Reviews></Reviews>
            
        </>
    );
};

export default Home;