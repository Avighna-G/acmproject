import React from 'react';
import '../styles/testimonials.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FacultyTestimonials } from '../jsonfiles/FacultyTests';
function FacultyTest() {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  };

  return (
    <div className='tests'>
      <OwlCarousel id='customer-testimonoals' className='owl-carousel owl-theme' {...options}>
        {FacultyTestimonials.map((item, index) => (
          <div key={index} className='item'>
            <figure className='snip1192'>
              <blockquote className='text-black'>
                {item.Content}
              </blockquote>
              <div className='author'>
                <img className='img-circle' src={require(`../imagProps/faculty/${item.imgPath}`)} alt='sq-sample1' />
                <h5>
                  {item.Name} <span> {item.Desig}</span>
                </h5>
              </div>
            </figure>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default FacultyTest;