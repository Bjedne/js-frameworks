import { Link } from "react-router-dom"

export function Checkout() {
    return (
        <div className="flex flex-col justify-items-center gap-4 w-screen">
            <h1>Purchase successful</h1>
            <h1>Order delivery is on the way</h1>
            <h1>Check your left pocket</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <button>
                <Link to="/">Return to home</Link>
            </button>
        </div>
    )
}