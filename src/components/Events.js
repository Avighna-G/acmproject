import React, { useState } from 'react'
import "../styles/dropdown.css";
import DropDown from './DropDown'
import { Link, useNavigate , Outlet, useLocation, useMatch, useParams} from 'react-router-dom'
import  { IoMdArrowDropdown } from "react-icons/io";
import { Doptions } from "../jsonfiles/NavItems";
function Events() {
  let location = useLocation();
  const [selected, setSelected] = useState(location.state);
  const [isActive, setIsActive]=useState(false);
  const navigate = useNavigate();
  return (
    <>
    
    <div>
    <div className="text-white">
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={e => {
                                                setIsActive(!isActive);
                                                
                                            }}> {location.pathname} <span className="pl-[12px]"><IoMdArrowDropdown size={25}/></span></div>
    { isActive && (
                <div className='dropdown-content'>
                    {
                        Doptions.map(option=>(
                            <div className='dropdown-item' onClick={(e) => {
                                                                        console.log(location)
                                                                        navigate(option.path)
                                                                        setIsActive(!isActive);
                                                                        setSelected(option.title);
                                                                        }}>
                            {option.year}
                            </div>

                        ))
                    }
               
    
            </div>
    )}

    </div>
    </div>
    
    <Outlet/>
    </div>
    </>
  )
}

export default Events