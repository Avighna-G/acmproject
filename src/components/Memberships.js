import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../styles/Memberships.css';
function Memberships() {
  const arr=[1,2,3];
  arr.length=3;
  return(
      <>
        <div className='membership'>
              <div className='title text-black'>
                  <h1>Memberships</h1>
              </div>
              <p className="membershipdesc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              
              </p>
              <div className='membershiptypes'>
                  <div className="membertype">
                      <h5>Membership Type-1</h5>
                      <p className="typedesc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  
                      </p>
                      <button><Link to="/contactUs" className='text-decoration-none text-white'><b>Contact Us</b></Link></button>
                      
                      
                  </div>
                  <div className="membertype">
                      <h5>Membership Type-2</h5>
                      <p className="typedesc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  
                      </p>
                          <button><b>Register</b></button>
                  </div>
              </div>
        </div>
        <div  className="testimony-h1" style={{height:"90px"}}>
            <h1>Testimonials</h1>
        </div>
        <div className='testimonials'>
        {
            arr.map(()=>{
                return (
                    <>
                        <Card className='testimony'>
                                <Card.Body>
                                    {/* <img src={img1} alt='A Person'/> */}
                                    <h3>Something</h3>
                                    <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </Card.Body>
                            </Card> 
                      
                    </>
                )
            })
        }
        </div>
      </>

  );
}

export default Memberships