import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className='container flex flex-col lg:flex-row items-center gap-8 py-12 md:py-24'>
      <div className='flex flex-col gap-4 lg:w-1/2'>
        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
          Reach more, Convert more{' '}
          <span className='text-primary'>Grow more</span> with less complexity
        </h1>
        <p className='text-lg text-muted-foreground'>
          CPaaS solutions for iGaming and online casinos —because delivery %
          matters.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <Button
            size='lg'
            className='w-full sm:w-auto bg-[hsla(163,100%,41%,1)] hover:bg-[hsla(163,100%,41%,0.9)] text-white'
          >
            Get Started with Free Testing
          </Button>
        </div>
        <div className='flex items-center gap-4 mt-6'>
          <div className='flex -space-x-2'>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className='w-8 h-8 rounded-full border-2 border-background bg-secondary'
              />
            ))}
          </div>
          <div className='flex items-center gap-1'>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className='w-4 h-4 fill-[hsla(163,100%,41%,1)] text-[hsla(163,100%,41%,1)]'
              />
            ))}
            <span className='text-sm font-medium'>4.9/5</span>
          </div>
          <span className='text-sm text-muted-foreground'>
            from over 1,000+ reviews
          </span>
        </div>
      </div>
      <div className='lg:w-1/2'>
        <div className='relative w-full aspect-square lg:aspect-[4/3]'>
          <div className='absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg'>
            <div className='w-full h-full flex items-center justify-center'>
              <div className='relative w-3/4 aspect-[3/4]'>
                <div className='absolute inset-0 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-xl'>
                  {/* Add your hero illustration or animation here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
