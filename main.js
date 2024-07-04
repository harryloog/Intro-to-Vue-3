const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id, action){
            if(action=1){
                this.cart.push(id)
            } else if (action=0){
                this.cart.splice(indexOf(id), indexOf(id)==-1?0:1)
            }
        }
    }
})
