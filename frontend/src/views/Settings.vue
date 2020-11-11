<template>
  <div class="flow">
    <div class="list">
      <ul>
        <li class="list-item" v-for="stream in streams" :key="stream._id">
          <p>{{ stream.date }}</p>
          <p>{{ stream.content }}</p>
          <p>{{ stream.tags }}</p>
        </li>
      </ul>
    </div>
    <div class="popup">
      <h2>streams</h2>
      <ul class="tags">
        <li>
          <span>#urgent</span
          ><button><img src="../assets/icons/Vector.svg" alt="" /></button>
        </li>
        <li>
          <span>#boras</span
          ><button><img src="../assets/icons/Vector.svg" alt="" /></button>
        </li>
        <li>
          <span>#gothenburg</span
          ><button><img src="../assets/icons/Vector.svg" alt="" /></button>
        </li>
      </ul>

      <div><input type="text" /> <button>checkicon</button></div>
      <button class="remove">remove user</button>
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
    align-items: center;
  }
  span {
    width: 131px;
    height: 32px;
    left: 32px;
    top: 135px;
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
  }
}
</style>
