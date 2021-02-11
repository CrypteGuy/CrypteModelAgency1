import Head from 'next/head';
import GlobalStyle from '../theme/globalStyles';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
          rel="stylesheet"
        />
        <title>Bellefair | Model Agency Berlin</title>
      </Head>
      <div>
        <GlobalStyle />
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
