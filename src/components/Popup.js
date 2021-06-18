import React from 'react'
import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='fixed  top-28  bottom-40  md:w-56  md:w-80 lg:w-96 '>
            <div className='relative bg-gray-200 p-8 rounded-md'>
                <div>
                    <form>
                        <div className='grid space-around mb-3'>
                            <div>
                                <input type='text' placeholder='Full name' className='w-full mb-3 outline-none px-3 py-3' />
                            </div>
                            <div>
                                <input type='email' placeholder='Email' className='outline-none w-full px-3 py-3' />
                            </div>
                        </div>
                        <div className='gird space-between mb-3'>
                            <div>
                                <input type='text' placeholder='Phone Number' className='w-full mb-3 outline-none px-3 py-3' />
                            </div>
                            <div>
                                <input type='text' placeholder='Number of Votes' className='w-full px-3 py-3 ' />
                            </div>
                        </div>
                        <div className='w-full mb-3 '>
                            <select name="" id="" className="w-full px-3 py-3">
                                <option value="" >Payment Options</option>
                                <option value="" >Paystack</option>
                                <option value="" >Stripe</option>
                                <option value="">Paypal</option>
                            </select>
                        </div>
                        <div className='flex   items-center '>
                            <div className='mr-20 md:mr-22  lg:mr-40'>
                                <button className='bg-blue-400  text-white px-4 py-2.5 rounded-md md:px-8' >Submit</button>
                            </div>
                            <div className=''>
                                <div className='close-btn outline-none  bg-white text-center   justify-center  rounded-full  cursor-pointer h-12 w-12 text-4xl text-blue-400  ' onClick={() => props.setTrigger(false)}>&#xD7;</div>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    ) : "";
}

export default Popup
