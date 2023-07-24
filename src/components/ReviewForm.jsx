import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ReviewForm = () => {
 const {user} = useAuth()
 const name = user?.displayName 
 const image = user?.photoURL


    const {collegeName} = useParams()
    const handleReviewSubmit = (event)=>{
        event.preventDefault()
        const testimonial = event.target.testimonial.value
        const ratting = parseFloat(event.target.ratting.value)


        const review = { name, ratting,collegeName,image,testimonial };

        fetch('https://edu-stay-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(review)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.insertedId) {
                alert('Successful');
              }
            })


console.log(review,ratting,collegeName,name,image)
    }

    return (
        <div>
            <form onSubmit={handleReviewSubmit} >
                <input required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 my-3" placeholder="Your Review" type="text" name="testimonial" id="review" />
                <input min="0" max="5" step='any' required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 my-3" placeholder="Ratting" type="number" name="ratting" id="ratting" />
                <input className="w-full px-3 py-2 border border-gray-300 rounded btn btn-outline"  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReviewForm;