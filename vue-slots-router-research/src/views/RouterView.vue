<template>
  <div class="router-view">
    <h1>Vue Router</h1>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>O que é o Vue Router?</h2>
      <p>
        <span class="highlight">Vue Router</span> é a biblioteca oficial de roteamento para Vue.js. 
        Ele permite a criação de aplicações de página única (SPA - Single Page Application) 
        com múltiplas "páginas" virtuais, sem a necessidade de recarregar a página inteira.
      </p>
      <p>
        Em uma SPA, o Vue Router gerencia a navegação substituindo partes do conteúdo 
        da página em vez de solicitar uma nova página do servidor. Isso resulta em uma experiência 
        mais fluida e rápida para o usuário, semelhante à de um aplicativo nativo.
      </p>
    </section>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>Papel do Vue Router em Aplicações Vue.js</h2>
      <p>O Vue Router desempenha vários papéis importantes:</p>
      <ul>
        <li>Mapear rotas (URLs) para componentes Vue específicos</li>
        <li>Suportar navegação sem recarregamento da página</li>
        <li>Gerenciar o histórico de navegação do navegador</li>
        <li>Fornecer transições entre rotas</li>
        <li>Implementar proteção de rotas (guards) para controle de acesso</li>
        <li>Possibilitar o carregamento dinâmico (lazy loading) de componentes</li>
        <li>Permitir rotas aninhadas e parâmetros dinâmicos</li>
      </ul>
    </section>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>Conceitos Básicos do Vue Router</h2>
      
      <h3>&lt;RouterView&gt;</h3>
      <p>
        <code>&lt;RouterView&gt;</code> é um componente funcional que renderiza o componente 
        correspondente à rota atual. É essencialmente um local reservado onde o Vue Router 
        exibirá o componente da rota ativa.
      </p>
      <pre><code>&lt;!-- App.vue --&gt;
&lt;template&gt;
  &lt;div id="app"&gt;
    &lt;header&gt;...&lt;/header&gt;
    
    &lt;!-- O componente da rota atual será renderizado aqui --&gt;
    &lt;RouterView /&gt;
    
    &lt;footer&gt;...&lt;/footer&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      
      <h3>&lt;RouterLink&gt;</h3>
      <p>
        <code>&lt;RouterLink&gt;</code> é um componente usado para criar links de navegação em sua 
        aplicação. Diferente da tag <code>&lt;a&gt;</code>, ele usa o modo de navegação do Vue Router 
        para evitar o recarregamento completo da página.
      </p>
      <pre><code>&lt;!-- Navegação básica --&gt;
&lt;RouterLink to="/"&gt;Home&lt;/RouterLink&gt;
&lt;RouterLink to="/about"&gt;About&lt;/RouterLink&gt;

&lt;!-- Com parâmetros --&gt;
&lt;RouterLink :to="{ name: 'user', params: { userId: 123 }}"&gt;Perfil do Usuário&lt;/RouterLink&gt;

&lt;!-- Com classe ativa --&gt;
&lt;RouterLink to="/blog" active-class="active-link"&gt;Blog&lt;/RouterLink&gt;</code></pre>
      
      <h3>Configuração de Rotas</h3>
      <p>
        As rotas são configuradas em um arquivo JavaScript (geralmente <code>router/index.js</code>) 
        onde você define o mapeamento entre caminhos URL e componentes Vue.
      </p>
      <pre><code>// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserView.vue') // Carregamento dinâmico
    }
  ]
})

export default router</code></pre>
      
      <h3>Carregamento Preguiçoso (Lazy Loading)</h3>
      <p>
        Vue Router suporta o carregamento preguiçoso de componentes, o que significa que 
        componentes específicos de rota só serão carregados quando necessários. Isso melhora 
        o desempenho inicial da aplicação.
      </p>
      <pre><code>// Carregamento normal
import UserView from '../views/UserView.vue'

// Carregamento preguiçoso
const UserView = () => import('../views/UserView.vue')</code></pre>
      
      <h3>Parâmetros de Rota</h3>
      <p>
        Você pode definir parâmetros dinâmicos nas rotas usando o prefixo <code>:</code> no caminho:
      </p>
      <pre><code>// Definição da rota
{
  path: '/user/:id',
  name: 'user',
  component: UserView
}

// Acessando o parâmetro no componente
export default {
  mounted() {
    console.log('ID do usuário:', this.$route.params.id)
  }
}</code></pre>
    </section>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>Como Funciona a Implementação</h2>
      <p>
        Para implementar o Vue Router em um projeto Vue.js, você precisa:
      </p>
      <ol>
        <li>Instalar o Vue Router via npm ou yarn</li>
        <li>Criar um arquivo de configuração de rotas</li>
        <li>Registrar o router na instância Vue</li>
        <li>Definir um <code>&lt;RouterView&gt;</code> no componente raiz (App.vue)</li>
        <li>Criar os componentes correspondentes às rotas</li>
      </ol>
      
      <h3>1. Instalação</h3>
      <pre><code>npm install vue-router@4 # Para Vue 3
# ou
yarn add vue-router@4</code></pre>
      
      <h3>2. Configuração</h3>
      <pre><code>// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // Outras rotas...
  ]
})

export default router</code></pre>
      
      <h3>3. Registrar no Vue</h3>
      <pre><code>// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')</code></pre>
      
      <h3>4. Adicionar RouterView e RouterLink</h3>
      <pre><code>// src/App.vue
&lt;template&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;RouterLink to="/"&gt;Home&lt;/RouterLink&gt;
      &lt;RouterLink to="/about"&gt;About&lt;/RouterLink&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;RouterView /&gt;
&lt;/template&gt;</code></pre>
    </section>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>Demonstração ao Vivo</h2>
      <p>
        Este próprio site é uma demonstração de Vue Router em funcionamento! 
        Observe como a navegação entre as diferentes seções é suave e sem recarregamento de página.
      </p>
      <p>
        Os links no cabeçalho usam <code>&lt;RouterLink&gt;</code> e o conteúdo de cada página 
        é renderizado dentro do <code>&lt;RouterView&gt;</code> no componente App.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    // Adiciona atributos de animação aos elementos
    this.initAnimations();
    
    // Verifica se o conteúdo foi carregado corretamente
    this.checkContentLoading();
    
    // Adiciona listener para forçar rerender se necessário
    window.addEventListener('resize', this.checkContentLoading);
  },
  methods: {
    initAnimations() {
      // Simula as animações do v-motion
      const sections = document.querySelectorAll('.section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      
      sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
      });
    },
    checkContentLoading() {
      // Verifica se o conteúdo foi carregado corretamente
      setTimeout(() => {
        const sections = document.querySelectorAll('.section');
        if (sections.length === 0) {
          console.warn('Conteúdo não carregado corretamente - tentando recarregar');
          this.$forceUpdate();
          
          // Tenta novamente após um breve atraso
          setTimeout(() => {
            const newSections = document.querySelectorAll('.section');
            if (newSections.length === 0) {
              console.error('Falha na renderização do conteúdo - recarregando a página');
              window.location.reload();
            } else {
              this.initAnimations();
            }
          }, 500);
        }
      }, 300);
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkContentLoading);
  }
}
</script>

<style scoped>
.router-view {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  margin-left: 2rem;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}

ol {
  margin-left: 2rem;
  padding-left: 0;
}

ol li {
  margin-bottom: 0.75rem;
}
</style>
