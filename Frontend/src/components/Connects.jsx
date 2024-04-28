import React from 'react'

function Connects() {
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px] pl-24">
                    <form method="dialog">
                        <h3 className="font-bold text-2xl">Contact Us</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type="text" placeholder='Enter your Name' className='w-9/12 px-3 py-1 border rounded-md outline-none bg-white' />
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-9/12 px-3 py-1 border rounded-md outline-none bg-white' />
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <textarea cols="50" rows="4" className='w-9/12 px-3 py-1 border rounded-md outline-none bg-white text-black' placeholder='Type your message'></textarea>
                        </div>

                        <div>
                            <button className='bg-blue-500 rounded-md px-3 py-1 mt-2'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Connects
