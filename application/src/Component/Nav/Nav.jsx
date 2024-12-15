import { useState } from "react";

export default function Nav() {
    const [hidden, setHidden] = useState(false);

    const reaction = () => {
        setHidden(!hidden);
    };

    return (
        <nav
            className={`fixed top-0 left-0 h-screen w-[20%] bg-blue-600 z-10000 duration-[3s] ${
                hidden ? "-ml-[300px]" : "ml-[0px]"
            }`}
        >
            <button
                onClick={reaction}
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
    );
}