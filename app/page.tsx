import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import KeywordScrollSpy from '@/components/KeywordScrollSpy';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <KeywordScrollSpy />
    </main>
  );
}
