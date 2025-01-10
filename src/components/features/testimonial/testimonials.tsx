import { TestimonialCard } from "./testimonials-card";
import { TestimonialsProps } from "./types";

export const Testimonials = ({ testimonials, totalCount = 107 }: TestimonialsProps) => {
  return (
    <div className="container mx-auto px-6 py-16" id="depoimentos">
      <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
        Depoimentos
        <span className="ml-3 bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
          {totalCount}
        </span>
      </h2>
      <div className="mb-6 text-green-500">
        Importante: Os depoimentos abaixo não foram selecionados a dedo. 
        Esta área é controlada pelos próprios alunos que já completaram pelo menos os 7 primeiros dias de aulas.
      </div>
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};
