import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutBrigade from '../About-brigade/AboutBrigade';
import Footer from '../Footer/Footer';
import WhyIsItImportantBlock from '../WhyIsItImportantBlock/ImportantBlock';
import Scroll from '../ScrollToTop/ScrollToTop';
import RunningText from '../RunningText/RunningText';
import ProgressBar from '../ProgressBar/ProgressBar';

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
      <Footer />      
      <Scroll />
    </>
  );
}

export default App;
