import React from 'react'
import '../styles/home.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Cover() {
    const props=[
    {
        imgPath:'carousel3.jpg',
        desc:'Winter Coding Contest 2.0',
    },
    {
        imgPath:'carousel2.jpg',
        desc:'Webathon'
    },
    {
        imgPath:'carousel1.jpeg',
        desc:'Winter Coding Contest 2.0'
    },
    {
        imgPath:'carousel5.jpg',
        desc:'Webathon'
    },
    {
        imgPath:'carousel6.jpeg',
        desc:'Webathon'
    }
    ]
// ...
return (
    <div className='home-cover'>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false} showStatus={false} swipeable={true}>
        {props.map((content, idx) => (
          <div key={idx}>
            <div className='imagecover'>
              <img src={require(`../imagProps/carousel/${content.imgPath}`)} style={{ height: '90vh', width: '100vw' }} />
              <div className="bottom-left">{content.desc}</div>
              <div className='image-overlay'></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
  // ...
  
}

export default Cover