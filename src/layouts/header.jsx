import { Link } from "react-router-dom"
import { CartIcon } from "../components/icons"


export function Header() {    
    return (
        <header>
            <div className="flex justify-around mt-7 items-center lg:items-end">
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

                <img src="/images/reactMartLogo.png" className="w-1/2 md:w-2/5 lg:w-1/4 shrink"></img>

                <nav className="mb-4 hidden md:flex">
                    <ul className="flex flex-row gap-4 text-xl">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <div className="relative">
                    <CartIcon />
                </div>
            </div>
            <hr className="h-px mt-2 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        </header>
    )
}