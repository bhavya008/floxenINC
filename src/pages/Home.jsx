import About from '@/components/floxen/About';
import BlogSection from '@/components/floxen/BlogSection';
import Footer from '@/components/floxen/Footer';
import Hero from '@/components/floxen/Hero';
import HowItWorks from '@/components/floxen/HowItWorks';
import Nav from '@/components/floxen/Nav';
import Pricing from '@/components/floxen/Pricing';
import Services from '@/components/floxen/Services';
import WorkShowcase from '@/components/floxen/WorkShowcase';

export default function Home() {
  return (
    <div className="bg-white">
      <Nav />
      <main>
        <Hero />
        <Services />
        <WorkShowcase />
        <HowItWorks />
        <Pricing />
        <BlogSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
