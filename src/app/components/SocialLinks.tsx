import { Mail } from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

export default function SocialLinks({ className = "" }) {
  const socialLinks = [
    {
      icon: LuGithub,
      url: "https://github.com/MarcosCucoro",
    },
    {
      icon: LuLinkedin,
      url: "https://www.linkedin.com/in/marcoscucoro/",
    },
    {
      icon: Mail,
      url: "mailto:marcos.cucoro@hotmail.com",
    },
  ];

  return (
    <div className={`${className}`}>
      {socialLinks.map(({ icon: Icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  )
}
