
import Container from '../Container/Container';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutBrigade from '../About-brigade/AboutBrigade';
import Footer from '../Footer/Footer';
import WhyIsItImportantBlock from '../WhyIsItImportantBlock/WhyIsItImportantBlock';
import Scroll from '../ScrollToTop/ScrollToTop';
import RunningText from '../RunningText/RunningText';
import ProgressBar from '../ProgressBar/ProgressBar';
import Modal from '../Modal/Modal';
import "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RunningText />
        <ProgressBar />
        <AboutBrigade />
        <RunningText />
        <WhyIsItImportantBlock />
      </main>

      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
      <Modal />
      <Scroll />
    </>
  );
}

export default App;
