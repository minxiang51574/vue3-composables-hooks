<template>
  <div class="cart">
      <h1>cart</h1>
      <div v-if="isCartEmpty">
        <p>Your cart is empty.</p>
      </div>
      <ul v-if="!isCartEmpty">
        <div>
          <li v-for="item in cart.items">
               <h3>{{ item.name }} ¥ {{ item.price }}</h3>
<!-- 
               <el-input-number
               v-model="item.quantity"></el-input-number> -->

               <el-input-number
               :modelValue="item.quantity"
               @update:modelValue="(quantity:number)=>updateQuantity(item,quantity)"></el-input-number>
               <el-button @click="removeFromCart(item)">Remove</el-button>

          </li>
        </div>
          
      </ul>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "@/composables/useCart";

const { cart ,updateQuantity , removeFromCart ,isCartEmpty} = useCart()
console.log(cart.value.items);

</script>

<style scoped></style>
