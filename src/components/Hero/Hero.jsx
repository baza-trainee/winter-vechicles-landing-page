import Container from "../Container/Container";
import style from './Hero.module.scss'
import heroArrow from "../../images/hero/hero-arrow.svg";

const Hero = () => {
    return (
        <>
            <section className={style.hero}>
                <Container>
                    <div className={style.hero__cover}>
                        <div className={style.hero__info}>
                            <h1 className={style.hero__title}>“Швидкі колеса”</h1>
                            <span className={style.hero__label}>До зими авто підготував - ворогу шансів не дав!</span>
                            <p className={style.hero__text}>
                                <span>Наша мета<img src={heroArrow} alt="" /></span><span>50 000 грн.</span>
                            </p>
                            <p className={style.hero__text}>
                                Для 59 бригади ЗСУ на придбання комплектуючих для авто.
                            </p>
                        </div>
                        <div className={style.hero__buttonCover}>
                            {/* Замінити тег button компонентом Button  */}
                            <button style={{
                                'borderRadius': '8px',
                                'background': 'var(--Orange, #F29544)',
                                'color': '#F1F1F1',
                                'padding': '15px 63.5px'
                            }}>Допомогти</button>
                        </div>
                    </div>
                </Container>
            </section >
        </>
    )
};

export default Hero;


