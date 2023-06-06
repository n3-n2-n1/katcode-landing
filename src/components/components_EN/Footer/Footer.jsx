import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Footer = () => {

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
        <footer id="contact" className="bg-black footer">
            <div className="content-space-1 content-space-b-lg-2 content-space-t-lg-3 bg-black">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content-space-b-lg-1">
                                <h1 className="text-white" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-in">Contact our <br /> sales team</h1>
                                <p className="text-color-light-gray">Connect with our team to learn more about our services</p>
                            </div>
                            <ul className="list-checked list-checked-success mb-0 pe-lg-6">
                                <li className="list-checked-item" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-in"><b>Buenos Aires</b>: Ciudad Autonoma de Buenos Aires, Argentina</li>
                                <li className="list-checked-item arrow-white" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-in"><b>Brazil</b>: Florianopolis. Brazil.</li>
                                <li className="list-checked-item" data-aos-delay="400" data-aos-duration="1000" data-aos="fade-in"><b>Reach us</b>: <a className="infinix-text-white" href="mailto:krystalloquartz@gmail.com">krystalloquartz@gmail.com</a></li>
                                <li className="list-checked-item arrow-pink" data-aos-delay="500" data-aos-duration="1000" data-aos="fade-in"><b>+54 11 32379661</b></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 ps-lg-5 mt-10 mt-lg-0">
                            <form id="holding-contact-form-index" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000">
                                <div className="mb-4">
                                    <input type="text" className="form-control form-control-lg" name="formName" id="formName" placeholder="Name" aria-label="First" />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control form-control-lg" name="formEmail" id="formEmail" placeholder="Email" aria-label="Email" />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control form-control-lg" name="formCompany" id="formCompany" placeholder="Company" aria-label="Company" />
                                </div>
                                <div className="mb-4">
                                    <textarea className="form-control form-control-lg" name="formMessage" id="formMessage" placeholder="Message" aria-label="Message" rows="4"></textarea>
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn-white">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border-top-gray content-space-t-2 content-space-b-1">
                <div className="row">

                    <div className="col-lg-3 mb-5 mb-md-0">
                        <ul className="list-unstyled list-py-1 mb-0" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-in">
                            <li><a href="#about-us" className="text-white">About us</a></li>
                            <li><a href="#services" className="text-white">Clients</a></li>
                            <li><a href="#projects" className="text-white">Team</a></li>
                            <li><a href="#team" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-6 text-center text-lg-start mt-4">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item" data-aos-delay="500" data-aos-duration="1000" data-aos="fade-in">
                                <a className="btn btn-sm btn-icon" href="#" target="_blank" rel="noreferrer noopener">
                                    <img src="../../../public/imgs/Footer/Social/ic-twitter.svg" alt="Twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item" data-aos-delay="600" data-aos-duration="1200" data-aos="fade-in">
                                <a className="btn btn-sm btn-icon" href="#" target="_blank" rel="noreferrer noopener">
                                    <img src="../../../public/imgs/Footer/Social/ic-instagram.svg" alt="Instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item" data-aos-delay="700" data-aos-duration="1200" data-aos="fade-in">
                                <a className="btn btn-sm btn-icon" href="#" target="_blank" rel="noreferrer noopener">
                                    <img src="../../../public/imgs/Footer/Social/ic-linkedin.svg" alt="LinkedIn" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row content-space-t-3">
                    <div className="col-lg-12">
                        <p className="text-white mb">© Copyright 2023
                            <br />
                            kat:code | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer