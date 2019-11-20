<template>
  <div class="button" @click="youHitMe()">
    <p>+</p>
  </div>
</template>

<script>
export default {
  name: "button",
  data() {
    return {};
  },
  methods: {
    youHitMe() {
      console.log("ejfhkdsfsdf");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  background-color: grey;
  opacity: 0.5;
  height: 100px;
  max-width: 100px;
  color: white;
  font-size: 30px;
  text-align: center;
}
</style>
