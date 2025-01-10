'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Components } from '@/components'

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de login
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

        <Components.UI.Button type="submit" className="w-full">
          Entrar
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
