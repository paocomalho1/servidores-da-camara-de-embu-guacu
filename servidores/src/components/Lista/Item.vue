<template>
    <li @click="$router.push({ name: 'servidor', query: { id: servidor.id } })" >
        <img :src="servidor.img" :alt="`Imagem de ${servidor.nome}`" />
    </li>
</template>

<script>
export default {
    props: {
        servidor: {
            type: Object,
            required: true
        }
    },
    name: 'Item',
}
</script>

<style scoped lang="scss">
@use '../../utils/index.scss' as *;

li {
  width: calc(25% - 4.65rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: #fff;
  border: solid 1px #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  @include medio {
    width: calc(50% - 4.25rem);
  }

  @include pequeno {
    width: calc(100% - 3rem);
  }
}

img {
  width: 300px;
}

p {
  margin: 0;
  font-size: 0.95rem;
  color: #333;
  text-align: center;
  @include Roboto-500;

  &:first-of-type {
    font-size: 1.1rem;
    font-weight: 600;
    color: #222;
  }

  &:last-of-type {
    font-size: 0.85rem;
    color: #666;
  }
}
</style>