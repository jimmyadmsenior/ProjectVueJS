<template>
  <div class="practice-view">
    <h1>Prática: Slots e Vue Router</h1>
    
    <div class="tabs">
      <button 
        :class="{ active: activeTab === 'slots' }" 
        @click="activeTab = 'slots'"
      >
        Slots
      </button>
      <button 
        :class="{ active: activeTab === 'router' }" 
        @click="activeTab = 'router'"
      >
        Vue Router
      </button>
    </div>
    
    <transition name="fade" mode="out-in">
      <div v-if="activeTab === 'slots'" class="section slots-demo">
        <h2>Demonstração Prática de Slots</h2>
        
        <div class="demo-container">
          <h3>Card Componente com Slots</h3>
          
          <!-- Exemplo de uso do componente Card -->
          <div class="card-examples">
            <card-component>
              <template #header>
                <h4>Card com Header Personalizado</h4>
              </template>
              
              <p>Este é o conteúdo principal do card.</p>
              <p>Ele usa o slot padrão do componente.</p>
              
              <template #footer>
                <div class="custom-footer">
                  <button>Ação 1</button>
                  <button>Ação 2</button>
                </div>
              </template>
            </card-component>
            
            <card-component>
              <template #header>
                <div class="image-header">
                  <img src="https://via.placeholder.com/50" alt="Placeholder">
                  <h4>Card com Imagem</h4>
                </div>
              </template>
              
              <p>Outro exemplo de conteúdo no slot padrão.</p>
              <p>Os slots permitem composição flexível.</p>
            </card-component>
            
            <card-component>
              <p>Este card usa apenas o slot padrão.</p>
              <p>Os slots header e footer usarão seus valores padrão.</p>
            </card-component>
          </div>
          
          <div class="code-container">
            <h3>Código do Componente Card</h3>
            <pre><code>// CardComponent.vue
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;div class="card-header"&gt;
      &lt;slot name="header"&gt;
        &lt;h3&gt;Cabeçalho Padrão&lt;/h3&gt;
      &lt;/slot&gt;
    &lt;/div&gt;
    
    &lt;div class="card-body"&gt;
      &lt;slot&gt;
        Sem conteúdo fornecido
      &lt;/slot&gt;
    &lt;/div&gt;
    
    &lt;div class="card-footer"&gt;
      &lt;slot name="footer"&gt;
        &lt;small&gt;Rodapé padrão do card&lt;/small&gt;
      &lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
            </code></pre>
            
            <h3>Como utilizar</h3>
            <pre><code>&lt;card-component&gt;
  &lt;template #header&gt;
    &lt;h4&gt;Card com Header Personalizado&lt;/h4&gt;
  &lt;/template&gt;
  
  &lt;p&gt;Este é o conteúdo principal do card.&lt;/p&gt;
  
  &lt;template #footer&gt;
    &lt;div class="custom-footer"&gt;
      &lt;button&gt;Ação 1&lt;/button&gt;
      &lt;button&gt;Ação 2&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/card-component&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <div v-else-if="activeTab === 'router'" class="section router-demo">
        <h2>Demonstração Prática de Vue Router</h2>
        
        <div class="demo-container">
          <h3>Mini-Aplicação com Router</h3>
          <div class="router-sample">
            <nav class="router-nav">
              <a 
                @click.prevent="setCurrentPage('home')" 
                :class="{ active: currentPage === 'home' }" 
                href="#"
              >
                Home
              </a>
              <a 
                @click.prevent="setCurrentPage('about')" 
                :class="{ active: currentPage === 'about' }" 
                href="#"
              >
                About
              </a>
              <a 
                @click.prevent="setCurrentPage('contact')" 
                :class="{ active: currentPage === 'contact' }" 
                href="#"
              >
                Contact
              </a>
            </nav>
            
            <div class="router-content">
              <transition name="fade" mode="out-in">
                <div v-if="currentPage === 'home'" key="home">
                  <h3>Home Page</h3>
                  <p>Esta é a página inicial da nossa mini-aplicação.</p>
                  <p>Observe como a navegação entre páginas é suave e sem recarregamento.</p>
                </div>
                
                <div v-else-if="currentPage === 'about'" key="about">
                  <h3>About Page</h3>
                  <p>Esta é a página Sobre Nós da aplicação de demonstração.</p>
                  <p>Em uma aplicação real, usaríamos &lt;RouterLink&gt; e &lt;RouterView&gt;.</p>
                </div>
                
                <div v-else-if="currentPage === 'contact'" key="contact">
                  <h3>Contact Page</h3>
                  <p>Esta é a página de Contato da aplicação de demonstração.</p>
                  <p>Vue Router gerencia o estado da aplicação e a história do navegador.</p>
                </div>
              </transition>
            </div>
          </div>
          
          <div class="code-container">
            <h3>Configuração do Router</h3>
            <pre><code>// router/index.js
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
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router</code></pre>
            
            <h3>Uso no Componente Principal</h3>
            <pre><code>// App.vue
&lt;template&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;RouterLink to="/"&gt;Home&lt;/RouterLink&gt;
      &lt;RouterLink to="/about"&gt;About&lt;/RouterLink&gt;
      &lt;RouterLink to="/contact"&gt;Contact&lt;/RouterLink&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;RouterView /&gt;
&lt;/template&gt;</code></pre>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'

export default {
  components: {
    CardComponent
  },
  data() {
    return {
      activeTab: 'slots',
      currentPage: 'home'
    }
  },
  mounted() {
    // Verifica se o conteúdo foi carregado corretamente
    this.checkContentLoading();
    
    // Adiciona listener para forçar rerender se necessário
    window.addEventListener('resize', this.checkContentLoading);
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
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
.practice-view {
  max-width: 900px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
}

.tabs button {
  background-color: #f1f1f1;
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.tabs button.active {
  background-color: #41b883;
  color: white;
}

.demo-container {
  margin-top: 2rem;
}

.code-container {
  margin-top: 3rem;
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
}

.card-examples {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

/* Estilos para o router demo */
.router-sample {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 2rem 0;
}

.router-nav {
  display: flex;
  background-color: #f1f1f1;
  border-bottom: 1px solid #e0e0e0;
}

.router-nav a {
  padding: 1rem 1.5rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;
}

.router-nav a.active {
  background-color: #41b883;
  color: white;
}

.router-content {
  padding: 2rem;
  min-height: 200px;
}

/* Animações */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
