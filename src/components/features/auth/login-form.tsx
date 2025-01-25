'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Components } from '@/components'
import { useAuth } from '@/domains/auth/context/auth-context';
import { signInSchema } from '@/domains/auth/api/models/auth-dto';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const router = useRouter();
  const { useSignIn } = useAuth()
  const { mutate: signIn, isPending } = useSignIn({
    onMutate: () => {},
    onError: (error) => {
      toast.error(error.message, { id: 'login' });
      console.log('Erro ao realizar login', error);
    },
    onSuccess: () => {
      toast.success('Login realizado com sucesso', { id: 'login' });
      router.push('/waiting');
    },
  })
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = signInSchema.safeParse({ email, password });
    console.log(result);
    if (!result.success) {
      // Tratar erros de validação
      console.log(result.error.errors);
      return;
    }
    
    signIn({ email, password });
    
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
          Bem-vindo de volta!
        </h2>
        <p className="mt-2 text-gray-400">
          Continue sua jornada de aprendizado em Libras
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <Components.UI.Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Components.UI.Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
              Lembrar-me
            </label>
          </div>

          <div className="text-sm">
            <Link href="/recuperar-senha" className="text-cyan-500 hover:text-cyan-400">
              Esqueceu sua senha?
            </Link>
          </div>
        </div>

        <Components.UI.Button type="submit" className="w-full py-4 flex align-center justify-center">
          { isPending ? <Components.UI.Spinner /> :  "Entrar" }
          </Components.UI.Button>

        <p className="text-center text-sm text-gray-400">
          Não tem uma conta?{' '}
          <Link href="/register" className="text-cyan-500 hover:text-cyan-400">
            Registre-se
          </Link>
        </p>
      </form>
    </div>
  );
}
