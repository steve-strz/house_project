<template>
  <div class="home">
    <div class="panel">
      <div class="header">
        <TimeTile class="time_block" />
        <WeatherTile class="weather_block" />
      </div>
      <div class="block_main">
        <div class="block1">
          <TestTile style="background-color: rgb(211, 131, 180); color:white;" />
          <TestTile style="background-color: rgb(94, 148, 87); color:white;" />
          <div class="block2">
            <TestTile style="background-color: rgb(72, 123, 170); color:white;" />
            <TestTile style="background-color: rgb(189, 83, 83); color:white;" />
          </div>
        </div>
      </div>
      <div class="footer">
        <ButtonUtils />
        <ButtonUtils />
        <ButtonUtils />
        <ButtonUtils />
        <ButtonUtils />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherTile from "../components/WeatherTile";
import TimeTile from "../components/TimeTile";
import TestTile from "../components/TestTile";
import ButtonUtils from "../components/Button";

export default {
  name: "home",
  components: {
    WeatherTile,
    TimeTile,
    TestTile,
    ButtonUtils
  },
  data() {
    return {};
  },
  methods: {
    youHitMe() {
      console.log("Eh you hit me !");
    }
  }
};
</script>
<style scoped>
.panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.footer {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5% 5% 5%;
}
.block_main {
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 5%;
}

.block1 {
  flex: 2;
  display: flex;
  flex-direction: row;
}
.block2 {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.block3 {
  flex: 1;
  display: flex;
  flex-direction: row;
}
</style>