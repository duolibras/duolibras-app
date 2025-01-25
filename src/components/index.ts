// Feature Components
import { HeroSection } from './features/hero-section';
import { FAQ } from './features/faq';
import { Testimonials } from './features/testimonial';
import { LoginForm } from './features/auth/login-form';
import { RegisterForm } from './features/auth/register-form';

// Layoyt Components
import { Header } from './layout/header';
import { Footer } from './layout/footer';

// UI Components
import { GridBackground } from './ui/grid-background';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { PageTransition } from './ui/page-transition';
import { Spinner } from './ui/spinner';

export const Components = {
  Features: {
    HeroSection,
    FAQ,
    Testimonials,
    Auth: {
      LoginForm,
      RegisterForm,
    },
  },
  Layout: {
    Header,
    Footer,
  },
  UI: {
    Button,
    GridBackground,
    Input,
    PageTransition,
    Spinner,
  },
}
