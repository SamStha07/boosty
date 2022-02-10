import { useState } from 'react';
import './App.css';
import './styles/awardsAndPartnersSlider.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  // show header while scolling down
  const showHeaderOnScroll = () => {
    if (window.scrollY >= 20) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };
  window.addEventListener('scroll', showHeaderOnScroll);

  if (process.env.NODE_ENV === 'production') {
    console.log = function () {};
  }

  return (
    <>
      {showHeader && <Header />}

      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/contacts' component={ContactPage} />
        <Route exact path='/projects' component={ProjectsPage} />
      </Switch>

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
