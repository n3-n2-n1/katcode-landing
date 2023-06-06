import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import "./Button.css";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div id="backToTop" style={{ opacity: showButton ? 1 : 0 }}>
      <a onClick={scrollToTop} href="#home" className="scrollto page-scroll" id="back-to-top">
        <div className="btn-go-top">
          <BsFillArrowUpSquareFill />
        </div>
      </a>
    </div>
  );
};

export default BackToTopButton;
