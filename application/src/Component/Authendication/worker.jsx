import authen from "../../Assets/Image/authen.jpeg";
export default function Re() {
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="h-screen w-full">
                <img src={authen} alt="" className="h-full w-full object-full" />
            </div>
            <div className="absolute w-96 bg-white rounded-lg shadow-lg p-8 bg-opacity-[50%] backdrop-blur-sm">
                <h1 className="text-center text-5xl font-extralight">Register</h1>
                <form method="post" className="space-y-6 mt-10">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
                        <div className="flex items-center mt-2 border rounded-md shadow-sm overflow-hidden">
                            <div className="p-2 bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4A5568">
                                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                className="flex-1 p-2 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium">Email Address</label>
                        <div className="flex items-center mt-2 border rounded-md shadow-sm overflow-hidden">
                            <div className="p-2 bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4A5568"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            </div>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your email address"
                                className="flex-1 p-2 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                        <div className="flex items-center mt-2 border rounded-md shadow-sm overflow-hidden">
                            <div className="p-2 bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4A5568">
                                    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="flex-1 p-2 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Register"
                            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            readOnly
                        />
                    </div>
                    <div className="mt-4 text-center text-gray-600">
                        <p className="mt-2">or</p>
                        <p>
                            Already registered? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}