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
          <Hero />
        </Container>
        <RunningText />
        <RunningText />
        <WhyIsItImportantBlock />
        {/* </Container> */}
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
