<template>
  <div class="flow">
    <!-- {{ userID }} -->

    <div class="list">
      <ul>
        <li class="list-item" v-for="stream in streams" :key="stream._id">
          <p>{{ stream.date }}</p>
          <p>{{ stream.content }}</p>
          <p>{{ stream.tags }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Flow",
  async created() {
    const res = await axios.get("http://localhost:5000/api/flow");
    console.log(res.data);
  },
  data() {
    return {
      userID: null,
      streams: [],
    };
  },
  async mounted() {
    const RESPONSE = await axios.get("http://localhost:5000/api/flow");
    this.streams = RESPONSE.data;
  },
};
</script>
<style lang="scss" scoped>
.flow {
  color: white;
}
</style>
