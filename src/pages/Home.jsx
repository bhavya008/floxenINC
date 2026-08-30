import About from '@/components/floxen/About';
import AddOns from '@/components/floxen/AddOns';
import Footer from '@/components/floxen/Footer';
import Hero from '@/components/floxen/Hero';
import HowItWorks from '@/components/floxen/HowItWorks';
import Nav from '@/components/floxen/Nav';
import Pricing from '@/components/floxen/Pricing';
import Services from '@/components/floxen/Services';

export default function Home() {
  return (
    <div className="bg-white">
      <Nav />
      <main>
        <Hero />
        <Services />
        <AddOns />
        <HowItWorks />
        <Pricing />
        <About />
      </main>
      <Footer />
    </div>
  );
}
