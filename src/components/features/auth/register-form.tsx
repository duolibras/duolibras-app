'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Components } from '@/components';
import { useAuth } from '@/domains/auth/context/auth-context';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { createUserSchema } from '@/domains/auth/api/models/auth-dto';

type UserType = 'student' | 'teacher';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserType>('student');
  
  const router = useRouter();
  const { useStudentSignUp, useTeacherSignUp } = useAuth();
  
  const { mutate: studentSignUp, isPending: isStudentSignUpPending } = useStudentSignUp({
    onError: (error) => {
      toast.error(error.message, { id: 'register' });
      console.log('Erro ao realizar registro de estudante', error);
    },
    onSuccess: () => {
      toast.success('Registro de estudante realizado com sucesso', { id: 'register' });
      router.push('/login');
    },
  });

  const { mutate: teacherSignUp, isPending: isTeacherSignUpPending } = useTeacherSignUp({
    onError: (error) => {
      toast.error(error.message, { id: 'register' });
      console.log('Erro ao realizar registro de professor', error);
    },
    onSuccess: () => {
      toast.success('Registro de professor realizado com sucesso', { id: 'register' });
      router.push('/login');
    },
  });

  const isPending = isStudentSignUpPending || isTeacherSignUpPending;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = createUserSchema.safeParse({ name, email, password });
    if (!result.success) {
      console.log(result.error.errors);
      const errorMessages = result.error.errors.map((err: any) => err.message).join(', ');
      toast.error(errorMessages, { id: 'register-validation' });
      return;
    }
    
    const userData = { name, email, password };
    
    if (userType === 'student') {
      studentSignUp(userData);
    } else {
      teacherSignUp(userData);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
          Comece sua jornada
        </h2>
        <p className="mt-2 text-gray-400">
          Crie sua conta e { userType === "student" ? "inicie seu aprendizado em Libras" : "compartilhe seus conhecimentos" }
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
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Tipo de Conta
            </label>
            <div className="flex gap-4">
              <Components.UI.Button
                type="button"
                variant={userType === 'student' ? 'primary' : 'secondary'}
                className="flex-1"
                onClick={() => setUserType('student')}
              >
                Estudante
              </Components.UI.Button>
              <Components.UI.Button
                type="button"
                variant={userType === 'teacher' ? 'primary' : 'secondary'}
                className="flex-1"
                onClick={() => setUserType('teacher')}
              >
                Professor
              </Components.UI.Button>
            </div>
          </div>
        </div>

        <Components.UI.Button 
          type="submit" 
          className="w-full py-4 flex align-center justify-center"
        >
          {isPending ? (
            <Components.UI.Spinner />
          ) : (
            `Criar conta como ${userType === 'student' ? 'Estudante' : 'Professor'}`
          )}
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
