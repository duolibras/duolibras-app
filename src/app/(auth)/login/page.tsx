"use client"

import { Components } from '@/components';
import { LoginContent } from './components/login-content';
import { useAuth } from '@/domains/auth/context/auth-context';


export default function LoginPage() {
  const { useSignIn } = useAuth()
  const { isPending, error } = useSignIn()
  
  if (isPending) {
    return (
      <Components.UI.PageTransition>
        <div className="min-h-screen bg-black">
          <p>loading...</p>
          {/* <Components.UI.Loading /> */}
        </div>
      </Components.UI.PageTransition>
    );
  }

  if (error) {
    return (
      <Components.UI.PageTransition>
        <div className="min-h-screen bg-black">
          <p>error...</p>
          {/* <Components.UI.Loading /> */}
        </div>
      </Components.UI.PageTransition>
    );
  }

  return (
    <Components.UI.PageTransition>
      <div className="min-h-screen bg-black">
        <LoginContent />
      </div>
    </Components.UI.PageTransition>
  );
}
