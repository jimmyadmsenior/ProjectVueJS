<template>
  <div class="home">
    <h1 class="animate-title">Pesquisa Vue.js: Slots e Vue Router</h1>
    
    <section class="section intro">
      <h2>Sobre esta pesquisa</h2>
      <p>
        Este site apresenta uma pesquisa sobre dois conceitos importantes do Vue.js:
        <span class="highlight">Slots</span> e <span class="highlight">Vue Router</span>.
      </p>
      <p>
        A pesquisa foi dividida em duas partes teóricas, onde explicamos os conceitos,
        e uma parte prática, onde demonstramos a implementação dos conceitos aprendidos.
      </p>
      <p>
        Navegue pelo menu superior para explorar cada seção!
      </p>
    </section>
    
    <div class="cards-container">
      <router-link to="/slots" class="card">
        <h3>Slots</h3>
        <p>Aprenda sobre slots e slots nomeados no Vue.js, para que servem e como utilizá-los em seus componentes.</p>
      </router-link>
      
      <router-link to="/router" class="card">
        <h3>Vue Router</h3>
        <p>Descubra o que é o Vue Router e seu papel em aplicações Vue.js, incluindo conceitos como RouterLink e RouterView.</p>
      </router-link>
      
      <router-link to="/practice" class="card">
        <h3>Prática</h3>
        <p>Veja implementações práticas dos conceitos aprendidos sobre Slots e Vue Router.</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.animate-title {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro {
  margin-bottom: 3rem;
  animation: fadeIn 1s ease-out 0.5s forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  background-color: rgba(40, 42, 54, 0.7);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(139, 233, 253, 0.2);
  transition: all 0.3s ease;
  display: block;
  color: inherit;
  text-decoration: none;
  border: 1px solid rgba(139, 233, 253, 0.2);
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(139, 233, 253, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.5s ease;
  transform: scale(0.5);
  z-index: -1;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 30px rgba(139, 233, 253, 0.3);
  border: 1px solid rgba(139, 233, 253, 0.4);
}

.card:hover::before {
  opacity: 1;
  transform: scale(1);
}

.card h3 {
  color: #8be9fd;
  margin-top: 0;
  text-shadow: 0 0 10px rgba(139, 233, 253, 0.3);
  position: relative;
  display: inline-block;
}
</style>
