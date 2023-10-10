import imgMob from "./img/img-mobile.jpg";
import imgTab from "./img/img-tablet.jpg";
import imgDesk from "./img/img-desktop.jpg";

export const ImgShown = () => {
  const windowWidth = window.innerWidth;

  let imageToShow;

  if (windowWidth <= 320) {
    imageToShow = (
      <img
        src={imgMob}
        alt="Private security service contractor in camouflage uniform posing"
      />
    );
  } else if (windowWidth <= 768) {
    imageToShow = (
      <img
        src={imgTab}
        alt="Private security service contractor in camouflage uniform posing"
      />
    );
  } else {
    imageToShow = (
      <img
        src={imgDesk}
        alt="Private security service contractor in camouflage uniform posing"
      />
    );
  }

  return imageToShow;
};
