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
  return store.state.servidores.filter(s =>
    !props.filtro || s.nome.toLowerCase().includes(props.filtro.toLowerCase())
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