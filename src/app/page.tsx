// import HeroSection from '@/components/Hero';
import Contact from '@/components/FreshFeast';
import Hero from '@/components/Hero';
// import Header from '@/components/Navbar';
import About from '@/components/about';

import MenuSection from '@/components/menu';
// import Footer from '@/components/footer';
import HowItWorks from '@/components/howto_work';
import TestimonialsSlider from '@/components/testimonials';
import Services from '@/components/Services';
// import Testimonials from '@/components/testi';

export default function Home() {
  return (
    <main className="font-sans max-w-screen-2xl mx-auto">
      {/* <Header /> */}
      <Hero />
      <Services/>
      <MenuSection />
      <About/>
      <HowItWorks/>
      <TestimonialsSlider/>
      <Contact/>
      {/* <Footer/> */}
    </main>
  );
}
