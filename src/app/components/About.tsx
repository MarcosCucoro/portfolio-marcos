import programadorImg from '@/assets/programador.png';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white">
          Sobre mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 text-wrap md:text-left">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Sou um desenvolvedor front-end apaixonado por criar interfaces web bonitas e funcionais.
              Com experiência em React, TypeScript e design responsivo, transformo ideias em realidade digital.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Meu foco está em escrever código limpo, manutenível e performático, sempre buscando as melhores práticas e tecnologias mais recentes do mercado.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Quando não estou codando, você me encontrará aprendendo novas tecnologias, contribuindo para projetos open source ou compartilhando conhecimento com a comunidade.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={programadorImg}
                alt="Caricatura" 
                className="w-full h-auto" />
              <legend className="text-sm absolute bottom-0 left-0 right-0 bg-black/10 text-white/20 text-center py-1">
                Imagem ilustrativa, criada por IA a partir de uma foto minha real.
              </legend>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
