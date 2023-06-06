import '../styles/vendor.min.css';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import Preloader from '../components/components_EN/Preloader/Preloader';
import Header from "../components/components_EN/Header/Header";
import Hero from "../components/components_EN/Hero/Hero";
import About from "../components/components_EN/About/About";
import Enterprises from "../components/components_EN/Enterprises/Enterprises";
import Team from "../components/components_EN/Team/Team";
import SolutionsText from "../components/components_EN/SolutionsText/SolutionsText";
import Partners from "../components/components_EN/Partners/Partners";
import Footer from "../components/components_EN/Footer/Footer";
import CookiesModal from '../components/components_EN/Cookies/Cookies';
import BackToTopButton from '../components/components_EN/BackToTopButton/Button';


const Landing_EN = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2200);
  }, []);

  return (
    <>
      {!loaded && <Preloader />}
      {loaded && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Enterprises />
            <Team />
            <SolutionsText />
            <Partners /> 
          </main>
          <Footer />
          <CookiesModal />
          <BackToTopButton />
        </>
      )}
    </>
  );
};

export default Landing_EN;
