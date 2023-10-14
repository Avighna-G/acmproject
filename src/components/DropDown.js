import "../styles/dropdown.css";
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { IoMdArrowDropdown } from "react-icons/io";
import { Doptions } from "../jsonfiles/NavItems"; 
function DropDown({selected,setSelected}) {
    const [isActive, setIsActive]=useState(false);
    const navigate = useNavigate();
  return (
    <div className="text-white">
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={e => {
                                                setIsActive(!isActive);
                                                
                                            }}>  {selected} <span className="pl-[12px]"><IoMdArrowDropdown size={25}/></span></div>
    { isActive && (
                <div className='dropdown-content'>
                    {
                        Doptions.map(option=>(
                            <div className='dropdown-item' onClick={(e) => {
                                                                        navigate(option.path)
                                                                        setIsActive(!isActive);
                                                                        setSelected(option.title);}}>
                            {option.year}
                            </div>

                        ))
                    }
               
    
            </div>
    )}

    </div>
    </div>
  )
}

export default DropDown