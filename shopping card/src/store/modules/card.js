import shop from '@/api/shop'

export default {
  namespaced: true,

  state: {  // =data
     // {id, quantity}
     items: [],
     checkoutStatus: null
  },

  getters: {  // = computed properties
    cardProducts (state, getters, rootState, rootGetters) {
      return state.items.map(cardItem => {
        const product = rootState.products.items.find(product => product.id === cardItem.id )
        return {
          title: product.title,
          price: product.price,
          quantity: cardItem.quantity
        }
      })
    },

    cardTotal (state, getters) {
      // let total = 0
      // getters.cardProducts.forEach(product => {
      //   total += product.price * product.quantity
      // })
      // return total
      // below is a bettter way to count total
      return getters.cardProducts.reduce((total, product) => total + product.price * product.quantity, 0 )
    }
  },

  mutations: {
    pushProductToCard (state, productId ) {
      state.items.push({
        // name: productTitle,
        id: productId,
        quantity: 1
      })
    },

    incrementItemQuantity (state, cardItem) {
      cardItem.quantity++
    },

    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
      console.log('setCheckoutStatus Mutaion initiated')
    },

    emptyCard (state) {
      state.items = []
    }
  },

  actions: {
    addProductToCard ({state, getters, commit, rootState, rootGetters}, product) {
      // after adding getters.productIsInStock we can change product.inventory>0 on it
      if (rootGetters['products/productIsInStock'](product)) {
        //find cardItem
        const cardItem = state.items.find( item => item.id === product.id)
        // const cardItem = context.state.items.find( item => item.name === product.title)
        if (!cardItem){
          // pushProductToCard
          commit('pushProductToCard', product.id)
        } else {
          //incrementItemQuantity
          commit('incrementItemQuantity', cardItem)
        }
        commit('products/decrementProductInventory', product, {root:true})
      }
    },

    checkout ({state, commit}) {
      console.log('checkout action has run')
      shop.buyProducts (
          state.items,
        () => {
          commit('emptyCard')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
      )
    }
  }
}
