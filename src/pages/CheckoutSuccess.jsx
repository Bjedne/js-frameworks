import { Link } from "react-router-dom"

export function CheckoutSuccess() {
    return (
        <div className="flex flex-col text-center gap-4 w-screen">
            <h1>Purchase successful</h1>
            <h1>Order delivery is on the way</h1>
            <h1>Check your left pocket</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <button className="bg-teal-200 p-1 rounded-lg w-1/2 m-auto">
                <Link to="/">Return to store</Link>
            </button>
        </div>
    )
}