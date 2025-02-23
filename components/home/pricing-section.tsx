import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { features } from '@/data';

export default function PricingSection() {
  return (
    <section className='bg-primary/0'>
      <div className='container py-14 md:py-24'>
        <div className='max-w-3xl mx-auto text-center mb-10 md:mb-16'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Only pay for what you send
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Simple, transparent pricing with no hidden fees. Start for free and
            scale as you grow.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 items-start'>
          <div className='relative aspect-square w-full max-w-md mx-auto'>
            <Image
              src='/veratel-pricing.webp'
              alt='Pricing illustration'
              fill
              objectFit='cover'
              className='rounded-lg shadow-lg'
            />
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>What's included:</h3>
            <ul className='space-y-3'>
              {features.map((feature: string, index: number) => (
                <li key={index} className='flex items-center gap-2'>
                  <Check className='w-5 h-5 text-[hsla(163,100%,41%,1)]' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className='mt-8'>
              <h4 className='font-semibold mb-2'>Need custom pricing?</h4>
              <p className='text-sm text-muted-foreground mb-4'>
                We offer tailored solutions for high-volume senders. Contact us
                for a custom quote.
              </p>
              <Button className='bg-[hsla(163,100%,41%,1)] hover:bg-[hsla(163,100%,41%,0.9)] text-white'>
                Start Free Trial
              </Button>
              <Button variant='outline' className='ml-4'>
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
