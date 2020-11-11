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
    <button>Add Streams</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Flow",
  async created() {
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
}
button {
  width: 347px;
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
</style>
