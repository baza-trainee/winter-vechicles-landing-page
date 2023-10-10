import styles from "./AboutBrigade.module.scss";
import {ImgShown} from "./imgShown";

const AboutBrigade = () => {
    return (<div className={styles.container}>
        <h2 className={styles.sectionTitle}>Про бригаду</h2>
        <div className={styles.content}>
            <div className={styles.aboutBrigadeText}>
                <p>59-та окрема мотопіхотна бригада імені Якова Гандзюка була сформована вже після початку російської
                    агресії,
                    наприкінці
                    2014 року. До її складу увійшли три батальйони: 9-й, 10-й та 11-й. Бригада названа на честь Якова
                    Гандзюка -
                    українського військового діяча часів Перших Визвольних змагань.
                </p>
                <p>Ми збираємо кошти на придбання необхідних комплектуючих для автівок. Дуже важливо саме зараз підготувати
                    військові
                    автівки до зими, щоб ніщо не заважало нашим захисникам та захисницям виконувати завдання на передовій та
                    наближати нашу
                    перемогу.
                </p>
            </div>
            <div className={styles.img}><ImgShown/></div>    
        </div>
    </div>);
};

export default AboutBrigade;