import React from 'react'
import ProfileCard from './ProfileCard';
import {GrMail} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import '../styles/teamlist.css'
function TeamList({teamArray,teamPath}) {
  return (
    <div>
        <div className='body'>
        {teamArray.map((item,ind)=>{
            return(<div key={ind} className='card'>
                    <ProfileCard imgPath={item.ImgPath} Name={item.Name} Desig={item.Position} SMHandles={item.SocialHandles} teamPath={teamPath}/>
                </div>
                );
        })}
        </div>
    </div>
  )
}

export default TeamList