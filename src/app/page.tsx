import Contact from '@/components/FreshFeast';
import Hero from '@/components/Hero';
import About from '@/components/about';

import MenuSection from '@/components/menu';
import HowItWorks from '@/components/howto_work';
import TestimonialsSlider from '@/components/testimonials';
import Services from '@/components/Services';
import ChatShell from '@/components/ChatShell';


export default function Home() {
  return (
    <main className="font-sans max-w-screen-2xl mx-auto">
      <ChatShell />
      <Hero />
      <Services/>
      <MenuSection />
      <About/>
      <HowItWorks/>
      <TestimonialsSlider/>
      <Contact/>
    </main>
  );
}
