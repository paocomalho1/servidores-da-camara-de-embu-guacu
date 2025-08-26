<template>
    <ul>
        <Item
            v-for="(servidor, index) in servidoresFiltrados"
            :key="index"
            :servidor="servidor"
        />
    </ul>
</template>

<script setup>
import { computed } from 'vue'
import Item from './Item.vue'
import { useStore } from 'vuex/dist/vuex.cjs.js'

const store = useStore()

const props = defineProps({
  filtro: {
    type: String,
    required: false
  }
})

const servidoresFiltrados = computed(() => {
  const normalizar = (texto) =>
    texto
      .normalize("NFD") // separa acentos
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .toLowerCase()

  return store.state.servidores.filter(s =>
    !props.filtro || normalizar(s.nome).includes(normalizar(props.filtro))
  )
})
</script>
<style scoped lang="scss">
@use '../../utils/index.scss' as *;

ul {

    list-style: none;
    padding: 0;
    gap: 2rem;
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
}
</style>