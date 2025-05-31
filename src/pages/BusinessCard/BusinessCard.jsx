import './BusinessCard.css'
import { useState, useEffect, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import { toPng } from 'html-to-image'
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function BusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef = useRef(null);

  const handleDownloadContact = () => {
    const link = document.createElement("a");
    link.href = "/za.ouferhat_contact.vcf";
    link.download = "Zohra-Amel-Ouferhat.vcf";
    link.click();
  };

  const handleDownloadFrontPNG = () => {
    if (frontRef.current === null) return;
  
    toPng(frontRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "zohra amel ouferhat-business-card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to download front image", err);
      });
  };

  useEffect(() => {
    // Flip briefly on mount
    const flipTimeout = setTimeout(() => {
      setIsFlipped(true); // Flip to back
      setTimeout(() => {
        setIsFlipped(false); // Flip back to front
      }, 800); // Stay flipped for 800ms
    }, 1000); // Delay before flip starts (optional)

    return () => clearTimeout(flipTimeout); // Clean up
  }, []);
  return (
    <div className="businessCard">
      
      <div className="circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
      <div className="card">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* FRONT SIDE */}
          <div onClick={() => setIsFlipped(true)} className="frontSide" ref={frontRef}>
            <h2>Zohra Amel Ouferhat</h2>
            <h3>Web developer | Graphic designer</h3>
            <p>
              <FaPhone style={{ marginRight: "8px" }} />
              +1 (613) 793 4415
              </p>
            <p>
              <FaEnvelope style={{ marginRight: "8px" }} />
              zohra.amel.ouferhat@gmail.com
              </p>
            <p>
              <FaGlobe style={{ marginRight: "8px" }} />
              zohramelouferhat.netlify.app/</p>
          </div>

          {/* BACK SIDE */}
          <div onClick={() => setIsFlipped(false)} className="backSide">
            <img src="/images/zao_contact_qr-code.svg" alt="QR Code" />
          </div>
        </ReactCardFlip>
      </div>
      <div className="buttons">
          <button
                      onClick={handleDownloadContact}
                  >
                      Save Contact
          </button>
          <button
            onClick={handleDownloadFrontPNG}
          >
            Download card
          </button>
      </div>
    </div>
  )
}
