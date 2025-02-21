import Image from 'next/image';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
const Hero = () => {
  return (
    <section className='container-custom lg:grid lg:grid-cols-12 gap-x-8'>
      <div className='lg:col-span-7 py-16'>
        <h1 className='text-6xl font-bold tracking-tight lg:leading-[1.2]'>
          Reach more, Convert more (Grow more) with less complexity
        </h1>
        <p className='mt-6 text-lg md:text-xl'>
          CPaaS solutions for iGaming and online casinos - because delivery %
          matters.
        </p>
        <Link
          href='/contact'
          className={cn(buttonVariants({ size: 'lg' }), 'mt-6')}
        >
          Get Started with Free Testing
        </Link>
      </div>
      <div className='lg:col-span-5 relative'>
        <Image
          src='/hero.webp'
          alt='Veratel'
          fill
          quality={100}
          priority
          className='object-cover'
        />
      </div>
    </section>
  );
};

export default Hero;
