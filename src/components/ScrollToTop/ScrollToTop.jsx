import { useEffect, useState } from 'react';
import { PiArrowUpLight } from 'react-icons/pi';
import styles from './ScrollToTop.module.scss';

const Scroll = () => {
  const [ScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {ScrollToTop && (
        <button type="button" className={styles.button} onClick={ScrollUp}>
          <PiArrowUpLight className={styles.arrow} />
        </button>
      )}
    </>
  );
};

export default Scroll;
