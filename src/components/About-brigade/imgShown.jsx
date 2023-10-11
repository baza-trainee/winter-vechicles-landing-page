import { useState, useEffect } from 'react';
import imgMob from "../../images/about-brigade/about-brigade-mobile.jpg";
import imgTab from "../../images/about-brigade/about-brigade-tablet.jpg";
import imgDesk from "../../images/about-brigade/about-brigade-desktop.jpg";

export const ImgShown = () => {
  const [imageToShow, setImageToShow] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 767) {
        setImageToShow(imgMob);
      } else if (windowWidth <= 1279) {
        setImageToShow(imgTab);
      } else {
        setImageToShow(imgDesk);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setImageToShow]);

  return (
    <div>      
      {imageToShow && <img src={imageToShow} alt="Description" />}
    </div>
  );
};