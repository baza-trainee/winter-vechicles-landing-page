import LogoSvg from "./LogoSvg/LogoSvg";

import styles from "./logoComponent.module.scss";

const LogoComponent = () => {
  return (
    <a className={styles.logo} href="/">
      <LogoSvg />
    </a>
  );
};

export default LogoComponent;
