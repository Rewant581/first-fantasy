import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Legalities from './Pages/Legalities';

import HowToPlay from './Pages/Howtoplay';
import FAQ from './Pages/Contact';
import UserSays from './Pages/Usersays';
import PrivacyPolicy from './Pages/privacy_policy';
import Disclamier from './Pages/Disclamier';
import ResponsibleGaming from './Pages/ResponsibleGaming';


import TermsAndConditions from './Pages/TermsAndConditions';


import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        <Route path="/Howtoplay" element={<HowToPlay />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/user-says" element={<UserSays />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/Disclamier" element={<Disclamier />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Legalities" element={<Legalities />} />
        <Route path="/ResponsibleGaming" element={<ResponsibleGaming/>} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
