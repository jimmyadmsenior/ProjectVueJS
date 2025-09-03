<template>
  <button class="custom-button">
    <slot>Texto Padrão</slot>
  </button>
</template>

<style scoped>
.custom-button {
  background-color: rgba(139, 233, 253, 0.2);
  color: #f8f8f2;
  border: 1px solid rgba(139, 233, 253, 0.4);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(139, 233, 253, 0.2);
  text-shadow: 0 0 5px rgba(248, 248, 242, 0.5);
}

.custom-button::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #8be9fd, #bd93f9, #ff79c6, #50fa7b);
  z-index: -2;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 10px;
}

.custom-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(40, 42, 54, 0.9);
  z-index: -1;
  border-radius: 7px;
}

.custom-button:hover {
  background-color: rgba(80, 250, 123, 0.2);
  border-color: rgba(80, 250, 123, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(80, 250, 123, 0.3);
}

.custom-button:hover::before {
  opacity: 1;
  animation: rotate-gradient 3s linear infinite;
}

.custom-button:active {
  transform: translateY(-1px);
}

@keyframes rotate-gradient {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.icon {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 5px currentColor);
}
</style>
