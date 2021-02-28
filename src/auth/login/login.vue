<script lang="ts">
  import { defineComponent } from 'vue'
  import LoginService from './login.service'
  export default defineComponent({
    name: 'Login',
    setup() {
      return new LoginService()
    },
  })
</script>

<template>
  <a-row align="middle" justify="center" style="height: 100%" type="flex">
    <a-col flex span="12">
      <h2 style="text-align: center">XXXXX系统</h2>
      <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-item label="账号" v-bind="form.validateInfos.name">
          <a-input v-model:value="model.name"></a-input>
        </a-form-item>
        <a-form-item label="密码" v-bind="form.validateInfos.pwd">
          <a-input v-model:value="model.pwd"></a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" block @click="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<style>
  html,
  body,
  #app {
    height: 100%;
  }
</style>
