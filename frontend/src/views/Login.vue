<template>
  <div>
    <img class="shui-logo" alt="Vue logo" src="../assets/SHUILogo.png" />
    <img class="waterbottom" alt="Vue logo" src="../assets/waterbottom.png" />
    <form method="get" @submit.prevent="submit">
      <input type="text" placeholder="Användarnamn" v-model="cert.username" />
      <input type="password" placeholder="Lösenord" v-model="cert.password" />
      <button>Logga in</button>
      <router-link to="/register">Registrera dig.</router-link>
    </form>
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
        `${process.env.VUE_APP_API_URL}/api/login`,
        this.cert
      );

      if (response.data.token) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        sessionStorage.setItem("auth", response.data.token);
        this.$router.push({ name: "Flow" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
.shui-logo {
  width: 150px;
  height: 120px;
  margin-left: 100px;
  margin-top: 100px;
}

.waterbottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
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
    color: #00b2ff;
    display: block;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 0.1em;
    font-weight: bold;
  }
}
</style>
