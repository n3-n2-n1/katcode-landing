import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import 'aos/dist/aos.css';

const Enterprises = () => {
  useEffect(() => {
    AOS.init({
      once: false, 
      easing: 'ease-out', 
    });
  }, []);

  return (
    <div className="container-xl" id="enterprises">
      {/* Title */}
      <section className="content-space-t-3 content-space-b-2 content-space-b-lg-0" id="holding">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-black" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">They chosed <span className="selected-whitebg">to work with us:</span></h1>
            </div>
          </div>
        </div>
      </section>
      {/* InfinixSoft */}
      <section className="content-space-b-2 content-space-b-lg-3 ">
        <div className="container-xl">
          <div className="row align-items-center border-b-black content-space-b-lg-3">
            <div className="col-lg-5" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
              <div className="mb-5">
                <img src="../../../public/imgs/Enterprises/InfinixSoft/logo-soft-black.svg" alt="Infinix Soft" />
              </div>
              <div className="pb-3">
                <p className="font-300">
                  <b>AWAQ ONGD</b> - AWAQ is a Network of Biological Stations for monitoring statistics, get control and observation across reforesting.
                </p>
                <p className="font-300 mb-lg-2">
                  Personalized solutions and efficient crafting around teamwork to deliver a WebApp
                </p>
              </div>
              <a href="https://www.somosawaq.org/" target="_blank" className="btn-black" rel="noreferrer noopener">
                WebApp
              </a>
            </div>
            <div className="col-lg-7 pt-8 mb-10 mb-lg-0">
              <img
                src="../../../public/imgs/Enterprises/Awaq/awaq1.webp"
                className="w-xs-100 mx-auto d-block"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                alt="Section Image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* InfinixNFT */}
      <section className="content-space-b-2 content-space-b-lg-3">
        <div className="container-xl">
          <div className="row align-items-center border-b-black content-space-b-lg-3">
            <div className="col-lg-5 order-lg-2">
              <div className="mb-5">
                <img
                  src="../../../public/imgs/Enterprises/NoCountry/noCountrylogo.svg"
                  alt="InfinixNFT"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                />
              </div>
              <div className="pb-3">
                <p className="font-300" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                  <b>No Country </b> is a project for developers to emulate the space of working with a team.
                  Throrough your qualifiactions and your profile you may get interviews for potential jobs at IT.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                  Its a perfect place for those looking for new ways to work and get involved in this path.
                </p>
              </div>
              <a href="https://www.nocountry.tech/" target="_blank" className="btn-black" rel="noreferrer noopener">
                WebApp
              </a>
            </div>
            <div className="col-lg-7 order-lg-1 pt-8 mb-10 mb-lg-0">
              <img
                src="../../../public/imgs/Enterprises/NoCountry/noCountry.webp"
                alt="InfinixNFT"
                className="w-xs-100 mx-auto d-block"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprises;
