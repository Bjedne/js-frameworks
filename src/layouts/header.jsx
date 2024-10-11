import { Link } from "react-router-dom"

export function Header() {
    return (
        <header>
            <div className="flex flex-row justify-around mt-7">
                <button className="group md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <ul className="bg-gray-500 w-2/4 h-screen z-5 absolute top-0 overflow-hidden flex flex-col pl-5 pt-3 inter-bold text-white text-2xl gap-3 -left-full duration-150 group-focus:left-0">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ml-5 mt-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </button>

                <h1 className="">
                 ReactMart
                </h1>

                <nav className="mb-4 hidden md:flex">
                    <ul className="flex flex-row gap-4">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/product/1">Product</Link>
                        </li>
                    </ul>
                </nav>

                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 relative">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <p className="absolute -top-2 -right-3 z-10 rounded-full bg-red-500 px-2 text-white hidden">0</p>
                </div>
            </div>
            <hr className="h-px my-6 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        </header>
    )
}