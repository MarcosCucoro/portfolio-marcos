import { Mail } from "lucide-react"
import { LuGithub, LuLinkedin } from "react-icons/lu"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6 text-gray-900 dark:text-white">
            Olá, Eu sou <span className="text-blue-600">Marcos</span>!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Criando experiências digitais incríveis com código limpo e design moderno.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <a href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Ver Projetos
            </a>
            <a href="#contact"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hovar:border-blue-600 dark:hover:border-blue-400 rounded-lg transition-colors">
              Entre em Contato
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a href="#github"
              target="_blank"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <LuGithub className="w-5 h-5 text-gray-900 dark:text-white" />
            </a>
            <a href="#linkedin"
              target="_blank"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <LuLinkedin className="w-5 h-5 text-gray-900 dark:text-white" />
            </a>
            <a href="#mail"
              target="_blank"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Mail className="w-5 h-5 text-gray-900 dark:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
