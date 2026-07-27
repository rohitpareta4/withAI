import Navbar from '@/components/Navbar/navbar'
import HeroSection from '@/components/Hero/hero';
import HowItWorks from '@/components/Howitworks/howitworks';
import Features from '@/components/Features/features';
import Footer from '@/components/Footer/footer';

export default function Home() {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <HowItWorks/>
     <Features/>
     <Footer/>
    </div>

  );
}
