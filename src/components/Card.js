import React from 'react';
import Popup from './Popup';
import { useState } from 'react';



const contestantData = [
    {
        card: {
            name: 'John Doe',
            Image: './components/src/assets/img/4b4a355442cc939c1849fa97120740ea.jpg',
            button: 'Vote'
        },

    }


]
function Card() {

    const [buttonPopup, setButtonPopup] = useState(false)
    return (

        <ul className='     lg:px-4 '> {contestantData.map((data, index) => (
            <li key={index} className='h-full  mb-10 text-center  rounded-md  bg-gray-100   '>

                <div className='px-3 sm:px-10 md:px-20'>
                    <div className=' h-80  rounded  '>
                        <div> <p className='text-center text-4xl py-4'> {data.card.name}</p></div>
                        <div className='h-48 w-48 bg-green-300 rounded-full mx-auto border-8 shadow-md'>
                            <img src={data.card.Image} alt="" />
                        </div>
                        <div className=' text-center mt-10'   > <button className='btn text-center bg-blue-400 px-8 py-2 rounded-md text-xl text-white' onClick={() => setButtonPopup(true)}>{data.card.button}</button></div>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>

                    </div>

                    <div className='mt-10 border-t p-4 w-full'>
                        <div className='bg-blue-200 h-2 w-full rounded'>
                            <div className='bg-blue-400 h-2 w-2/5 rounded'></div>
                        </div>
                    </div>
                </div>




                <div className='flex text-center justify-center mt-3 item-center'>
                    <p className='mr-4 text-blue-500 font-bold text-lg'>47%</p>
                    <p className=' font-bold text-lg text-blue-500'>2/7</p>
                </div>

            </li>
        ))}
        </ul>


    )
}

export default Card