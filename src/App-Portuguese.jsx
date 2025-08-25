import React from 'react';
import './App.css';
import { 
  Shield, 
  TrendingUp, 
  Rocket, 
  Zap, 
  MessageSquare, 
  Database, 
  PenTool, 
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Lock,
  BarChart3,
  Globe,
  Award
} from 'lucide-react';

// Import das imagens
import llmArchitecture from './assets/rahJP7cgcjVt.png';
import aiDashboard from './assets/W6rs6LbQIOJj.png';
import dataAnalytics from './assets/SDGBXYO0Hjfm.webp';
import dataSecurity from './assets/uObyGXt0lSE6.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-blue-900">NowGo</span>
                <span className="nowgo-gradient-text"> AI</span>
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#produto" className="text-gray-700 hover:text-blue-900 transition-colors">Produto</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-900 transition-colors">Benefícios</a>
              <a href="#casos-uso" className="text-gray-700 hover:text-blue-900 transition-colors">Casos de Uso</a>
              <a href="#precos" className="text-gray-700 hover:text-blue-900 transition-colors">Preços</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-900 transition-colors">Contato</a>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Parceiro Oficial NVIDIA
              </span>
              <button className="nowgo-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Implementar Agora
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              LLM Empresarial
              <span className="block nowgo-gradient-text">Customizado</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-shadow">
              Transforme seus dados internos em vantagem competitiva com IA proprietária. 
              Aumente o valuation da sua empresa em até 50% com dados 100% protegidos.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="stats-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold nowgo-gradient-text">50%+</div>
                <div className="text-sm">Aumento Valuation</div>
              </div>
              <div className="stats-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold nowgo-gradient-text">74%</div>
                <div className="text-sm">ROI Positivo</div>
              </div>
              <div className="stats-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold nowgo-gradient-text">100%</div>
                <div className="text-sm">Dados Protegidos</div>
              </div>
              <div className="stats-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold nowgo-gradient-text">24h</div>
                <div className="text-sm">Implementação</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="nowgo-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 flex items-center justify-center">
                Criar Meu LLM Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="nowgo-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">
                Ver Demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que LLM Customizado é o 
              <span className="nowgo-gradient-text"> Futuro da sua Empresa</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas que implementam IA interna estão vendo transformações revolucionárias 
              em produtividade, segurança e valuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="w-16 h-16 nowgo-primary rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seus Dados, Sua IA</h3>
              <p className="text-gray-600 mb-4">
                Banco de dados interno isolado. Zero compartilhamento. Máxima segurança 
                com compliance LGPD/GDPR automático.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Ambiente isolado</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Criptografia militar</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Zero data leakage</li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="w-16 h-16 nowgo-secondary rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI de 74% em 6 Meses</h3>
              <p className="text-gray-600 mb-4">
                Empresas com IA interna reportam aumento médio de 30%+ no ROI 
                e 6.8x maior retorno com infraestrutura flexível.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />80% redução custos</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />300% produtividade</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />ROI mensurável</li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="w-16 h-16 nowgo-accent rounded-lg flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valuation +50%</h3>
              <p className="text-gray-600 mb-4">
                Empresas com IA proprietária veem aumento de 50%+ no valuation. 
                Mercado de $1.81 trilhão valoriza inovação interna.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Vantagem competitiva</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Liderança inovação</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Valuation premium</li>
              </ul>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pronto em 24h</h3>
              <p className="text-gray-600 mb-4">
                Implementação automatizada. Sem complexidade técnica. 
                Sua equipe começa a usar no primeiro dia.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Setup automático</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Plug & play</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Treinamento incluso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="casos-uso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              4 Casos de Uso com 
              <span className="nowgo-gradient-text"> Maior ROI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme seus processos com IA customizada e veja resultados mensuráveis 
              desde o primeiro mês de implementação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Use Case 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 nowgo-primary rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">FAQ AI Agents</h3>
                  <p className="text-green-600 font-semibold">ROI: 80% redução custos</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Atendimento 24/7 automatizado com precisão de 95%+. Uma empresa de e-commerce 
                global economiza R$ 2.4 milhões anuais automatizando 80% das 50.000 consultas diárias.
              </p>
              <div className="bg-white rounded-lg p-4">
                <img src={aiDashboard} alt="AI Dashboard" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 nowgo-secondary rounded-lg flex items-center justify-center mr-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Natural Language to SQL</h3>
                  <p className="text-green-600 font-semibold">ROI: 300% produtividade</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Democratização de dados para 100% da equipe. Qualquer funcionário obtém insights 
                instantâneos sem depender do TI. Decisões baseadas em dados em tempo real.
              </p>
              <div className="bg-white rounded-lg p-4">
                <img src={dataAnalytics} alt="Data Analytics" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 nowgo-accent rounded-lg flex items-center justify-center mr-4">
                  <PenTool className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Criação de Conteúdo IA</h3>
                  <p className="text-green-600 font-semibold">ROI: 60% redução custos</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Conteúdo personalizado em escala com consistência de marca 100%. 
                Empresa B2B cria 50 posts semanais com 90% menos tempo de produção.
              </p>
              <div className="bg-white rounded-lg p-4">
                <img src={llmArchitecture} alt="LLM Architecture" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sales AI Workers</h3>
                  <p className="text-green-600 font-semibold">ROI: 40% conversões</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Qualificação automática de 100% dos leads com previsão de vendas 90% precisa. 
                Empresa de software B2B aumentou conversões em 40% e reduziu ciclo em 50%.
              </p>
              <div className="bg-white rounded-lg p-4">
                <img src={dataSecurity} alt="Data Security" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 nowgo-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              O Mercado de IA Empresarial Está Explodindo
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-shadow">
              Dados comprovam: empresas que implementam IA interna hoje se tornam 
              líderes de mercado amanhã.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 nowgo-gradient-text">$95B</div>
              <div className="text-lg">Investidos em IA em 2024</div>
              <div className="text-sm opacity-80">Recorde histórico</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 nowgo-gradient-text">71%</div>
              <div className="text-lg">Empresas usam IA generativa</div>
              <div className="text-sm opacity-80">Crescimento de 33% em 2023</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 nowgo-gradient-text">$1.81T</div>
              <div className="text-lg">Projeção do mercado</div>
              <div className="text-sm opacity-80">Crescimento exponencial</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 nowgo-gradient-text">79%</div>
              <div className="text-lg">Adotam agentes de IA</div>
              <div className="text-sm opacity-80">Automação avançada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Segurança de 
                <span className="nowgo-gradient-text"> Nível Militar</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Seus dados nunca saem do seu controle. Arquitetura isolada com 
                criptografia end-to-end e compliance automático.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Lock className="h-6 w-6 text-green-400 mr-3" />
                  <span>Banco de dados interno isolado</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-green-400 mr-3" />
                  <span>Criptografia militar end-to-end</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-green-400 mr-3" />
                  <span>Compliance LGPD/GDPR automático</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-green-400 mr-3" />
                  <span>Auditoria completa de acesso</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span>Zero data leakage garantido</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 animate-float">
                <img src={dataSecurity} alt="Data Security Architecture" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Implementação em 
              <span className="nowgo-gradient-text"> 3 Passos Simples</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Em 24 horas, sua empresa tem uma IA proprietária funcionando. 
              Processo 100% automatizado, sem complexidade técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 nowgo-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análise dos Dados</h3>
              <p className="text-gray-600">
                Upload seguro de documentos, planilhas, PDFs, imagens e vídeos. 
                IA analisa estrutura e mapeia casos de uso automaticamente.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 nowgo-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customização do LLM</h3>
              <p className="text-gray-600">
                Fine-tuning automático com seus dados. Testes de qualidade, 
                validação de segurança e otimização de performance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 nowgo-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deploy e Integração</h3>
              <p className="text-gray-600">
                Ambiente isolado criado, integração com sistemas existentes 
                e treinamento da equipe. Pronto para usar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Investimento que se 
              <span className="nowgo-gradient-text"> Paga em 6 Meses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Com ROI médio de 74% em 6 meses, o investimento em LLM customizado 
              se paga rapidamente através de economia e aumento de receita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">R$ 50.000</div>
                <div className="text-gray-600">/mês</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>LLM básico customizado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>1TB de dados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Suporte 8x5</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Até 500 funcionários</span>
                </li>
              </ul>
              <button className="w-full nowgo-primary text-white py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Começar Agora
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Mais Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">R$ 150.000</div>
                <div className="text-gray-600">/mês</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>LLM avançado customizado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>10TB de dados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Suporte 24x7</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Até 2.000 funcionários</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Integrações avançadas</span>
                </li>
              </ul>
              <button className="w-full nowgo-secondary text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
                Implementar Agora
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Customizado</div>
                <div className="text-gray-600">sob consulta</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>LLM totalmente customizado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dados ilimitados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Suporte dedicado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Grandes corporações</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>SLA personalizado</span>
                </li>
              </ul>
              <button className="w-full nowgo-accent text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Empresas que Já 
              <span className="nowgo-gradient-text"> Transformaram seu Negócio</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "A parceria com NowGo AI foi essencial para o desenvolvimento de projetos 
                de IA dentro do programa Inovaskill. O suporte foi crucial para resultados 
                práticos e inovadores."
              </p>
              <div className="font-semibold text-gray-900">Tiago Goulart</div>
              <div className="text-gray-600">CEO e Fundador, Mentto</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "NowGo AI transformou a educação e o ecossistema empresarial em São Paulo. 
                Criamos o primeiro currículo de IA no Colégio Tecnológico, beneficiando 
                mais de 80.000 jovens talentos."
              </p>
              <div className="font-semibold text-gray-900">Matheus</div>
              <div className="text-gray-600">DEV, Intercept Rx</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Ter a equipe NowGo AI como mentores foi um privilégio. Sua expertise 
                em IA e visão estratégica foram essenciais para o sucesso dos 
                empreendedores, com 100% de feedback positivo."
              </p>
              <div className="font-semibold text-gray-900">Ana Paula Costa</div>
              <div className="text-gray-600">Bluefields Accelerator</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 nowgo-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            Pronto para Multiplicar o 
            <span className="nowgo-gradient-text"> Valuation da sua Empresa?</span>
          </h2>
          <p className="text-xl mb-8 text-shadow">
            Não fique para trás na revolução da IA. Empresas que implementam IA interna 
            hoje se tornam líderes de mercado amanhã. Com valuation aumentando 50%+ e ROI de 74%, 
            o momento é agora.
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Garantia de Resultados</h3>
            <p className="text-lg">
              Garantimos ROI positivo em 6 meses ou devolvemos seu investimento. 
              Nossa confiança vem de centenas de implementações bem-sucedidas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center">
              Implementar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
              Agendar Demonstração
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold">
                  <span className="text-white">NowGo</span>
                  <span className="nowgo-gradient-text"> AI</span>
                </span>
              </div>
              <p className="text-gray-400">
                Transformando empresas com IA customizada e dados protegidos.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LLM Customizado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Sucesso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@nowgoai.com</li>
                <li>+55 11 99999-9999</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NowGo AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
