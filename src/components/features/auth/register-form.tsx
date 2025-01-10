'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Components } from '@/components';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de registro
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
          Comece sua jornada
        </h2>
        <p className="mt-2 text-gray-400">
          Crie sua conta e inicie seu aprendizado em Libras
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <Components.UI.Input
            label="Nome completo"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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

        <Components.UI.Button type="submit" className="w-full">
          Criar conta
        </Components.UI.Button>

        <p className="text-center text-sm text-gray-400">
          Já tem uma conta?{' '}
          <Link href="/login" className="text-cyan-500 hover:text-cyan-400">
            Faça login
          </Link>
        </p>
      </form>
    </div>
  );
}

