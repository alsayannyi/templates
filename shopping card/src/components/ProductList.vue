<template>
  <div>
    <!-- <h1>Product List</h1> -->
    <img v-if='loading' src='https://i.imgur.com/JfPpwOA.gif'>
    <ul v-else>
      <li v-for="product in products" :key="product.title">
        <!-- {{product.title}} - {{product.price | currency}} - {{product.inventory}} -->
        <p>{{product.title}}</p>
        <p>Price: {{product.price | currency}}</p>
        <p>Q-ty: {{product.inventory}}</p>
        <button
            :disabled="!productIsInStock(product)"
            @click='addProductToCard(product)'>Add to card</button>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },

  computed: {
    ...mapState({
      products: state => state.products.items
    }),

    ...mapGetters('products', {
      productIsInStock: 'productIsInStock'
    })
  },

  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCard: 'card/addProductToCard'
    })
  },

  created () {
    this.loading = true
    this.fetchProducts()
    .then(()=> this.loading = false )
  }
}
</script>
<style scoped>
  * {
   margin:0;
   padding: 0;
 }
  div {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 2rem 3rem;
    font-size: .92rem;
    align-items: start;
    justify-items: center;
  }
  li {
    width:100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 2.4rem);
    grid-row-gap: 0rem;
    align-items: center;
    justify-items: center;
    box-shadow: 1px 1px 10px 0px #383d41;
    padding: .3rem;
    padding-bottom: .7rem;
    border-radius: .25rem;
  }
  li > p {
    margin-top: 5px;
    height: 1rem;
    line-height: 1rem;

  }
  li > p:first-child {
    font-weight: 600;
    line-height: 0rem;
    border-bottom: 1.1px solid #383d41;
    width: 100%;
  }
  button {
    width: 80%;
    box-sizing: border-box;
    color: #fff;
    background-color:  #007bff;
    border-color:  #007bff;
    font-weight: 400;
    text-align: center;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s
      ease-in-out,background-color .15s
      ease-in-out,border-color .15s
      ease-in-out,box-shadow .15s ease-in-out;
  }
   button:hover {
    cursor:pointer;
    background-color: #205c9c;
  }
  button:disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    cursor: default;
  }

  @media screen and (max-width: 768px) {
    div {
      grid-column: 1 / span 2;
      grid-row: 1 / span 1;
    }
    li {
      grid-template-rows: repeat(4, 3rem);
    }
    button {
      width: 100%;
    }
  }
</style>
