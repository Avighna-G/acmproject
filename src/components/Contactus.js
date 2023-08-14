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
      });
  };

  return (
    <>
    <h1 className='contact-h1'>Conatct Us</h1>
    <div className='container'>
      <form ref={form} onSubmit={sendEmail}  className='form'>
      <div className='row'>
        <div className='col-md-6'>
            <label className='form-label email' htmlFor='email'>Email</label>
            <input className='form-control' type="email" name="email" id="email"/>
        </div>
        <div className='col-md-6'>
            <label className='form-label name' htmlFor='name'>Name</label>
            <input className='form-control' type="text" name="name" id="name" />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
            <label className='form-label message d-block' htmlFor='messaga'>Message</label>
            <textarea className='d-block w-100 textarea' name="message" id="message"/>
        </div>  
      </div>
        <input className='form-control bg-primary mt-3' type="submit" value="Send"/>
      </form>
    </div>

    </>
    
  );
}

export default Contactus;