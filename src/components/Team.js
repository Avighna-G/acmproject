import React from 'react'
import { voldet } from '../jsonfiles/volunteerList'
import '../styles/team.css'
import { Testimonials2223 } from '../jsonfiles/Testimonials22-23'
import Testimonials from './Testimonials'
function Team() {
  return (
    <>
    <div className={"text-center mx-auto left-0 text-stone-50  pt-[10vh] team"}>Team</div>
    <div className='table'>
      <div className='table__header'>
        <h1>
          Volunteers
        </h1>
      </div>
      <div className='table__body'>
      <table>
      <thead>
          <tr >
            <th>Name</th>
            <th>Team</th>
            <th>Mail ID</th>
          </tr>
      </thead>
      <tbody>
        
        {
          voldet.map((item,ind)=><tr key={ind}><td><div className='named'>
            <img src={require(`../imagProps/volunteers/${item.imgPath}`)}/>{item.Name}
            </div>
            </td>
                                    <td>{item.Team}</td>  
                                    <td><a href="mailto:${item.Mail}">{item.Mail}</a></td>
                              </tr>)
        }
        </tbody>
        </table>
      </div>

  </div>
  <div className='text-stone-50 pt-[225px] pb-[300px]'>
        <Testimonials testimonials={Testimonials2223} yearPath="team5"/>
      </div>
    </>
  )
}

export default Team