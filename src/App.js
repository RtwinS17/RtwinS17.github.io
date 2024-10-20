import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Utiliser HashRouter pour GitHub Pages
import { MainContent } from './composants/Permanent/homeCard.component';
import { ThemeBtn } from './composants/Molecule/Button/themeChanger.btn';
import Diaporamahome from './composants/Permanent/diaporamaHome';
import HomeLogo from './composants/Molecule/Icon/homeLogo';
import { HomeContent } from './composants/HomePage/contentHome.component';
import NavBarMobile from './composants/Permanent/NavBar_Components/NavBar_Mobile/navBarMobile.component';
import { NavBarDesktop } from './composants/Permanent/NavBar_Components/NavBar_Desktop/navBarDesktop.component';
import { Page404 } from './composants/404/Page404.component';
import { InfoPratiques } from './composants/Info-pratiques/infoPratique.component';
import FaqComponent from './composants/Info-pratiques/FAQ/FaqComponent';
import { Alertes } from './composants/Info-pratiques/Alertes/Alertes.component';
import { Contact } from './composants/Info-pratiques/Contact/Contact.component';
import PartenairesComponent from './composants/Info-pratiques/Partenaires/Partenaires.component';
import Map from './composants/Map/map';
import { Billetterie } from './composants/Billetterie/Billetterie.component';
import { AdminProgrammation } from './composants/admin/programmation.component';
import { CreateConcert } from './composants/admin/Management/CreateConcert.component';
import { EditConcert } from './composants/admin/Management/EditConcert.component';
import Footer from './composants/Permanent/Footer/footer';
import ConditionsPage from './composants/WordPress/CondGenWP';
import DetailsArtistesWP from './composants/WordPress/DetailArtistesWP';
import Concerts from './composants/WordPress/ProgrammesWP';

const App = () => {

  let [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let [deviceUsed, setDeviceUSed] = useState('mobile');

  function updateScreenWidth() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    screenWidth >= 640 ? setDeviceUSed('desktop') : setDeviceUSed('mobile');
  }, [screenWidth]);

  return (
    <>
      <div className='w-screen appContainer flex flex-col'>
        <Router>
          <Diaporamahome />
          <HomeLogo />
          {deviceUsed === 'mobile' ? <NavBarMobile /> : <NavBarDesktop />}
          <MainContent>
            <Routes>
              <Route path="/*" element={<Page404 />} />
              <Route path="/" element={<HomeContent />} />
              <Route path="/discover" element={<Concerts />} />
              <Route path="/discover/artists" element={<DetailsArtistesWP />} />
              <Route path="/infos-pratiques" element={<InfoPratiques deviceUsed={deviceUsed} />} />
              <Route path="/FAQ" element={<FaqComponent />} />
              <Route path="/alertes" element={<Alertes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partenaires" element={<PartenairesComponent />} />
              <Route path="/map" element={<Map />} />
              <Route path="/billetterie" element={<Billetterie />} />
              <Route path="/admin/programmation" element={<AdminProgrammation />} />
              <Route path="/admin/create_concert" element={<CreateConcert />} />
              <Route path="/admin/edit_concert" element={<EditConcert />} />
              <Route path="/conditions" element={<ConditionsPage />} />
              <Route path="/discover/programmation" element={<Concerts />} />
            </Routes>
          </MainContent>
          {deviceUsed === 'mobile' ? <></> : <Footer />}
        </Router>
       
        <ThemeBtn />
      </div>
    </>
  );
};

export default App;
