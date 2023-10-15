import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./ScrollToTop.module.scss";
const Scroll = () => {

  const [ScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);
  
  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      {ScrollToTop && (
        <button className={styles.button} onClick={ScrollUp}>
          <AiOutlineArrowUp size={36} className={styles.arrow} />
        </button>
      )}
    </div>
  );
};

export default Scroll;
