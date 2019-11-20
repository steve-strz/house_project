<template>
  <div>
    <p>Temp : {{cityTemp - 273.15}} °C</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      cityTemp: ""
    };
  },
  props: {
    msg: String
  },
  mounted() {
    this.$axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?id=6454924&APPID=eb3024461b5a09eddb1d57cdbfdc83fb"
      )
      .then(responce => (this.cityTemp = responce.data.main.temp));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
