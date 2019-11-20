<template>
  <div class="time_block">
    <p>I'm a new tile :)</p>
  </div>
</template>

<script>
export default {
  name: "time_tile",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time_block {
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border: 1px solid black;
}
</style>
