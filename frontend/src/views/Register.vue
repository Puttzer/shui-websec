<template>
  <div>
    <img class="shui-logo" alt="Vue logo" src="../assets/SHUILogo.png" />
    <form method="get" v-on:submit.prevent="submit">
      <input type="text" placeholder="Användarnamn" v-model="cert.username" />
      <input type="password" placeholder="Lösenord" v-model="cert.password" />
      <button>Registrera</button>
      <router-link to="/login">Redan en medlem?</router-link>
    </form>
    <img class="waterbottom" alt="Vue logo" src="../assets/waterbottom.png" />
  </div>
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
.shui-logo {
  width: 150px;
  height: 120px;
  margin-left: 100px;
  margin-top: 100px;
}
form {
  display: grid;
  width: 300px;
  margin-left: 35px;

  input {
    margin: 10px;
    height: 50px;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    border: 2px solid #fff;
    font-family: PT Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0.1em;
    text-align: center;

    &::placeholder {
      color: white;
      font-family: "PT Sans", sans-serif;
      letter-spacing: 0.3em;
    }
  }

  button {
    height: 50px;
    margin: 20px;
    outline: none;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 4px;
    font-family: PT Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }

  a {
    color: #ef4343;
    display: block;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 0.1em;
    font-weight: bold;
  }
}
.waterbottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
</style>
