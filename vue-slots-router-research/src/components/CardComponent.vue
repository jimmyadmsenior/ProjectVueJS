<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <h3>Cabeçalho Padrão</h3>
      </slot>
    </div>
    
    <div class="card-body">
      <slot>
        Sem conteúdo fornecido
      </slot>
    </div>
    
    <div class="card-footer">
      <slot name="footer">
        <small>Rodapé padrão do card</small>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: rgba(40, 42, 54, 0.7);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(139, 233, 253, 0.2);
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(139, 233, 253, 0.2);
  position: relative;
  backdrop-filter: blur(5px);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(139, 233, 253, 0.05), rgba(80, 250, 123, 0.05));
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover {
  transform: translateY(-7px) scale(1.02);
  box-shadow: 0 10px 30px rgba(139, 233, 253, 0.3);
  border-color: rgba(139, 233, 253, 0.4);
}

.card:hover::before {
  opacity: 1;
}

.card-header {
  background-color: rgba(30, 31, 40, 0.7);
  padding: 1rem;
  border-bottom: 1px solid rgba(139, 233, 253, 0.2);
  position: relative;
}

.card-header::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 233, 253, 0.5), transparent);
  transform: scaleX(0);
  transition: transform 0.5s;
}

.card:hover .card-header::after {
  transform: scaleX(1);
}

.card-body {
  padding: 1.5rem;
  flex-grow: 1;
  position: relative;
  z-index: 1;
}

.card-footer {
  background-color: rgba(30, 31, 40, 0.7);
  padding: 1rem;
  border-top: 1px solid rgba(139, 233, 253, 0.2);
  position: relative;
}

.card-footer::before {
  content: '';
  position: absolute;
  left: 0;
  top: -1px;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 233, 253, 0.5), transparent);
  transform: scaleX(0);
  transition: transform 0.5s;
}

.card:hover .card-footer::before {
  transform: scaleX(1);
}

.image-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.image-header img {
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(139, 233, 253, 0.5);
  background: rgba(189, 147, 249, 0.1);
  padding: 2px;
  border: 1px solid rgba(139, 233, 253, 0.3);
}

.custom-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.custom-footer button {
  background-color: rgba(139, 233, 253, 0.2);
  color: #f8f8f2;
  border: 1px solid rgba(139, 233, 253, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.custom-footer button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(139, 233, 253, 0.3), transparent);
  transition: left 0.5s;
}

.custom-footer button:hover {
  background-color: rgba(80, 250, 123, 0.2);
  box-shadow: 0 0 15px rgba(80, 250, 123, 0.3);
  border-color: rgba(80, 250, 123, 0.5);
  transform: translateY(-2px);
}

.custom-footer button:hover::before {
  left: 100%;
}
</style>
