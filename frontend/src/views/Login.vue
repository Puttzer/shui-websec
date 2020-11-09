<template>
  <div>
    <img class="s-logo" alt="Vue logo" src="../assets/redlog.png" />
    <img class="shui-logo" alt="Vue logo" src="../assets/SHUILogo.png" />
    <img class="waterbottom" alt="Vue logo" src="../assets/waterbottom.png" />
    <form method="get" @submit.prevent="submit">
      <input type="text" placeholder="Användarnamn" v-model="cert.username" />
      <input type="password" placeholder="Lösenord" v-model="cert.password" />
      <button>Logga in</button>
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
.s-logo {
  width: 42px;
  height: 60px;
  position: fixed;
  margin-left: 32px;
}

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
  margin-left: 25px;

  input {
    margin: 10px;
    height: 50px;
    text-align: center;
    color: #fff;
    letter-spacing: 0.5rem;
    font-size: 14px;
    border-radius: 3px;
    border: 1px solid #fff;

    &::placeholder {
      color: white;
    }
  }

  button {
    height: 50px;
    margin: 20px;
    outline: none;
    background: #fff;
    color: black;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>
