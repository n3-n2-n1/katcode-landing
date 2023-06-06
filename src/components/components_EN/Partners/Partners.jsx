import "./Partners.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Partners = () => {
    
    {/* Inicializo AOS para las Animaciones */ }
    const initializeAOS = () => {
        AOS.init({
            once: false,
            easing: 'ease-out',
        });
    };

    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section className="content-space-3 content-space-b-lg-3 pt-8">
            <div className="container content-space-b-2">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title-bold-1 infinix-title-black text-center mb-lg-5 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s"> Trusted by <span className="selected-whitebg">Industry Leaders</span>: <br />Partners and Clients</h1>
                    </div>
                </div>
            </div>
            <div className="container-xl">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 align-items-center">
                    <div className="col mb-5">
                        <div className="mb-4 text-center" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                            <img src="../../../public/imgs/Partners/cencosud.png" className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src="../../../public/imgs/Partners/cisco.png" className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src="../../../public/imgs/Partners/ebay.png" className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src="../../../public/imgs/Partners/FiberCorp.jpg" className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src="../../../public/imgs/Partners/infobae.jpg" className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src="../../../public/imgs/Partners/sony.png" className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src="../../../public/imgs/Partners/mostaza.jpg" className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src="../../../public/imgs/Partners/personal.jpg" className="w-50" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners