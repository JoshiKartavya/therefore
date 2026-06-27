import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import BrandStrip from './components/BrandStrip';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import Social from './components/Social';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Header />

      <main className="flex-grow pt-24">
        <Hero />
        <Ticker />
        <ProductGrid />
        <BrandStrip />
        <Social />
      </main>

      <Footer />
    </div>
  );
}

export default App;
