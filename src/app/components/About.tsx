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
              Sou desenvolvedor front-end com experiência em Angular, TypeScript e integração com APIs, atuando na construção de interfaces web funcionais, responsivas e voltadas à experiência do usuário.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Também possuo vivência com back-end em C# e Firebase, o que me permite ter uma visão mais completa do funcionamento dos sistemas e colaborar de forma mais eficiente entre as camadas da aplicação.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Atualmente, estou me aprofundando em React, e este portfólio foi desenvolvido com React e Tailwind CSS como parte dessa evolução contínua, aplicando na prática conceitos modernos do ecossistema front-end.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Tenho como foco escrever código limpo, manutenível e performático, sempre alinhado às boas práticas e à evolução constante das tecnologias.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Nas horas vagas, dedico parte do meu tempo ao estudo de inglês e jogar CS2 para relaxar.            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={programadorImg}
                alt="Caricatura"
                className="w-full h-auto" />
              <legend className="text-sm absolute bottom-0 left-0 right-0 bg-black/10 text-white/10 text-center py-1">
                Imagem ilustrativa, criada por IA a partir de uma foto real.
              </legend>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
