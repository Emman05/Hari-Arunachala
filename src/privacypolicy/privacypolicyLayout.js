import React from 'react';
import Privacypolicy from './privacypolicycont'; 
import TOSHeader from './privacypolicyheader';
import TOSfooter from './privacypolicyfooter';
import "./privacypolicy.css";

const TermsOfServicesLayout = () => {
  return (
    <div>
    <TOSHeader></TOSHeader>
    <Privacypolicy></Privacypolicy>
    <TOSfooter></TOSfooter>
</div>
  )
}

export default TermsOfServicesLayout
