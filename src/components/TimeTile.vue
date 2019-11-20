<template>
  <div class="time_block">
    {{getDay}}
    <br />
    {{getTime}}
  </div>
</template>

<script>
export default {
  name: "time_tile",
  data() {
    return {};
  },
  computed: {
    getTime() {
      return this.$store.state.time.hour;
    },
    getDay() {
      return this.$store.state.time.day;
    }
  },
  created() {
    this.$store.commit("updateHour", this.$moment().format("HH:mm:ss"));
    this.$store.commit("updateDay", this.$moment().format("DD/MM/YYYY"));
    this.updateTime();
  },
  methods: {
    updateTime() {
      setInterval(() => {
        this.$store.commit("updateHour", this.$moment().format("HH:mm:ss"));
        if (this.$store.state.time.hour == "00:00:00") {
          this.$store.commit("updateDay", this.$moment().format("DD/MM/YYYY"));
          console.log("TIME : methods [updateTime] - A new day begin :) ");
        }
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time_block {
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: start;
  align-content: start;
  font-size: 30px;
}
</style>
