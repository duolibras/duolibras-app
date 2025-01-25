"use client"

import { Components } from '@/components';
import { LoginContent } from './components/login-content';

export default function LoginPage() {
  return (
      <Components.UI.PageTransition>
        <div className="min-h-screen bg-black">
          <LoginContent />
        </div>
      </Components.UI.PageTransition>
  );
}
