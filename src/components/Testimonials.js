import React from "react";
import { ImQuotesLeft , ImQuotesRight } from 'react-icons/im'
import { testimonials } from "../jsonfiles/Membershiptypes";

function Testimonies() {

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center my-5">Testimonials</h1>
            <div className="flex flex-col gap-6 lg:flex-row">
                {testimonials.map((item) => {
                    return (
                        <div key={item.id} className="border border-gray-700 p-3 mb-5 h-fit lg:w-1/2">
                            <ImQuotesLeft className="inline"/> <p className="mx-2 inline">{item.testimony}</p><ImQuotesRight className="inline"/>
                            <img src={item.img} className="block mx-auto rounded-full w-1/4 h-1/4 mt-3 md:w-1/12 md:h-1/12 lg:w-1/4 lg:h-1/4 xl:w-1/6 xl:h-1/6"/>
                            <h1 className="mt-3 font-semibold">{item.name}</h1>
                            <p>{item.role}</p>                            
                        </div>
                    )
                })}
            </div>
        </div>    
    );
}

export default Testimonies;