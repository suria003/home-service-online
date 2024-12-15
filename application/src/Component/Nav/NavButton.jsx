import { useState } from "react";

export default function NavButton() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <div className="relative top-5 left-5 w-fit h-fit flex justify-center items-center">
            <div className="relative h-full w-full flex justify-center items-center">
                <button
                    onClick={toggleNav}
                    className="h-[50px] w-[50px] p-0 flex justify-center items-center rounded-md bg-transparent border-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32px"
                        viewBox="0 -960 960 960"
                        width="32px"
                        className="text-[#fff] hover:text-[#fff]"
                    >
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </button>
            </div>
            <nav
                className={`fixed top-0 left-0 h-screen w-[20%] bg-blue-600 z-10000 duration-[3s] transform ${
                    isNavVisible ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button
                    onClick={toggleNav}
                    className="absolute top-5 right-5 h-[50px] w-[50px] p-0 flex justify-center items-center rounded-md bg-transparent border-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32px"
                        viewBox="0 -960 960 960"
                        width="32px"
                        fill="#FFFFFF"
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </button>
            </nav>
        </div>
    );
}