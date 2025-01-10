import React from 'react';
import { Testimonial } from './types';

export const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-gray-800 rounded-lg p-6 text-white">
    <div className="flex items-center mb-4">
      <span className="font-semibold text-cyan-500">{testimonial.name}</span>
      <span className="ml-4 text-sm text-gray-400">{testimonial.time}</span>
    </div>
    <p className="text-gray-300">{testimonial.text}</p>
  </div>
);
