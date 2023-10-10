import './App.module.scss';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import WhyIsItImportantBlock from '../WhyIsItImportantBlock/WhyIsItImportantBlock';
import RunningText from '../RunningText/RunningText';

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
        </Container>
        <RunningText />
        <RunningText />
        <WhyIsItImportantBlock />
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
