import React from 'react'
import '../styles/memberships.css'
import Modal from 'react-modal'
import Testimonials from './Testimonials'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { Testimonials2223 } from '../jsonfiles/Testimonials22-23'
function Memberships() {
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
    <div>
    <div className='mems-flex'>
    <div className="w-[90%] bg-white bg-opacity-85 m-auto p-2 mt-[50px] mx-auto hello1">
    <div className="two1">
  <h1>Local Membership
    <span>Tier - 1</span>
  </h1>
</div>

    <div>
        <p className='text-left mt-[40px]'>
        The local membership of our ACM student chapter embodies a vibrant community of technology enthusiasts, educators, and dedicated professionals. Our vision is to foster an environment where individuals from diverse backgrounds unite to explore and engage with the ever-evolving world of technology. ACM has consistently led the charge in disseminating knowledge about cutting-edge technologies, offering educational opportunities, and inspiring people to embark on new technological adventures.
        <br/><br/>Beyond its role as a platform for technical learning and skill-sharing, ACM is renowned for its ability to instill teamwork and dedication in its members. We empower individuals to reach new heights in their professional journeys. With a global membership exceeding 100,000, our community continues to flourish with each passing year. As a chapter with a storied history, we hold a prominent place within the walls of VNRVJIET.
        <br/><br/>Our dedicated team works tirelessly to enhance awareness and broaden the horizons of technology. We are committed to making the wonders of technology accessible to an ever-expanding audience, driving innovation and sharing our passion with the world. Join us on this remarkable journey as we collectively shape the future of technology.
        </p>
        <a className="button-15" href="https://easypay.axisbank.co.in/">Register Now!</a>
    </div>
   </div>
   <div className="w-[90%] bg-white bg-opacity-85 m-auto p-2 mt-[50px] mx-auto hello1">
    <div className="two1">
  <h1>International Membership
    <span>Tier - 2</span>
  </h1>
</div>

    <div>
        <p className='text-left mt-[40px]'>
        ACM -Association for Computing Machinery, offers a vibrant and enriching student membership program designed to inspire and empower the next generation of computer scientists and IT professionals. As a global leader in advancing the field of computing, ACM provides a unique platform for students worldwide to embark on their journey into the exciting world of technology.
        <br/><br/>Student members of ACM gain access to a wealth of valuable resources, including cutting-edge research publications, industry insights, and networking opportunities with experts in the field. ACM's commitment to education and professional development is evident through its diverse array of Special Interest Groups (SIGs), which cater to a wide range of interests, from artificial intelligence to human-computer interaction.
        <br/><br/>Moreover, ACM's student chapters, spread across universities and colleges, foster a sense of community and collaboration among like-minded individuals. These chapters organize events, hackathons, and lectures, offering students the chance to connect, learn, and innovate. ACM's student memberships, underpinned by its global reach and rich tradition of excellence, open doors to a world of possibilities for aspiring computer scientists and IT enthusiasts.
        </p>
        <a className="button-15" href="https://india.acm.org/membership">Visit Site</a>
    </div>
   </div>
</div>
<h1 className='testhead'>Let Them Speak For Us!</h1>
<div className='text-stone-50 pt-[20px] pb-[30px]'>
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
</div>
  )
}

export default Memberships