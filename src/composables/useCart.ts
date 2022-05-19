import { ref } from "vue"

const cart = ref({
    items:[] as CartItem[]
})
export const useCart = () => {
    const addTocard = (product:Product) => {
        cart.value.items.push({
            productId: product.id,
            quantity: 1,
            name: product.name,
            price: product.price,
          })
    }
    return {
        cart,
        addTocard
    }
}