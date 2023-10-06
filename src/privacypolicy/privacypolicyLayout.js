import React from 'react';
import Privacypolicy from './privacypolicycont'; 
import ppheader from './privacypolicyheader';
import ppfooter from './privacypolicyfooter';
import "./privacypolicy.css";

const privacypolicyLayout = () => {
  return (
    <div>
    <ppheader></ppheader>
    <ppfooter></ppfooter>
    </div>
  )
}

export default privacypolicyLayout