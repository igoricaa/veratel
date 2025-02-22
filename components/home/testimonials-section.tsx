import { Card, CardContent } from '@/components/ui/card';
import { Testimonial, testimonials } from '@/data';
import { StarIcon } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10' />
      <div className='container py-14 md:py-24'>
        <div className='text-center mb-10 md:mb-16'>
          <h2 className='font-bold tracking-tighter text-3xl  sm:text-4xl md:text-5xl'>
            Proven Results
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Join our satisfied clients who trust Veratel for their critical
            communication needs.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial: Testimonial, i: number) => (
            <Card key={i} className='border-1'>
              <CardContent className='pt-6'>
                <div className='flex gap-1 mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className='w-5 h-5 fill-[hsla(163,100%,41%,1)] text-[hsla(163,100%,41%,1)]'
                    />
                  ))}
                </div>
                <blockquote className='text-lg mb-4'>
                  {testimonial.quote}
                </blockquote>
                <div>
                  <cite className='not-italic font-semibold'>
                    {testimonial.author}
                  </cite>
                  <p className='text-sm text-muted-foreground'>
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
