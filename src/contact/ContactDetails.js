import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const ContactDetails = () => {
    const productList = [
        {
          icon: <FontAwesomeIcon icon={faEnvelope} />,
          name: 'Email',
          description: 'Our team will respond promptly to your email within [Insert Response Time]',
          contLink: "hello@mail.com",
        },
        {
          icon: <FontAwesomeIcon icon={faPhone} />,
          name: 'Phone',
          description: 'Our team is available during our operating hours to address your queries.',
          contLink: "+1 (555) 000-0000",
        },
        {
          icon: <FontAwesomeIcon icon={faLocationDot} />,
          name: 'Office',
          description: 'Visit our physical store to explore our products and experience the essence of Hari Arunachala. You can find us at:[Insert Store Address]',
          contLink: "123 Sample St, Sydney NSW 2000 AU",
        },
        {
          
          name: 'Office Operating Hours:',
          description: 'Monday to Saturday: [Insert Opening Time] - [Insert Closing Time] Sunday: [Insert Opening Time] - [Insert Closing Time]',
        },
      ];
  return (
    <div></div>
        
  );
}

export default ContactDetails