import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      info: 'marcos.cucoro@hotmail.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 94201-0460'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, Brasil'
    }
  ]


  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-4 text-white text-center">
          <h2 className="col-span-6 col-start-1 text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white">
            Entre em Contato
          </h2>
          <div className="col-start-2 col-end-4 text-left flex-wrap">
            <h3 className="mb-2 text-2xl text-gray-900 dark:text-white">Vamos trabalhar juntos</h3>
            <p className="mb-6 text-md text-gray-900/80 dark:text-white/80">Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.</p>
            <div className="flex flex-col tems-center gap-4 mb-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className='p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg'>
                    <contact.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900/50 dark:text-white/50">{contact.title}</p>
                    <p className="text-md text-gray-900 dark:text-white">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 col-end-6">
            <form action="submit" className="flex flex-col text-left gap-4">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Nome</label>
                <div className="mt-1">
                  <div className="flex items-center rounded-md bg-white/5 pl-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                    <input id="username" type="text" name="username" placeholder="Seu nome" className="block min-w-0 grow bg-transparent py-3 pr-3 pl-1 text-md text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none sm:text-md/6" />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Email</label>
                <div className="mt-1">
                  <div className="flex items-center rounded-md bg-white/5 pl-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                    <input id="username" type="text" name="username" placeholder="Seu email" className="block min-w-0 grow bg-transparent py-3 pr-3 pl-1 text-md text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none sm:text-md/6" />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Mensagem</label>
                <div className="mt-1">
                  <div className="flex items-center rounded-md bg-white/5 pl-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                    <textarea id="about" name="about" rows={5} placeholder="Sua mensagem" className="block min-w-0 grow bg-transparent py-3 pr-3 pl-1 text-md text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none sm:text-md/6"></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-center ">
                <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-3 text-md font-semibold text-white hover:bg-blue-700">Enviar Mensagem</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
