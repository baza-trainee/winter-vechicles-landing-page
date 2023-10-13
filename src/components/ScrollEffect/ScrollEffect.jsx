import { useState, useEffect, useRef } from "react";
import styles from "./ScrollEffect.module.scss";

const ScrollEffect = ({children}) => {
  const [isVisible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(documentRef.current);
  }, []);

  const visibleSection = isVisible ? styles.fadeInSection__isVisible : "";

  return (
    <div
      ref={documentRef}
      className={`${styles.fadeInSection} ${visibleSection}`}
    >
      {children}
    </div>
  );
};

export default ScrollEffect;
