import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function CTASection() {
  return (
    <section id='trial' className='container py-24'>
      <Card className='max-w-2xl mx-auto border-1'>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold'>
            Start Your Free Trial Today
          </CardTitle>
          <p className='text-lg text-muted-foreground mt-4'>
            Experience the Veratel difference. No risks, no commitments—just
            results.
          </p>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <Input type='email' placeholder='Work Email' />
            <Input type='tel' placeholder='Phone Number' />
          </form>
        </CardContent>
        <CardFooter>
          <Button
            className='w-full bg-[hsla(163,100%,41%,1)] hover:bg-[hsla(163,100%,41%,0.9)] text-white'
            size='lg'
          >
            Sign Up Now
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
