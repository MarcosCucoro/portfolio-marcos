import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import rickyMorty from '@/assets/ricky_morty.png'
import currencyConverter from '@/assets/currency_converter.png'
import portfolio from '@/assets/portfolio.png'

export default function Projects() {
  const projects = [
    {
      image: rickyMorty,
      title: 'Rick and Morty Universe Explorer',
      description: 'Um projeto que utiliza a API do Rick and Morty para criar um explorador interativo dos personagens, episódios e locais da série. O aplicativo é construído com Angular permitindo aos usuários navegar por informações detalhadas sobre o universo de Rick and Morty, incluindo filtros avançados e uma interface amigável.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'RxJS', 'Angular CLI', 'API REST'],
      github: 'https://github.com/MarcosCucoro/rick_morty',
      demo: 'https://rick-morty-gold.vercel.app'
    },
    {
      image: currencyConverter,
      title: 'Currency Converter',
      description: 'Um projeto que permite a conversão de moedas em tempo real, utilizando uma API de câmbio atualizada. O aplicativo é construído com Angular e oferece uma interface simples e intuitiva para os usuários.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'RxJS', 'Angular CLI', 'API REST'],
      github: 'https://github.com/MarcosCucoro/currency_converter',
      demo: ''
    },
    {
      image: portfolio,
      title: 'Portfólio Pessoal',
      description: 'Meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, experiências e projetos. Construído com React e Tailwind CSS, o site é responsivo e otimizado para uma experiência de usuário fluida.',
      technologies: ['React', 'Tailwind CSS'],
      github: 'https://github.com/MarcosCucoro/portfolio-marcos',
      demo: 'https://portfolio-marcos-zeta.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white">
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-900/70 dark:text-white/70">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="inline-flex items-center rounded-md bg-blue-400/10 mb-2 px-2 py-1 text-sm text-blue-400 inset-ring inset-ring-blue-400/30">{tech}</span>

                  ))}
                </div>
                <div className="flex items-center gap-4 text-gray-900/70 dark:text-white/70 ">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-blue-500">
                    <LuGithub className="w-5 h-5" />
                    <span>Código</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-blue-500">
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
