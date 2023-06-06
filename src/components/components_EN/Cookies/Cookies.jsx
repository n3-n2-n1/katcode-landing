import "./Cookies.css"
import { useEffect, useState } from 'react';

const CookiesModal = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem('cookiesAccepted');
    if (isCookieAccepted) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="container contain-cookie">
          <span className="text-cookie text-white">
            We use cookies 🍪 to ensure that we give you the best experience on our website.
          </span>
          <span className="modal-delete" onClick={handleAccept}>
            Accept
          </span>
        </div>
      )}
    </>
  );
};

export default CookiesModal;
