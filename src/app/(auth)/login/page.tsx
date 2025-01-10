import { Components } from '@/components';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Components.UI.PageTransition>
      <div className="min-h-screen bg-black">
        <Components.UI.GridBackground />
        <div className="relative z-10">
          <div className="container mx-auto px-6 py-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              DuoLibras
            </Link>
          </div>
          <main className="flex min-h-[calc(100vh-120px)] items-center justify-center px-6">
            <Components.Features.Auth.LoginForm />
          </main>
        </div>
      </div>
    </Components.UI.PageTransition>
  );
}
