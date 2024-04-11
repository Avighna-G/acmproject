import React, { useEffect } from 'react';

const RazorpayPaymentButton = () => {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById('rzp_payment_form');

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.async = true;
      script.dataset.payment_button_id = 'pl_MravYPWrjVGfnI'; // Replace with your payment_button_id
      rzpPaymentForm.appendChild(script);
    }
  }, []);

  return (
    <div className="RazorpayPaymentButton">
      <form id="rzp_payment_form"></form>
    </div>
  );
};

export default RazorpayPaymentButton;
