import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    // alert("Logged in successful")
                    toast.success("Logged in successfully")
                    document.getElementById("my_modal_3").close()
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data));
                    }, 1000)
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    // alert("Error: " + err.response.data.message);
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(()=>{},2000);
                }
            })
    }

    return (
        <div className="">
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none bg-white' {...register("email", { required: true })} />
                            {errors.email && <span className="text-sm text-red-500"><br />This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none bg-white' {...register("password", { required: true })} />
                            {errors.password && <span className="text-sm text-red-500"><br />This field is required</span>}
                        </div>


                        <div className='flex justify-around mt-6'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered?
                                <Link to={"/signup"} className='underline text-blue-500 cursor-pointer'>
                                    Signup
                                </Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

// function Login() {
//     return (
//         <div className="">
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box bg-white">
//                     <form method="dialog">
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                     </form>
//                     <h3 className="font-bold text-lg">Login</h3>
//                     <div className='pt-4'>
//                         <div className='pb-7'>
//                             <h4 className='pb-1'>Email</h4>
//                             <input type="email" className='rounded-md w-80 bg-gray-200 pl-2' placeholder='Email' />
//                         </div>
//                         <div>
//                             <h4 className='pb-1'>Password</h4>
//                             <input type="password" className='rounded-md w-80 bg-sky-100 pl-2' placeholder='Password' />
//                         </div>

//                     </div>
//                     <div className='flex items-center'>
//                         <button className='rounded-md bg-pink-500 px-3 py-1 mt-4 ml-14'>Login</button>
//                         <div className='flex mt-5 pl-28'>
//                             <p>Not registered?
//                                 <Link to="/signup" className='underline text-blue-500'>
//                                     Signup
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </dialog>
//         </div>
//     )
// }

export default Login
