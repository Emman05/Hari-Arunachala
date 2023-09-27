import React from 'react'
import ContactHead from './ContactHead'
import ContactServ from './ContactServ'
import "./contact.css"
const ContactLayout = () => {
  return (
    <div>
        <ContactHead></ContactHead>
        <ContactServ></ContactServ>
    </div>
  )
}

export default ContactLayout