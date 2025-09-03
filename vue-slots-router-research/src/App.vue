<template>
  <div class="space-container">
    <!-- Elementos animados do tema espacial -->
    <div class="floating-planet"></div>
    <div class="shooting-star" v-for="n in 5" :key="n"></div>
    <div class="asteroid" v-for="n in 3" :key="`asteroid-${n}`"></div>
    
    <!-- Cursor customizado com posicionamento exato -->
    <div class="cursor-container">
      <div ref="cursor" class="custom-cursor" style="top: 0; left: 0;"></div>
      <div ref="cursorFollower" class="custom-cursor-follower" style="top: 0; left: 0;"></div>
    </div>
    
    <header>
      <h1 class="site-title">Vue.js: Slots & Router</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/slots">Slots</router-link>
        <router-link to="/router">Vue Router</router-link>
        <router-link to="/practice">Prática</router-link>
      </nav>
    </header>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.initCursor();
    this.initAnimations();
    this.setupEventListeners();
    
    // Adiciona classe no body para indicar que o JS está carregado
    document.body.classList.add('js-loaded');
    
    // Recalibra o cursor a cada 5 segundos para garantir precisão
    this.cursorRecalibrationInterval = setInterval(() => {
      this.recalibrateCursor();
    }, 5000);
  },
  methods: {
    initCursor() {
      const cursor = this.$refs.cursor;
      const cursorFollower = this.$refs.cursorFollower;
      
      if (!cursor || !cursorFollower) return;
      
      // Posição inicial do cursor para evitar flash
      cursor.style.opacity = '0';
      cursorFollower.style.opacity = '0';
      
      // Dimensões dos elementos de cursor
      const cursorWidth = 20;
      const cursorHeight = 20;
      const followerWidth = 40;
      const followerHeight = 40;
      
      // Cálculo correto dos offsets para centralizar perfeitamente
      const cursorOffsetX = cursorWidth / 2;
      const cursorOffsetY = cursorHeight / 2;
      const followerOffsetX = followerWidth / 2;
      const followerOffsetY = followerHeight / 2;
      
      // Mostrar cursor apenas quando o mouse se mover
      document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
          cursor.style.opacity = '1';
          cursorFollower.style.opacity = '1';
          cursor.style.transform = `translate3d(${e.clientX - cursorOffsetX}px, ${e.clientY - cursorOffsetY}px, 0)`;
          cursorFollower.style.transform = `translate3d(${e.clientX - followerOffsetX}px, ${e.clientY - followerOffsetY}px, 0)`;
        });
      }, { once: true });
      
      // Atualizações contínuas sem delay
      document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${e.clientX - cursorOffsetX}px, ${e.clientY - cursorOffsetY}px, 0)`;
          cursorFollower.style.transform = `translate3d(${e.clientX - followerOffsetX}px, ${e.clientY - followerOffsetY}px, 0)`;
        });
      });
      
      // Efeitos especiais para interações
      document.addEventListener('mousedown', (e) => {
        requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${e.clientX - cursorOffsetX}px, ${e.clientY - cursorOffsetY}px, 0) scale(0.8)`;
          cursorFollower.style.transform = `translate3d(${e.clientX - followerOffsetX}px, ${e.clientY - followerOffsetY}px, 0) scale(0.8)`;
        });
      });
      
      document.addEventListener('mouseup', (e) => {
        requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${e.clientX - cursorOffsetX}px, ${e.clientY - cursorOffsetY}px, 0) scale(1)`;
          cursorFollower.style.transform = `translate3d(${e.clientX - followerOffsetX}px, ${e.clientY - followerOffsetY}px, 0) scale(1)`;
        });
      });
      
      // Adicionar efeitos para links e botões
      const clickables = document.querySelectorAll('a, button, [role="button"], input[type="submit"]');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', (e) => {
          const { clientX, clientY } = e;
          cursor.style.transform = `translate3d(${clientX - cursorOffsetX}px, ${clientY - cursorOffsetY}px, 0) scale(1.5)`;
          cursorFollower.style.transform = `translate3d(${clientX - followerOffsetX}px, ${clientY - followerOffsetY}px, 0) scale(1.5)`;
        });
        
        el.addEventListener('mouseleave', (e) => {
          const { clientX, clientY } = e;
          cursor.style.transform = `translate3d(${clientX - cursorOffsetX}px, ${clientY - cursorOffsetY}px, 0) scale(1)`;
          cursorFollower.style.transform = `translate3d(${clientX - followerOffsetX}px, ${clientY - followerOffsetY}px, 0) scale(1)`;
        });
      });
    },
    initAnimations() {
      // Animações baseadas em Intersection Observer
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        });
        
        document.querySelectorAll('.section').forEach(section => {
          observer.observe(section);
        });
      } else {
        // Fallback para navegadores que não suportam Intersection Observer
        document.querySelectorAll('.section').forEach(section => {
          section.classList.add('animate');
        });
      }
    },
    setupEventListeners() {
      // Detectar problemas de renderização e fazer reinicialização quando necessário
      window.addEventListener('resize', this.handleResize);
      
      // Adiciona handler para links 
      this.$watch('$route', (to, from) => {
        // Forçar redraw ao mudar de rota
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      });
    },
    handleResize() {
      // Forçar re-renderização dos componentes em casos extremos de bug de layout
      const sections = document.querySelectorAll('.section');
      if (sections.length === 0 && this.$route.path !== '/') {
        console.log('Detectado possível bug de layout - tentando recarregar o componente');
        
        // Forçar atualização
        this.$forceUpdate();
        
        // Se o problema persistir, sugerir recarregar a página
        setTimeout(() => {
          const newSections = document.querySelectorAll('.section');
          if (newSections.length === 0) {
            console.warn('Problema de renderização persistente - pode ser necessário recarregar a página');
          }
        }, 500);
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style>
.space-container {
  position: relative;
  min-height: 100vh;
}

@keyframes shooting-star {
  0% {
    transform: translateX(100vw) translateY(-100px);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100px) translateY(100vh);
    opacity: 0;
  }
}

@keyframes asteroid-float {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  25% {
    transform: translateX(30px) translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateX(15px) translateY(25px) rotate(180deg);
  }
  75% {
    transform: translateX(-20px) translateY(10px) rotate(270deg);
  }
}

.shooting-star {
  position: fixed;
  width: 150px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f8f8f2);
  z-index: -1;
  opacity: 0;
  pointer-events: none;
}

.shooting-star::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f8f8f2;
  box-shadow: 0 0 15px 5px #f8f8f2;
  transform: translateY(-50%);
}

.shooting-star:nth-child(1) {
  top: 20%;
  animation: shooting-star 7s linear infinite;
  animation-delay: 1s;
}

.shooting-star:nth-child(2) {
  top: 35%;
  animation: shooting-star 5s linear infinite;
  animation-delay: 4s;
}

.shooting-star:nth-child(3) {
  top: 50%;
  animation: shooting-star 8s linear infinite;
  animation-delay: 6s;
}

.shooting-star:nth-child(4) {
  top: 65%;
  animation: shooting-star 4s linear infinite;
  animation-delay: 2s;
}

.shooting-star:nth-child(5) {
  top: 80%;
  animation: shooting-star 6s linear infinite;
  animation-delay: 8s;
}

.asteroid {
  position: fixed;
  width: 30px;
  height: 30px;
  background: radial-gradient(circle at 30% 30%, #6272a4, #44475a);
  border-radius: 40% 60% 50% 50% / 40% 50% 50% 60%;
  z-index: -1;
  pointer-events: none;
  box-shadow: 0 0 10px rgba(189, 147, 249, 0.3);
}

.asteroid:nth-child(1) {
  top: 30%;
  left: 15%;
  animation: asteroid-float 20s ease-in-out infinite;
}

.asteroid:nth-child(2) {
  bottom: 20%;
  right: 10%;
  animation: asteroid-float 25s ease-in-out infinite reverse;
}

.asteroid:nth-child(3) {
  top: 60%;
  left: 75%;
  animation: asteroid-float 22s ease-in-out infinite;
  animation-delay: 4s;
}

.site-title {
  text-align: center;
  font-size: 2.8rem;
  margin: 1rem 0 1.5rem;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #8be9fd, #bd93f9, #ff79c6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  position: relative;
}

.site-title::after {
  content: '🚀';
  position: absolute;
  font-size: 1.5rem;
  top: -15px;
  right: -15px;
  -webkit-text-fill-color: initial;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 2rem;
  padding-top: 1rem;
  text-align: center;
}

nav {
  width: 100%;
  text-align: center;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

nav a {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: rgba(40, 42, 54, 0.7);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.3s;
  border: 1px solid rgba(139, 233, 253, 0.3);
  box-shadow: 0 0 10px rgba(139, 233, 253, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
}

nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(139, 233, 253, 0.2), transparent);
  transition: all 0.5s;
}

nav a:hover {
  background-color: rgba(80, 250, 123, 0.3);
  color: #f8f8f2;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(80, 250, 123, 0.3);
  border: 1px solid rgba(80, 250, 123, 0.5);
}

nav a:hover::before {
  left: 100%;
}

nav a.router-link-active {
  background-color: rgba(189, 147, 249, 0.3);
  color: #f8f8f2;
  box-shadow: 0 0 15px rgba(189, 147, 249, 0.4);
  border: 1px solid rgba(189, 147, 249, 0.5);
}

@media (max-width: 640px) {
  nav {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .site-title {
    font-size: 2rem;
  }
}
</style>
