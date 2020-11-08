<template>
  <form action="" method="get" v-on:submit.prevent="submit">
    <input type="text" placeholder="Användarnamn" v-model="cert.username" />
    <input type="password" placeholder="Lösenord" v-model="cert.password" />
    <button>Registrera</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cert: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      const response = await axios.post(
        `${process.env.VUE_APP_API_URL}/api/register`,
        this.cert
      );

      if (response.data.token) {
        sessionStorage.setItem("auth", response.data.token);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
