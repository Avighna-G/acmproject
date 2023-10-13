import React from 'react'
import ProfileCard from './ProfileCard'
import { facultyDets } from '../jsonfiles/FacultyDetails'
function FacultyCords() {
  return (
    <div>
        <h1 className='text-white'>
            Faculty Coordinators
        </h1>
  
        <div className='flex flex-row items-center gap-14 justify-center'>
            {
                facultyDets.map((item,key)=>{
                    return(<div>
                            <ProfileCard imgPath={item.ImgPath} Name={item.Name} Desig={item.Position} teamPath="faculty" />
                        </div>
                        );
                })
            }
        
        </div>
      </div>

  )
}

export default FacultyCords