import React from 'react'
import { membershiptypes } from '../jsonfiles/Membershiptypes';
import Testimonies from './Testimonials';
import { Link } from 'react-router-dom';
// import '../styles/Memberships.css';
function Memberships() {
  const arr=[1,2,3];
  arr.length=3;
  return(
        <div className='px-3'>
            <h1 className='text-3xl font-bold text-center my-5'> Memberships</h1>
            <div className='flex flex-col md:flex-row md:gap-[1rem] xl:justify-around'>
                {
                    membershiptypes.map((item)=>{
                        return(
                            <div key={item.id} className='mb-4 border border-gray-700 px-3 xl:w-1/3'>
                                <h1 className='text-center text-black font-bold mt-2'>{item.title}</h1>
                                <p className='text-center text-black mt-2'>{item.description}</p>
                                <button className='bg-[#87ceeb] py-2 px-4 rounded-[0.2rem] my-3'> <Link to={item.linkto}>Register here</Link> </button>
                            </div>
                        )
                    })
                }
            </div>
            <Testimonies/>
        </div>
  );
}

export default Memberships