<template>
  <main>
    <h1>Shopping Experience</h1>
    <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <ProductList/>
      <!-- <hr> -->
      <ShoppingCard/>
    </div>
  </main>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCard from './components/ShoppingCard'


export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCard
  }
}
</script>

<style scoped>
* {
  margin:0;
  padding:0;
}

h1 {
  padding: 0.375rem 0;
  width:100%;
  text-align: center;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 1.4rem;
  align-items: start;
  justify-items: center;
}

@media screen and (max-width: 768px) {
    #app {
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 2.4rem;
    }
}
</style>
