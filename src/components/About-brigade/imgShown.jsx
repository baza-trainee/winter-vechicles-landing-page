
import { useState, useEffect } from 'react';
import imgMob1x from '../../images/about-brigade/about-brigade-mobile-1x.jpg';
import imgMob2x from '../../images/about-brigade/about-brigade-mobile-2x.jpg';
import imgTab1x from '../../images/about-brigade/about-brigade-tablet-1x.jpg';
import imgTab2x from '../../images/about-brigade/about-brigade-tablet-2x.jpg';
import imgDesk1x from '../../images/about-brigade/about-brigade-desktop-1x.jpg';
import imgDesk2x from '../../images/about-brigade/about-brigade-desktop-2x.jpg';


export const ImgShown = () => {
  const [imageToShow, setImageToShow] = useState(getImageBasedOnWindowSize);

  function getImageBasedOnWindowSize() {
    const windowWidth = window.innerWidth;
    const devicePixelRatio = window.devicePixelRatio;

    if (windowWidth <= 767) {
      return devicePixelRatio > 1 ? imgMob2x : imgMob1x;
    } else if (windowWidth <= 1279) {
      return devicePixelRatio > 1 ? imgTab2x : imgTab1x;
    } else {
      return devicePixelRatio > 1 ? imgDesk2x : imgDesk1x;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setImageToShow(getImageBasedOnWindowSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setImageToShow]);

  return (
    <div>
      {imageToShow && (
        <img src={imageToShow} alt="Description" loading="lazy"/>
      )}
    </div>
  );
};
