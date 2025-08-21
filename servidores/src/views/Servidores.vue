<template>
    <div>
        <h1>Servidores da Câmara de Embu-Guaçu</h1>
        <input v-model="filtro" type="text" placeholder="Pesquisar Servidor"/>
    </div>
    <Itens :filtro="filtro"/>
</template>

<script setup>
import Itens from '../components/Lista/Itens.vue';
import { ref } from 'vue'


// estado reativo
const filtro = ref('')

</script>

<style scoped lang="scss">
@use '../utils/index.scss' as *;

div {
  display: flex;
  gap: 1.5rem;
  margin: 2rem;
  margin-bottom: 3rem;
  justify-content: space-between;
}


h1 {
  font-size: 2rem;
  line-height: 1.3;
  color: #222;
  @include Roboto-500;

  @include medio {
    font-size: 1.75rem;
  }

  @include pequeno {
    font-size: 1.5rem;
  }
}

input {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #333;
  background: #fafafa;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  @include Roboto-500;

  &:focus {
    outline: none;
    border-color: #42b883;
    box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.2);
    background: #fff;
  }

  @include pequeno {
    max-width: 90%;
  }
}
</style>