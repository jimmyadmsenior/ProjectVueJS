<template>
  <div class="slots-view">
    <h1>Slots no Vue.js</h1>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>O que são Slots?</h2>
      <p>
        <span class="highlight">Slots</span> são um recurso do Vue.js que permite a 
        injeção de conteúdo de um componente pai para um componente filho. 
        Essencialmente, são espaços reservados dentro de um componente onde 
        o conteúdo pode ser inserido.
      </p>
      <p>
        Pense nos slots como "buracos" ou "espaços" dentro de um componente onde o conteúdo 
        do componente pai pode entrar. Isso permite a criação de componentes mais flexíveis e 
        reutilizáveis, pois o conteúdo pode variar a cada uso.
      </p>
    </section>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>Para que servem e quando são úteis?</h2>
      <p>Os slots são úteis quando:</p>
      <ul>
        <li>Você deseja criar componentes de interface altamente reutilizáveis, como cards, modais ou painéis</li>
        <li>Você precisa criar componentes de layout que possam receber diferentes conteúdos</li>
        <li>Você quer desenvolver wrappers (invólucros) para outros componentes</li>
        <li>Você busca maximizar a reutilização de componentes enquanto mantém flexibilidade no conteúdo</li>
      </ul>
    </section>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>Como funcionam os Slots?</h2>
      <p>
        O funcionamento dos slots é relativamente simples:
      </p>
      <ol>
        <li>No componente filho, defina um ou mais elementos <code>&lt;slot&gt;</code> onde deseja que o conteúdo seja inserido</li>
        <li>No componente pai, coloque o conteúdo desejado dentro das tags do componente filho</li>
        <li>O Vue substituirá o elemento <code>&lt;slot&gt;</code> pelo conteúdo fornecido pelo pai</li>
      </ol>
      <p>
        Se nenhum conteúdo for fornecido pelo pai, o conteúdo dentro do elemento <code>&lt;slot&gt;</code> será usado como fallback (conteúdo padrão).
      </p>
    </section>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>Tipos de Slots</h2>
      
      <h3>Slot Padrão (Default)</h3>
      <p>
        É o slot básico, sem nome. Todo conteúdo do componente pai que não está direcionado a um slot nomeado vai para o slot padrão.
      </p>
      <pre><code>&lt;!-- Componente Filho (Card.vue) --&gt;
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;div class="card-content"&gt;
      &lt;slot&gt;Conteúdo padrão&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Componente Pai --&gt;
&lt;template&gt;
  &lt;Card&gt;
    &lt;p&gt;Este conteúdo será inserido no slot&lt;/p&gt;
  &lt;/Card&gt;
&lt;/template&gt;</code></pre>
      
      <h3>Slots Nomeados</h3>
      <p>
        Slots nomeados permitem que você tenha múltiplos slots em um componente. 
        Cada slot é identificado por um nome e pode receber conteúdo específico do componente pai.
      </p>
      <pre><code>&lt;!-- Componente Filho (LayoutComponent.vue) --&gt;
&lt;template&gt;
  &lt;div class="layout"&gt;
    &lt;header&gt;
      &lt;slot name="header"&gt;Cabeçalho padrão&lt;/slot&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
      &lt;slot&gt;Conteúdo principal padrão&lt;/slot&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
      &lt;slot name="footer"&gt;Rodapé padrão&lt;/slot&gt;
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Componente Pai --&gt;
&lt;template&gt;
  &lt;LayoutComponent&gt;
    &lt;template #header&gt;
      &lt;h1&gt;Meu cabeçalho personalizado&lt;/h1&gt;
    &lt;/template&gt;
    
    &lt;p&gt;Este é o conteúdo principal (vai para o slot padrão)&lt;/p&gt;
    
    &lt;template #footer&gt;
      &lt;p&gt;Meu rodapé personalizado&lt;/p&gt;
    &lt;/template&gt;
  &lt;/LayoutComponent&gt;
&lt;/template&gt;</code></pre>
      
      <h3>Slots com Escopo (Scoped Slots)</h3>
      <p>
        Slots com escopo permitem que o componente filho passe dados de volta para o componente pai, 
        permitindo que o pai customize o conteúdo com base nos dados do filho.
      </p>
      <pre><code>&lt;!-- Componente Filho (ListComponent.vue) --&gt;
&lt;template&gt;
  &lt;ul&gt;
    &lt;li v-for="(item, index) in items" :key="index"&gt;
      &lt;slot :item="item" :index="index"&gt;
        {{ item.text }}
      &lt;/slot&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' }
      ]
    }
  }
}
&lt;/script&gt;

&lt;!-- Componente Pai --&gt;
&lt;template&gt;
  &lt;ListComponent&gt;
    &lt;template #default="slotProps"&gt;
      &lt;strong&gt;{{ slotProps.index + 1 }}: &lt;/strong&gt;
      &lt;em&gt;{{ slotProps.item.text }}&lt;/em&gt;
    &lt;/template&gt;
  &lt;/ListComponent&gt;
&lt;/template&gt;</code></pre>
    </section>
    
    <section class="section" v-motion-slide-visible-once-bottom>
      <h2>Exemplo Simples de Slot</h2>
      <p>
        Veja a seguir um exemplo simples de como um componente pode receber conteúdo via slot:
      </p>
      
      <div class="example-container">
        <p>Abaixo está uma demonstração ao vivo do uso de slots:</p>
        <slot-example></slot-example>
      </div>
    </section>
  </div>
</template>

<script>
import SlotExample from '../components/SlotExample.vue'

export default {
  components: {
    SlotExample
  },
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
.slots-view {
  max-width: 800px;
  margin: 0 auto;
}

.example-container {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: white;
  margin-top: 2rem;
}

ul {
  margin-left: 2rem;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}
</style>
