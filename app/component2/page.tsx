// "use client"
// import React, { useState } from 'react'
// import { useRouter } from 'next/router';
// export default function component2() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const router = useRouter();
//     const handleSignIn = (e: any) => {
//         e.preventDefault();
//         if (username == "username" && password == "1234") {
//             router.push("/cardTable")
//         }
//     }
//     return (
//         <div className="w-[100%] h-[100vh] flex justify-center items-center bg-slate-200">
//             {/* <ToastContainer /> */}
//             <div className="w-[100%] flex justify-center items-center">
//                 <div className="w-[400px] h-[400px] border-2 flex flex-col items-center p-[20px] rounded-[10px] gap-[30px] bg-white">
//                     <h1 className="text-[30px] font-[600]">Login</h1>
//                     <form
//                         className="flex flex-col items-start w-[90%] gap-[10px]"
//                         onSubmit={handleSignIn} >
//                         <label htmlFor="username">Username</label>
//                         <input required
//                             type="text"
//                             className="w-[100%] px-[10px] py-[10px] border-2 rounded-md outline-none"
//                             id="username"
//                             placeholder="Username"
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                         <div className="w-[100%] relative">
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 required
//                                 // type={type ? "text" : "password"}
//                                 className="mt-[10px] w-[100%] px-[10px] py-[10px] border-2 rounded-md outline-none"
//                                 id="password"
//                                 placeholder="Password"
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             {/* <FaRegEyeSlash
//                                 className={`absolute right-[15px] top-[48px] text-[20px] cursor-pointer ${type ? "hidden" : "block"
//                                     }`}
//                                 onClick={() => setType((prev) => !prev)}
//                             />
//                             <FaRegEye
//                                 className={`absolute right-[15px] top-[48px] text-[20px] cursor-pointer ${type ? "block" : "hidden"
//                                     }`}
//                                 onClick={() => setType((prev) => !prev)}
//                             /> */}
//                         </div>
//                         <button type="submit" className="self-center px-[20px] py-[10px] bg-purple-700 rounded-lg text-white">
//                             login
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Component2() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === "username" && password === "1234") {
            router.push("/component2/cardTable");
        } else {
            alert("username ni paroli 'username' va password ni paroli 'password'")
        }
    }

    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center bg-slate-200">
            <div className="w-[100%] flex justify-center items-center">
                <div className="w-[400px] h-[400px] border-2 flex flex-col items-center p-[20px] rounded-[10px] gap-[30px] bg-white">
                    <h1 className="text-[30px] font-[600]">Login</h1>
                    <form
                        className="flex flex-col items-start w-[90%] gap-[10px]"
                        onSubmit={handleSignIn} >
                        <label htmlFor="username">Username</label>
                        <input required
                            type="text"
                            className="w-[100%] px-[10px] py-[10px] border-2 rounded-md outline-none"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="w-[100%] relative">
                            <label htmlFor="password">Password</label>
                            <input
                                required
                                type="password"
                                className="mt-[10px] w-[100%] px-[10px] py-[10px] border-2 rounded-md outline-none"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="self-center px-[20px] py-[10px] bg-purple-700 rounded-lg text-white">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
