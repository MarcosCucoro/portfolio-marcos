import { Briefcase, CircleCheckBig, Code, Globe, Palette, Server, Zap } from 'lucide-react';

export default function Skills() {
  const skillExperience = [
    {
      icon: Briefcase,
      title: 'Experiência',
      skills: ['Desenvolvimento de sistemas com Angular em ambiente produtivo', 'Integração e consumo de APIs REST', 'Otimização de performance em consultas com grandes volumes de dados (Firebase)', 'Participação em projetos end-to-end (do levantamento à entrega)'],
    }
  ];

  const skillsCategories = [
    {
      icon: Code,
      title: 'Core',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    },
    {
      icon: Zap,
      title: 'Frameworks',
      skills: ['Angular', 'Angular Material', 'RxJS', 'Tailwind CSS', 'React'],
    },
    {
      icon: Palette,
      title: 'Design',
      skills: ['Figma (handoff)', 'Responsive Design', 'Flexbox & Grid'],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['C#', '.NET / ASP.NET Core', 'REST API', 'SQL'],
    },
    {
      icon: Globe,
      title: 'Ferramentas',
      skills: ['Git', 'VS Code', 'Angular CLI', 'Postman'],
    },
    {
      icon: CircleCheckBig,
      title: 'Boas práticas',
      skills: ['Componentização', 'Clean Code', 'Organização de código', 'Boas práticas de integração com APIs']
    }

  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white">
          Habilidades
        </h2>

        <div className="grid md:grid-cols lg:grid-cols mb-12 gap-18 max-w-6xl mx-auto">
          {skillExperience.map((category, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg'>
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-blue-400/10 px-3 py-2 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-18 max-w-6xl mx-auto">
          {skillsCategories.map((category, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg'>
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-blue-400/10 px-3 py-2 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
