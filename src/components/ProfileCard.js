import React from 'react'
import '../styles/profilecard.css'
import {GrMail} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
function ProfileCard({imgPath, Name, Desig, SMHandles,teamPath}) {
  return (
    <div className="card" >
        <img src={require(`../imagProps/${teamPath}/${imgPath}`)} className="Avatar" style={{width:'100%'}}/>
        {SMHandles && <div className="overlay">
        <a href={SMHandles[0]} className="icon">
          <GrMail />
        </a>
        <a href={SMHandles[1]} className="icon">
          <BsLinkedin />
        </a>
      </div>}
        <div className='middle'>
        
        </div>
        <div className="container">
            <h4><b>{Name}</b></h4>
            <p>{Desig}</p>
        </div>
    </div>
  )
}

export default ProfileCard