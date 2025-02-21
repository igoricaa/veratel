import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import FeaturesSection from '@/components/home/features-section';
import CTASection from '@/components/home/cta-section';
import HowItWorks from '@/components/home/how-it-works';
import IndustrySection from '@/components/home/industry-section';
import PricingSection from '@/components/home/pricing-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import UseCasesSection from '@/components/home/use-cases-section';

export default function Home() {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <main className='flex-1'>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <IndustrySection />
        <HowItWorks />
        <UseCasesSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}
