<template>
    <div class="servidor-details">
        <div class="servidor-photo">
            <img :src="servidor.img" alt="Foto do Servidor" />
        </div>
        <div class="servidor-info">
            <h2>{{ servidor.nome }}</h2>
            <p><strong>Cargo:</strong> {{ servidor.cargo }}</p>
            <!-- <p><strong>Email:</strong> {{ servidor.email }}</p> -->
            <!-- Adicione mais informações conforme necessário -->
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const route = useRoute();
        const store = useStore();
        const servidor = ref(store.state.servidores.find(s => s.id === parseInt(route.query.id)));
        return { servidor };
    },
    name: 'Servidor',
}
</script>

<style scoped lang="scss">
@use '../utils/index.scss' as *;

.servidor-details {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  // Responsividade simples
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.servidor-photo {
  img {
    width: 225px;
    height: 300px;

    border: 2px solid #eee;
  }
}

.servidor-info {
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    @include Roboto-500;
    margin-top: 2rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.4;
    color: #333;
    @include Roboto-500;

    strong {
      font-weight: bold;
      margin-right: 0.3rem;
    }
  }
}
</style>