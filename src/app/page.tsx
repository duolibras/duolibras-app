import React from 'react';
import { getFaqs } from '@/data/faq';
import { getTestimonials } from '@/data/testimonials';
import { Components } from '@/components';

export default async function Home() {
  const faqs = await getFaqs();
  const { items: testimonials, totalCount } = await getTestimonials();

  return (
    <Components.UI.PageTransition>
      <div className="min-h-screen bg-black">
        <Components.UI.GridBackground />
        <div className="relative z-10">
          <Components.Layout.Header />
          <Components.Features.HeroSection />
          <Components.Features.FAQ items={faqs} />
          <Components.Features.Testimonials testimonials={testimonials} totalCount={totalCount} />
          <Components.Layout.Footer />
        </div>
      </div>
    </Components.UI.PageTransition>
  );
};

