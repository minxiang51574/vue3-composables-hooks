import { computed, ref } from "vue"

const cart = ref({
    items:[] as CartItem[]
})
export const useCart = () => {

    const addToCart = (product:Product) => {
        cart.value.items.push({
            productId: product.id,
            quantity: 1,
            name: product.name,
            price: product.price,
          })
          console.log(cart.value);
    }
    const totalProducts = computed(()=>{
       return cart.value.items.reduce((pref,item)=>{
           return pref + item.quantity
       },0)
    })
    
    return {
        cart,
        addToCart,
        totalProducts
    }
}