<template>
  <div class="weather_block">
    {{weather.cityName}}
    <br />
    {{weather.cityTemp}}°C
    <br />
    {{weather.citySky}}
  </div>
</template>

<script>
export default {
  name: "weather_tile",
  data() {
    return {
      weather: {
        cityName: "Undefined",
        cityTemp: "Undefined",
        citySky: "Undefined"
      },
      test: ""
    };
  },
  mounted() {
    console.log("WEATHER : mounted - Get temperature");
    this.$axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?id=6454924&APPID=eb3024461b5a09eddb1d57cdbfdc83fb"
      )
      .then(
        responce => (
          (this.weather.cityName = responce.data.name),
          (this.weather.cityTemp = parseInt(responce.data.main.temp) - 273),
          (this.weather.citySky = responce.data.weather[0].main)
        )
      );
    this.getTempCity();
  },
  methods: {
    getTempCity() {
      setInterval(() => {
        console.log("WEATHER : methods [getTempCity] - Refresh temperature");
        this.$axios
          .get(
            "http://api.openweathermap.org/data/2.5/weather?id=6454924&APPID=eb3024461b5a09eddb1d57cdbfdc83fb"
          )
          .then(
            responce => (
              (this.weather.cityName = responce.data.name),
              (this.weather.cityTemp = parseInt(responce.data.main.temp) - 273),
              (this.weather.citySky = responce.data.weather[0].main)
            )
          );
      }, 60000);
    }
  },
  filters: {
    moment: function(test) {
      return this.$moment(test).format("YYYY-MM-DD");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather_block {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: start;
  font-size: 28px;
  text-align: right;
  padding-right: 10px;
}
</style>
