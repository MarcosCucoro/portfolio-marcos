import { Heart } from 'lucide-react';

import { socialLinks } from '../../data/socialLinks';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2 justify-center md:justify-start">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por Marcos
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              &copy; 2026 Marcos. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a key={index} href={url} target="_blank" className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
