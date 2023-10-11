import React from 'react'
import styles from './ProgressBar.module.scss';
import Container from '../Container/Container';


const ProgressBar = () => {

    return (
    <div className={styles.wrapper}>
        <Container>
        <div className={styles.title}>
        Готуємось разом до нашої переможної зими
        </div>
        <div className={styles.ProgressBar}>
            <div className={styles.img}>
            <img src='src/components/ProgressBar/img.png' alt='heart'/>
            </div>
            <div className={styles.bar}>
                <div  className={styles.fill} style={{width: '5%'}}></div>
            </div>
            <div className={styles.text}>
            <div className={styles.first}>
            <h3 >Вже зібрано</h3>
            <h4 >0 грн.</h4>
            </div>
            <div className={styles.second}>
            <h3>Наша мета</h3>
            <h4>50 000 грн.</h4>
            </div>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default ProgressBar