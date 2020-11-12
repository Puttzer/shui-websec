<template>
  <div class="flow">
    <h1>Inga kanaler</h1>
    <div class="list">
      <ul>
        <li class="list-item" v-for="stream in pickedTags" :key="stream._id">
          <p>{{ stream.date }}</p>
          <p>{{ stream.content }}</p>
          <p>{{ stream.tags }}</p>
        </li>
      </ul>
    </div>
    <router-link to="/settings">Add streams</router-link>
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
    const response = await axios.get("/api/tags");
    this.pickedTags = response.data;
  },
  data() {
    return {
      userID: null,
      streams: [],
      pickedTags: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.flow {
  color: white;
}
a {
  display: inline-block;
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
  text-decoration: none;
}

.list {
  .list-item {
    color: #000;
    padding: 10px;
    margin: 1rem 0;
    background: #fff;
  }
}
</style>
