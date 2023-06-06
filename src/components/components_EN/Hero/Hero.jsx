import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ 
      once: false, 
      easing: 'ease-in-out', 
    });
  }, []);

  const handleScroll = () => {
    const scrollBg = document.getElementById('scrollbg');
    if (scrollBg) {
      const opacity = 1 - window.scrollY / 650;
      scrollBg.style.opacity = opacity;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="bg-black content-space-t-4 content-space-b-lg-0 content-space-t-lg-3">
      <div className="container-xl">
        <div id="scrollbg" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="box_text-hero">
                <h1 className="title-hero text-white mb-5" data-aos-duration="800" data-aos-delay="100">
                  Grow your business now, <span className="selected"> first time for <br /> free</span>.
                </h1>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 ms-auto">
              <div className="position-relative h-100 pb-5 pb-lg-0">
                <div className="img-hero" data-jarallax-element="-45 0" data-disable-parallax-down="lg">
                  <img src="../../../public/imgs/Hero/katcodeHero.webp" alt="Hero Image" data-aos-duration="800" data-aos-delay="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


