<template>
  <div class="flow">
    <div class="popup">
      <div class="close-popup-btn" @click="$router.go(-1)">&times;</div>
      <h2>streams</h2>
      <ul class="tags">
        <li v-for="stream in streams" :key="stream._id">
          <span @click="addStream(stream)">{{ stream.tags }}</span>
          <button @click="removeTag(stream)">
            <img src="../assets/icons/Vector.svg" alt="cross-vector" />
          </button>
        </li>
      </ul>

      <div>
        <input type="text" placeholder="randomtext" />
        <button class="check">
          <img src="../assets/icons/checkmark.svg" alt="checkmark" />
        </button>
      </div>
      <button class="remove" @click="removeUser">Remove current user</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Flow",
  async created() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("auth")}`;

    const res = await axios.get("http://localhost:5000/api/flow");
    this.streams = res.data;
    console.log(res.data);
  },
  data() {
    return {
      userID: null,
      streams: [],
    };
  },
  methods: {
    addStream(stream) {
      return axios.post("/api/tags", stream).then(() => {
        this.$router.go(-1);
      });
    },

    removeUser() {
      return axios
        .delete("/api/user", {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then(() => {
          sessionStorage.removeItem("auth");
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.flow {
  color: white;
  min-height: 100vh;
}
.tags {
  list-style: none;

  li {
    display: flex;
    padding: 10px;
    align-items: center;
  }
  span {
    // width: 131px;
    height: 32px;
    // left: 32px;
    // top: 135px;
    color: white;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  button {
    background: transparent;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0px 4px 4px 0px;
    border: none;
  }
}
.popup {
  background: #ef4343;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 75vh;
  padding-bottom: 30px;

  .close-popup-btn {
    top: 0;
    right: 1rem;
    font-size: 4rem;
    position: fixed;
  }

  .remove {
    margin-top: auto;
    width: 347px;
    height: 72px;
    left: 32px;
    top: 499px;
    background: #082756;
    border-radius: 4px;
    color: white;
    width: 100%;
    font-size: 24px;
    font-family: "PT Sans";
    border: none;
  }

  input {
    width: 347px;
    height: 72px;
    left: 32px;
    top: 399px;
    background: transparent;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
    color: #fff;
    font-family: "PT Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    &::placeholder {
      color: #fff;
      font-family: "PT Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 150%;
      text-align: center;
    }

    .check {
      width: 72px;
      height: 72px;
      background: #FFFFFF;
      border: 2px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 0px 4px 4px 0px;
    }
  }
}
</style>
