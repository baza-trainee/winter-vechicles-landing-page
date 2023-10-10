import './App.module.scss';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutBrigade from '../About-brigade/AboutBrigade';
import Footer from '../Footer/Footer';
import WhyIsItImportantBlock from '../WhyIsItImportantBlock/WhyIsItImportantBlock';

function App() {
  return (
    <>
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main>
        <Container>
          <Hero />
          <AboutBrigade />
          <WhyIsItImportantBlock />
        </Container>
      </main>
      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
}

export default App;
