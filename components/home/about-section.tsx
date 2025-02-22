import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10' />
      <div className='container py-14 md:py-24'>
        <div className='md:text-center max-w-3xl mx-auto mb-16'>
          <h2 className='font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl'>
            Why Choose Veratel?
          </h2>
          <Card className='mt-8'>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-4'>
                <div className='p-2 rounded-lg bg-[hsla(163,100%,41%,1)]'>
                  <Shield className='w-6 h-6 text-white' />
                </div>
                <div className='text-left'>
                  <p className='text-lg leading-relaxed text-muted-foreground'>
                    At Veratel, we specialize in helping online casinos and
                    enterprises achieve superior communication results. With
                    unmatched delivery rates, seamless integration, and top-tier
                    customer support, we ensure your messages reach their
                    destination—every time.
                  </p>
                  <p className='mt-4 text-lg font-medium'>
                    We don't just provide a service; we provide peace of mind.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
