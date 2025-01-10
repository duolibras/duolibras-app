import { Components } from "@/components";

export default function  PrivacyPolicyPage(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Components.UI.GridBackground />
      <div className="relative z-10">
        <Components.Layout.Header />
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6">1. Coleta de Dados</h2>
            <p className="mb-6">
              Coletamos os seguintes tipos de informações:
              <br />
              - Dados de cadastro (nome, email, etc)
              <br />
              - Dados de uso do aplicativo
              <br />
              - Dados de progresso nas lições
              <br />
              - Imagens para reconhecimento de sinais (processadas localmente)
            </p>

            <h2 className="text-2xl font-bold mb-6">2. Uso dos Dados</h2>
            <p className="mb-6">
              Utilizamos seus dados para:
              <br />
              - Fornecer e melhorar nossos serviços
              <br />
              - Personalizar sua experiência de aprendizado
              <br />
              - Enviar atualizações e comunicações relevantes
              <br />
              - Garantir a segurança da plataforma
            </p>

            <h2 className="text-2xl font-bold mb-6">3. Proteção de Dados</h2>
            <p className="mb-6">
              - Implementamos medidas de segurança técnicas e organizacionais
              <br />
              - Seus dados são criptografados em trânsito e em repouso
              <br />
              - Acesso restrito apenas a funcionários autorizados
            </p>

            <h2 className="text-2xl font-bold mb-6">4. Compartilhamento de Dados</h2>
            <p className="mb-6">
              - Não vendemos seus dados pessoais
              <br />
              - Compartilhamos apenas com prestadores de serviço necessários
              <br />
              - Podemos compartilhar dados agregados e anônimos
            </p>

            <h2 className="text-2xl font-bold mb-6">5. Seus Direitos (LGPD)</h2>
            <p className="mb-6">
              Você tem direito a:
              <br />
              - Acessar seus dados
              <br />
              - Corrigir dados incorretos
              <br />
              - Solicitar exclusão de dados
              <br />
              - Exportar seus dados
            </p>

            <h2 className="text-2xl font-bold mb-6">6. Cookies e Tecnologias Similares</h2>
            <p className="mb-6">
              - Usamos cookies para melhorar sua experiência
              <br />
              - Você pode controlar cookies nas configurações do navegador
              <br />
              - Cookies essenciais não podem ser desabilitados
            </p>

            <h2 className="text-2xl font-bold mb-6">7. Contato</h2>
            <p className="mb-6">
              Para questões sobre privacidade, entre em contato:
              <br />
              Email: privacidade@duolibras.com.br
            </p>

            <h2 className="text-2xl font-bold mb-6">8. Atualizações da Política</h2>
            <p className="mb-6">
              Esta política pode ser atualizada. Notificaremos sobre mudanças significativas.
              Última atualização: Janeiro de 2025.
            </p>
          </div>
        </div>
        <Components.Layout.Footer />
      </div>
    </div>
  );
};
