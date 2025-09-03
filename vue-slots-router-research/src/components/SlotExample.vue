<template>
  <div class="slot-example">
    <h3>Exemplo de Slot</h3>
    
    <div class="slot-container">
      <button-with-slot>
        Clique aqui!
      </button-with-slot>
      
      <button-with-slot>
        <template #default>
          <span class="icon">🚀</span>
          Botão com ícone
        </template>
      </button-with-slot>
      
      <button-with-slot>
        <template #default>
          <span class="icon">⚠️</span>
          Atenção
        </template>
      </button-with-slot>
    </div>
    
    <div class="code-explanation">
      <h4>Componente Button com Slot:</h4>
      <pre><code>&lt;!-- ButtonWithSlot.vue --&gt;
&lt;template&gt;
  &lt;button class="custom-button"&gt;
    &lt;slot&gt;Texto Padrão&lt;/slot&gt;
  &lt;/button&gt;
&lt;/template&gt;</code></pre>
      
      <h4>Uso do componente:</h4>
      <pre><code>&lt;button-with-slot&gt;
  Clique aqui!
&lt;/button-with-slot&gt;

&lt;button-with-slot&gt;
  &lt;template #default&gt;
    &lt;span class="icon"&gt;🚀&lt;/span&gt;
    Botão com ícone
  &lt;/template&gt;
&lt;/button-with-slot&gt;</code></pre>
    </div>
  </div>
</template>

<script>
import ButtonWithSlot from './ButtonWithSlot.vue';

export default {
  components: {
    ButtonWithSlot
  }
}
</script>

<style scoped>
.slot-example {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.slot-container {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.code-explanation {
  margin-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 1.5rem;
}

.code-explanation h4 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #41b883;
}

pre {
  margin-top: 0.5rem;
}
</style>
