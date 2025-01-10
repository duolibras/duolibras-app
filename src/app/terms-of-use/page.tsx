import { Components } from "@/components";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Components.UI.GridBackground />      
      <div className="relative z-10">
        <Components.Layout.Header />
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
            Termos de Uso
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6">1. Aceitação dos Termos</h2>
            <p className="mb-6">
              Ao acessar e usar o DuoLibras, você concorda com estes Termos de Uso e todas as leis e regulamentos aplicáveis.
              Se você não concordar com algum destes termos, está proibido de usar o serviço.
            </p>

            <h2 className="text-2xl font-bold mb-6">2. Uso da Conta</h2>
            <p className="mb-6">
              - Você é responsável por manter a confidencialidade de sua conta e senha.
              <br />
              - As contas são pessoais e intransferíveis.
              <br />
              - Você deve ter pelo menos 13 anos para criar uma conta.
            </p>

            <h2 className="text-2xl font-bold mb-6">3. Conteúdo e Direitos Autorais</h2>
            <p className="mb-6">
              - Todo o conteúdo disponível no DuoLibras é protegido por direitos autorais.
              <br />
              - É proibido copiar, modificar ou distribuir o conteúdo sem autorização.
              <br />
              - O uso do conteúdo é permitido apenas para fins educacionais pessoais.
            </p>

            <h2 className="text-2xl font-bold mb-6">4. Assinaturas e Pagamentos</h2>
            <p className="mb-6">
              - Oferecemos conteúdo gratuito e premium através de assinatura.
              <br />
              - Os preços e condições das assinaturas estão sujeitos a alterações.
              <br />
              - Cancelamentos podem ser feitos a qualquer momento.
            </p>

            <h2 className="text-2xl font-bold mb-6">5. Conduta do Usuário</h2>
            <p className="mb-6">
              - Respeite outros usuários e a comunidade.
              <br />
              - Não compartilhe conteúdo ofensivo ou inadequado.
              <br />
              - Não tente burlar o sistema ou usar de má fé.
            </p>

            <h2 className="text-2xl font-bold mb-6">6. Modificações dos Termos</h2>
            <p className="mb-6">
              O DuoLibras reserva-se o direito de modificar estes termos a qualquer momento.
              Alterações significativas serão notificadas aos usuários.
            </p>
          </div>
        </div>
        <Components.Layout.Footer />
      </div>
    </div>
  );
};
