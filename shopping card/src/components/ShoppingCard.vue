<template>
  <div>
    <h1>Shopping Card</h1>
    <ul>
      <li v-for = "product in products" :key='product.id'>
        {{product.title}} - {{product.price | currency}} - {{product.quantity}}
      </li>
    </ul>
    <p>In Total: {{total | currency }}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus === 'success'"
       :class="{ successful: isActive  }">{{checkoutStatus}}</p>
    <p v-else-if="checkoutStatus === 'fail'"
       :class="{ failed: isActive  }">{{checkoutStatus}}</p>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  data: function() {
    return  {
      isActive: true
    }
  },

  computed: {
     ...mapState('card', {
      checkoutStatus: state => state.checkoutStatus
    }),

    ...mapGetters('card', {
      products: 'cardProducts',
      total: 'cardTotal'
    })
  },

  methods: {
    ...mapActions('card', ['checkout'])
  }

}
</script>
<style scoped>
 * {
   margin:0;
   padding: 0;
 }
  .successful {
    color: green;
  }
  .failed {
    color: red;
  }
  div {
    border: 1px solid #d6d8db;
    border-radius: .25rem;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 0px #383d41;
    width: 100%;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    /* internal grid for shopping-card content */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 1rem .5rem;
    align-items: start;
    justify-items: center;
  }
  ul {
    list-style: none;
  }
  h1 {
    width: 100%;
    box-sizing: border-box;
    font-size: 1.2rem;
    position: relative;
    top: -1px;
    /* color: #383d41; */
    background-color: #e2e3e5;
    border-color: #d6d8db;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem .25rem 0 0;
  }
  p {
    font-weight: 700;
  }
  button {
    width: 80%;
    margin-bottom: 1rem;
    box-sizing: border-box;
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
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
  button + p {
      position: relative;
      bottom: 1rem;
      font-style: italic;
  }
  button:hover {
    cursor:pointer;
    background-color: #186f2c;
  }
  @media screen and (max-width: 768px) {
    div {
      grid-column: 1 / span 2;
      grid-row: 2 / span 1;
      max-width: 75%;
    }

}
</style>


