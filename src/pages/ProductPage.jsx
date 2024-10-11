import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Star } from "../components/icons";

export function Product() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        async function getData(url) {
            try {
                setIsLoading(true);
                setIsError(false); 

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch the data"); 
                }
                const json = await response.json();

                setData(json.data);
            } catch (error) {
                console.error(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData(`https://v2.api.noroff.dev/online-shop/${id}`);
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading product. Please try again later.</div>;
    }

    if (!data) {
        return <div>No product data available.</div>;
    }

    return (
        <div className="product-details text-center" id={data.id}>
            <img src={data.image.url} alt={data.title} className="size-60" />
            <div><strong>{data.title}</strong> </div>
            <div>{data.description}</div>
            <div>${data.price}</div>
            <div>
                <div className="flex justify-center">
                    <h1 className="me-2">Rating:</h1>
                    <Star />
                    {data.rating}
                </div>

                <div className="reviews">
                    <h3>Reviews:</h3>
                    {data.reviews && data.reviews.length > 0 ? (
                        data.reviews.map((review) => (
                            <div key={review.id} className="review mb-4 border p-2 rounded">
                                <div><strong>Username:</strong> {review.username}</div>
                                <div className="flex"><strong>Rating:</strong> <Star /> {review.rating}</div>
                                <div><strong>Review:</strong> {review.description}</div>
                            </div>
                        ))
                    ) : (
                        <p>No reviews available for this product.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
