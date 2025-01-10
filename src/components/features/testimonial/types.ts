export type Testimonial = {
  id: number;
  name: string;
  text: string;
  time: string;
}

export type TestimonialsProps = {
  testimonials: Testimonial[];
  totalCount?: number;
}
