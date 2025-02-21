import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Benefit, benefits } from '@/data';

export default function IndustrySection() {
  return (
    <section className='relative'>
      {/* <div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10' /> */}
      <div className='container py-24'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Tailored for iGaming and Online Casino Operators
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            We understand the unique challenges of your industry.
          </p>
        </div>
        <div className='mt-8'>
          <Card className='border-1'>
            <CardHeader>
              <CardTitle className='text-lg leading-relaxed text-muted-foreground'>
                The iGaming and online casino industry demands precision and
                reliability when it comes to marketing communications. We know
                that standard direct SMS routes are often inaccessible for your
                campaigns.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid md:grid-cols-3 gap-8 mt-8'>
                {benefits.map((benefit: Benefit, i: number) => (
                  <div key={i} className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-[hsla(163,100%,41%,1)]'>
                      <CheckCircle className='w-5 h-5' />
                      <h3 className='font-semibold'>{benefit.title}</h3>
                    </div>
                    <p className='text-muted-foreground'>
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
