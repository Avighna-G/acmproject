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
  const pathname = location.pathname;

const yearRange = pathname && pathname.match(/\d{2}-\d{2}/);

const formattedYearRange = yearRange
  ? yearRange[0].split("-").map(year => `20${year}`).join("-")
  : "2022-2023";

  return (
    <>
    <div className='event-tabs'>
      <div className='upcmng-tab'>
        <div className='upcmng-btn' onClick={()=>navigate("upcoming")}>
          Upcoming Events
        </div>
      </div>
      <div className='current-tab'>
      <div className='current-btn' onClick={()=>navigate("events22-23")}>
          Current year
        </div>

      </div>
      <div className='dropdown-tab'>
            <div className='dropdown text-white'>
              <div className='dropdown-btn' onClick={e =>
                  {
                  setIsActive(!isActive);
                  }}> <img src={require("../imagProps/timeline.png")} style={{width:'50px', height:'50px', paddingRight:'10px'}} />   { formattedYearRange} 
                  <span className="pl-[12px]">
                    <IoMdArrowDropdown size={25}/>
                  </span>
              </div>
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
    </div>


        <Outlet/>
      
  </>
  )
}

export default Events