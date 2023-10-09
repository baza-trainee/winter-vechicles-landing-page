import Container from '../Container/Container';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

import './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
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
