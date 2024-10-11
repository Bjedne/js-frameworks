import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Product() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams(); // Fetch the ID from the URL parameters

    useEffect(() => {
        async function getData(url) {
            try {
                setIsLoading(true);
                setIsError(false); // Reset error state when fetching begins

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch the data"); // Handle non-2xx responses
                }
                const json = await response.json();

                setData(json.data); // Assuming the API response directly contains the product data
            } catch (error) {
                console.error(error);
                setIsError(true); // Set the error state if there's an issue
            } finally {
                setIsLoading(false); // Always stop the loading state
            }
        }
        getData(`https://v2.api.noroff.dev/online-shop/${id}`); // Fetch data with the product ID
    }, [id]);

    // Loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Error state
    if (isError) {
        return <div>Error loading product. Please try again later.</div>;
    }

    // No data yet (in case of unexpected null values)
    if (!data) {
        return <div>No product data available.</div>;
    }

    // Product details display
    return (
        <div className="product-details text-center" id={data.id}>
            <img src={data.image.url} alt={data.title} className="size-60" />
            <div><strong>{data.title}</strong> </div>
            <div>{data.description}</div>
            <div>${data.price}</div>
        </div>
    );
}
