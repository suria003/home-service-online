export default function ProfileNav() {
    return (
        <nav className="fixed top-5 right-4 w-[20%] h-auto p-[10] flex flex-row justify-evenly items-center">
            <div className="relative p-3 bg-[#f5f5f5] rounded-full cursor-pointer">
                <div className="h-[7px] w-[7px] bg-red-700 rounded-full absolute top-[10%] right-[10%] animate-ping"></div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>
            </div>
            <div className="bg-[#ffffff5a] px-6 py-3 rounded-sm font-bold flex flex-row justify-center items-center gap-4 cursor-pointer hover:bg-[#f5f5f5] duration-1000" >Logout<button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M806-440H320v-80h486l-62-62 56-58 160 160-160 160-56-58 62-62ZM600-600v-160H200v560h400v-160h80v160q0 33-23.5 56.5T600-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h400q33 0 56.5 23.5T680-760v160h-80Z" /></svg></button></div>
        </nav>
    );
}