import React from 'react'
import Modal from 'react-modal'
import { IoClose } from 'react-icons/io5'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Carousel } from 'react-responsive-carousel';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/events.css'
import { ReactComponent as WorkIcon } from "./work.svg";
import {FcCalendar, FcReading} from 'react-icons/fc';
import { useState } from 'react';
function Events2223(props) {
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
      <h1 className='text-stone-50 pt-[2em]'>List of Events ({props.props.year}) </h1>
      <VerticalTimeline>
        {
          props.props.eventsjson.map((item,ind)=>{
            return(<VerticalTimelineElement
              icon={<WorkIcon/>}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: 'white' }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle"><FcCalendar style={{fontSize:'30px',marginRight:'0.3rem'}}/>{item.date}</h4>
              <h4 className="vertical-timeline-element-subtitle"><FcReading style={{fontSize:'30px',marginRight:'0.3rem'}}/>{item.for}</h4>
              <p className='vertical-timeline-element-p'>{item.description.length<150 && item.Content } {item.description.length>150 &&   <div> {item.description.slice(0,150).trimEnd()}.....<span className="read-more"> <button className='btn btn-glow' onClick={() => {setCurrEle(item);
                                                                                                                                                                                                                    openModal(); }}>View More</button></span></div>}</p>
            </VerticalTimelineElement>);
          })
        }
      </VerticalTimeline>
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
            
            <h2 style={{textAlign:'center', fontWeight:'700', fontSize:'1.5em', color:'rgb(7, 7, 86)', margin:'10px'}}>{currEle.title}</h2>
            <Carousel id="eventscar" autoPlay={true} infiniteLoop={true} showThumbs={false} swipeable={true}>
                {currEle && currEle.imgPaths && currEle.imgPaths.length>0 &&
                   currEle.imgPaths.map((image,imgIdx)=>{
                    return <div>
                    <img src={require(`../imagProps/events5/${image}`)} style={{height:'50vh',width:'auto'}}/>
                   
                </div>
                   })

                }
            </Carousel>
            <p style={{marginTop:'20px'}}>{currEle.description}</p>
            </div>
          </div>
  </Modal>
    </div>
  )
}

export default Events2223