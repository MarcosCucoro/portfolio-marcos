# 💼 Portfólio Marcos

Um portfólio web moderno e responsivo, desenvolvido com React, TypeScript e Vite. Apresenta uma interface elegante com tema claro/escuro, seções de apresentação, projetos e contato.

## ✨ Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Tema Claro/Escuro**: Toggle de tema para uma melhor experiência do usuário
- **Performance Otimizada**: Construído com Vite para build rápido e desenvolvimento eficiente
- **TypeScript**: Código tipado para maior segurança e mantenibilidade
- **Componentes Modulares**: Estrutura limpa e organizada
- **Links Sociais**: Integração com redes sociais (GitHub, LinkedIn, Email)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── App.tsx              # Componente principal
│   └── components/
│       ├── Header.tsx       # Navegação
│       ├── Hero.tsx         # Seção inicial de apresentação
│       ├── About.tsx        # Sobre mim
│       ├── Skills.tsx       # Habilidades técnicas
│       ├── Projects.tsx     # Portfólio de projetos
│       ├── Contact.tsx      # Formulário de contato
│       ├── Footer.tsx       # Rodapé
│       ├── SocialLinks.tsx  # Links sociais
│       └── ThemeToggle.tsx  # Alternador de tema
├── data/
│   └── socialLinks.ts       # Dados dos links sociais
├── models/
│   └── socialLink.ts        # Type de link social
├── styles/
│   └── theme.css            # Estilos e temas
├── assets/                  # Imagens e recursos
├── index.css                # Estilos globais
└── main.tsx                 # Ponto de entrada
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/MarcosCucoro/portfolio-marcos.git
cd portfolio-marcos
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento com HMR
npm run dev

# Build para produção
npm build

# Preview da build
npm run preview

# Lint do código
npm run lint
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **ESLint** - Linter para qualidade de código

## 📄 Seções Principais

- **Hero**: Apresentação inicial com chamada para ação
- **About**: Informações pessoais e biografia
- **Skills**: Habilidades técnicas e ferramentas
- **Projects**: Galeria de projetos e trabalhos realizados
- **Contact**: Formulário e links para entrarem em contato

## 🎨 Personalização

Para personalizar o portfólio:

1. **Social Links**: Edite `src/data/socialLinks.ts` com seus links
2. **Temas**: Modificar `src/styles/theme.css` para ajustar cores
3. **Conteúdo**: Atualize os componentes em `src/app/components/`

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta para:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (até 767px)

## 📝 Licença

Este projeto é de código aberto. Sinta-se livre para usar e adaptar conforme necessário.

---

**Desenvolvido com ❤️ por Marcos**
```
