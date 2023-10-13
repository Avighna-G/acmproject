import React from 'react'
import Modal from 'react-modal'
import { voldet } from '../jsonfiles/volunteerList'
import '../styles/team.css'
import { Testimonials2223 } from '../jsonfiles/Testimonials22-23'
import Testimonials from './Testimonials'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import TeamsDisplay from './TeamsDisplay'
import { CoreTeam5, TeamHeads5 } from '../jsonfiles/CoreTeams'
import TeamList from './TeamList'
import FacultyCords from './FacultyCords'
import { facultyDets } from '../jsonfiles/FacultyDetails'
function Team() {
  function getImagePath(currEle) {
    return currEle && Object.keys(currEle).length > 0
      ? require(`D:/acm web/acm/src/imagProps/team5/${currEle.imgPath}`)
      : null;
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -60%)',
      backgroundColor: 'white',
      zIndex: 999,
      maxWidth: '70%', 
      maxHeight: '80vh', 
      overflowY: 'auto',
      marginTop:'10vh'
    },
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 998
    }
  };
  const [modalIsOpen, setIsOpen]=useState(false);
  const [currEle,setCurrEle]=useState({})
  function openModal(){
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  return (
    < div id="teamm">
    <TeamsDisplay/>
    <div className='teamlist'>
      <div className='title'>      
        <h1>Core Team</h1>
      </div>
      <div className='teamgrid'>
      <TeamList teamArray={CoreTeam5} teamPath="team5"/>
      </div>
    </div>
    <div className='teamlist'>
      <div className='title'>      
        <h1>Team Heads</h1>
      </div>
      <div className='teamgrid'>
        <TeamList teamArray={TeamHeads5} teamPath="team5"/>
      </div>
    </div>
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
  <div className='text-stone-50 pt-[65px] pb-[30px]'>
        <Testimonials testimonials={Testimonials2223} yearPath="team5" openModal={openModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} currEle={currEle} setCurrEle={setCurrEle} />
  </div>
  <Modal isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
  >
          <div className='modal-content'>
            <div>
            <button className='close-button' onClick={closeModal}><IoClose/></button>
            </div>
            <div>
            <p>"{currEle.Content}"</p>
            </div>
            <div className='author'>
              <div className='author-img'>
                {getImagePath(currEle) && getImagePath(currEle).length >0 && <img src={getImagePath(currEle)} alt="sq-sample1" />}
              </div>
              <div className='author-desc'>
                <p style={{fontWeight:'600'}}>{currEle.Name}</p>
                <p>{currEle.Desig}</p>
              </div>
            </div>
          </div>
  </Modal>
  {/*<FacultyCords/>*/}
    </div>
  )
}

export default Team