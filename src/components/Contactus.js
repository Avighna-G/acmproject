import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contactus.css';
function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bptjnsl', 'template_ribf58f', form.current, 'Ol8gkNhvS7n8Azo-0')
      .then((result) => {
          console.log(result.text);
          alert("Mail Sent");
      }, (error) => {
          console.log(error.text);
          alert("There's a problem with this service right now, sorry for your inconvenince");
      });
  };

  return (
    <div>
      <h1 className='text- font-bold mt-4 lg:text-[2rem]'>Contact us</h1>     
        <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center lg:text-[1.5rem]'>
          <div className='w-3/4 lg:w-1/2  mt-3 rounded-lg'>
            <div className='text-start lg:flex lg:flex-row lg:justify-between'>
              <div className=''>
                <label htmlFor='name' className='block mt-3'>Name:</label>
                <input required id='name' name='name' type='text' placeholder='Enter your name' className='w-full focus:outline-none p-1 lg:w-[15rem] xl:w-[18rem] 2xl:w-[22rem]'/>
              </div>
              <div className=''>
                <label htmlFor='email' className='block mt-3'>Email:</label>
                <input required id='email' name='email' type='email' placeholder='Enter your mail' className='w-full focus:outline-none p-1 lg:w-[15rem] xl:w-[18rem] 2xl:w-[22rem]'/>
              </div>      
            </div>
            <div className='text-start'>
              <label htmlFor='message' className='block mt-3' >Message:</label>
              <textarea required id='message' name='message' placeholder='Enter your message' className='w-full focus:outline-none p-1 sm:h-[9rem] lg:h-[9rem]'/>
              <button  className='bg-[#87ceeb] py-2 px-5 rounded-[0.2rem] my-3 block mx-auto text-center' value='Send' type='submit'>Submit</button>
            </div>
          </div>
        </form>    
    </div>
    
  );
}

export default Contactus;