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
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white">
            Entre em Contato
          </h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto text-white text-center">
            <div className="order-1 md:order-1  text-left flex-wrap">
              <h3 className="mb-2 text-2xl text-gray-900 dark:text-white">Vamos trabalhar juntos</h3>
              <p className="mb-6 text-md text-gray-900/80 dark:text-white/80">Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.</p>
            </div>
            <div className="order-2 md:order-2 ">
              <div className="flex flex-col text-left gap-4 mb-4">
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
          </div>
      </div>
    </section>
  )
}
