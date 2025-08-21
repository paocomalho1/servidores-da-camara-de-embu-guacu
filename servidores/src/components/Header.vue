<template>
    <header class="header">
        <img src="../assets/logo.png" alt="">
        <h1>Servidores da Câmara Municipal de Embu-Guaçu</h1>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
@use '../utils/index.scss' as *;

.header {
    background-color: $Principal;
    color: #fff;
    padding: 16px;
    text-align: center;
    display: flex;
    align-items: center;
}
h1 {
    font-size: 2rem;
    @include Roboto-500;
    @include pequeno {
        font-size: 1.75rem;
    }
    @include medio {
        font-size: 1.25rem;
    }
}
img {
    width: 50px;
    height: 50px;
    margin-right: 16px;
    vertical-align: middle;
}
</style>