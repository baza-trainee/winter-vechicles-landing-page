import { useState, useEffect } from "react";
import imgMob from "../../images/about-brigade/about-brigade-mobile.jpg";
import imgTab from "../../images/about-brigade/about-brigade-tablet.jpg";
import imgDesk from "../../images/about-brigade/about-brigade-desktop.jpg";

export const ImgShown = () => {
  const [imageToShow, setImageToShow] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 320) {
        setImageToShow(imgMob);
      } else if (windowWidth <= 768) {
        setImageToShow(imgTab);
      } else {
        setImageToShow(imgDesk);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>{imageToShow && <img src={imageToShow} alt="Description" />}</div>
  );
};
