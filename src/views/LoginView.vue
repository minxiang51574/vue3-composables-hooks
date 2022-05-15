<template>
  <div class="login">
      <h1>login</h1>
      <div v-if="loginIn">
        <h3>Welcome {{user?.username}}
            <a href="#" @click.prevent="logout">Logout</a>
         </h3>
      </div>
      <div v-if="!loginIn">
           <el-form ref="form" :model="loginModel" label-width="80px">
            <el-form-item label="Username">
                <el-input
                v-model="loginModel.username"
                placeholder="Username"
                ></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input
                v-model="loginModel.password"
                type="password"
                placeholder="Password"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">Login</el-button>
            </el-form-item>
         </el-form>
      </div>
  </div>
</template>

<script lang="ts" setup>

import { useUser } from "@/composables/useUser"

const { loginModel,user,loginIn, login, logout } = useUser()

</script>

<style lang="scss" scoped>
</style>
