import { Route } from '@/types';

export const routes: Route[] = [
  // {
  //   name: 'Home',
  //   path: '/',
  // },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Features',
    path: '/features',
  },
  // {
  //   name: 'Industry Expertise',
  //   path: '/industry-expertise',
  // },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  // {
  //   name: 'Testimonials',
  //   path: '/testimonials',
  // },
  // {
  //   name: 'Contact',
  //   path: '/contact',
  // },
];

export const email = 'sales@veratel.io';

export const features: string[] = [
  'No setup fees',
  'No monthly fees',
  'No hidden costs',
  'Pay only for successful deliveries',
  'Volume-based discounts available',
  'Flexible pricing for high-volume senders',
];


export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Veratel has transformed our customer engagement strategy. The delivery rates are exceptional!',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    rating: 5,
  },
  {
    quote:
      "The best SMS solution we've used. Their support team is incredibly responsive.",
    author: 'Michael Chen',
    role: 'CTO',
    rating: 5,
  },
  {
    quote:
      'Reliable, fast, and cost-effective. Exactly what we needed for our casino operations.',
    author: 'David Miller',
    role: 'Operations Manager',
    rating: 5,
  },
];


export type FormFields = {
  name: string;
  email: string;
  message: string;
  recaptcha_token: string;
};