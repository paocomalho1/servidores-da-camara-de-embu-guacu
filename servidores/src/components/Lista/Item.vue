<template>
    <li @click="$router.push({ name: 'servidor', query: { id: servidor.id } })" >
        <img :src="servidor.img" :alt="`Imagem de ${servidor.nome}`" />
        <p>{{ servidor.nome }}</p>
        <p>{{ servidor.cargo }}</p>
        <p>{{ servidor.email }}</p>
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
  width: calc(25% - 5.70rem);
  display: flex;
  flex-direction: column;
  align-items: center;
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
    width: calc(50% - 6rem);
  }

  @include pequeno {
    width: calc(100% - 7rem);
  }
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.25rem;
  border: 3px solid #eee;
  transition: border-color 0.2s ease;

  li:hover & {
    border-color: #42b883; // cor destaque no hover
  }
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