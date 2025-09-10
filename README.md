# Vue Slots & Router Research

<div align="center">
  <img src="https://vuejs.org/images/logo.png" alt="Vue.js Logo" width="100" />
  
  <h3>✨ Um site educativo sobre slots e roteamento no Vue.js ✨</h3>
  
  <p>
    <a href="#visão-geral">Visão Geral</a> •
    <a href="#demonstração">Demonstração</a> •
    <a href="#recursos">Recursos</a> •
    <a href="#tecnologias">Tecnologias</a> •
    <a href="#instalação">Instalação</a> •
    <a href="#uso">Uso</a> •
    <a href="#estrutura-do-projeto">Estrutura do Projeto</a> •
    <a href="#licença">Licença</a>
  </p>
</div>

## Visão Geral

Este projeto é um site educativo que explora e demonstra dois conceitos fundamentais do Vue.js: **Slots** e **Vue Router**. Com uma interface temática espacial elegante, efeitos visuais suaves e conteúdo educativo detalhado, o site serve tanto como uma referência para aprendizado quanto como uma demonstração prática dos conceitos apresentados.

O site foi construído com foco na experiência do usuário, oferecendo:

- Navegação intuitiva entre seções de conteúdo
- Exemplos práticos e explicações detalhadas
- Efeitos visuais e animações espaciais
- Cursor personalizado interativo
- Interface responsiva para diferentes dispositivos

## Demonstração

O site é dividido em quatro seções principais:

1. **Home**: Página inicial com uma visão geral do projeto e links para as seções
2. **Slots**: Explicação detalhada sobre slots no Vue.js, incluindo slots nomeados, escopo e exemplos práticos
3. **Vue Router**: Guia completo sobre o Vue Router, sua implementação e uso
4. **Prática**: Demonstrações interativas combinando slots e router em exemplos funcionais

## Recursos

### Seção de Slots
- Explicações detalhadas sobre o que são slots no Vue.js
- Demonstrações de uso de slots padrão, nomeados e com escopo
- Exemplos práticos com código
- Casos de uso comuns e melhores práticas

### Seção de Vue Router
- Introdução ao Vue Router e sua importância em aplicações Single Page
- Explicação dos componentes principais: `<RouterView>` e `<RouterLink>`
- Configuração de rotas e opções avançadas
- Técnicas de navegação e gerenciamento de estado

### Elementos Visuais
- Tema espacial com planetas, estrelas cadentes e asteroides animados
- Cursor personalizado com efeitos de hover e clique
- Animações suaves para elementos da página
- Transições entre rotas para uma navegação fluida

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Vue.js 3**: Framework progressivo para construção de interfaces de usuário
- **Vue Router 4**: Roteamento oficial para aplicações Vue.js
- **Vite**: Build tool e servidor de desenvolvimento ultrarrápido
- **CSS3**: Animações avançadas e efeitos visuais personalizados
- **HTML5**: Estrutura semântica para melhor acessibilidade

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/vue-slots-router-research.git

# Entre na pasta do projeto
cd vue-slots-router-research

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento local
npm run dev

# Para gerar uma versão de produção (não é necessário para deploy na Vercel)
# npm run build
```

## Uso

Após iniciar o servidor de desenvolvimento, o site estará disponível em `http://localhost:5173/`. 

Navegue pelas diferentes seções do site usando a barra de navegação no topo. Cada página contém exemplos interativos e explicações detalhadas sobre os conceitos de slots e router no Vue.js.

## Deploy

### Deploy na Vercel

Este projeto está configurado para ser facilmente implantado na Vercel. Siga os passos abaixo:

1. **Conecte seu repositório GitHub à Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login ou crie uma conta
   - Clique em "New Project"
   - Importe este repositório do GitHub
   
2. **Configuração do Projeto**
   - Framework Preset: Vue.js
   - Build Command: `npm run build` (A Vercel executará isto automaticamente)
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Configurações Avançadas**
   - Não é necessário adicionar variáveis de ambiente para este projeto
   - Você pode configurar um domínio personalizado nas configurações do projeto após o deploy

A Vercel irá automaticamente construir e implantar seu site. Nenhuma configuração adicional é necessária.

## Estrutura do Projeto

```
vue-slots-router-research/
├── public/                # Arquivos estáticos
├── src/                   # Código fonte
│   ├── assets/            # Recursos (CSS, imagens)
│   │   ├── base.css       # Estilos base
│   │   └── main.css       # Estilos principais e animações
│   ├── components/        # Componentes Vue reutilizáveis
│   │   ├── ButtonWithSlot.vue    # Exemplo de botão com slot
│   │   ├── CardComponent.vue     # Componente de card
│   │   └── SlotExample.vue       # Exemplo de uso de slots
│   ├── router/            # Configuração do Vue Router
│   │   └── index.js       # Definições de rotas
│   ├── views/             # Componentes de página
│   │   ├── HomeView.vue   # Página inicial
│   │   ├── SlotsView.vue  # Página sobre slots
│   │   ├── RouterView.vue # Página sobre Vue Router
│   │   └── PracticeView.vue # Página com exemplos práticos
│   ├── App.vue            # Componente raiz
│   └── main.js            # Ponto de entrada da aplicação
├── index.html             # Template HTML
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── README.md              # Este arquivo
```

## Recursos Avançados

### Cursor Personalizado
O site implementa um cursor personalizado que segue o movimento do mouse com um efeito suave e reage a elementos clicáveis, melhorando a experiência interativa do usuário.

### Animações Espaciais
Elementos visuais temáticos como planetas flutuantes, estrelas cadentes e asteroides são animados para criar uma atmosfera imersiva que complementa o conteúdo educativo.

### Transições de Página
As transições entre páginas são suavizadas com efeitos fade para proporcionar uma experiência de navegação contínua e agradável.

## Melhores Práticas Implementadas

1. **Componentização**: Código organizado em componentes reutilizáveis
2. **Lazy Loading**: Carregamento sob demanda de componentes de página
3. **Separação de Responsabilidades**: Lógica, apresentação e estilo bem definidos
4. **Código Limpo**: Estrutura organizada e comentada
5. **Responsividade**: Design adaptável para diferentes tamanhos de tela

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ por jimmyadmsenior</p>
</div>

