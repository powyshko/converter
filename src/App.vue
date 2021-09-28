<template>
  <div id="app">
    <div class="mainwrapper">
      <div class="controls">
        <button
          class="btn"
          :class="{ active: showCurrencie }"
          @click="onCurrencie"
        >
          Валюты
        </button>
        <button
          class="btn"
          :class="{ active: showConverter }"
          @click="onConverter"
        >
          Конвертер
        </button>
      </div>
      <Converter v-if="showConverter" />
      <Currencie v-if="showCurrencie" />
    </div>
  </div>
</template>

<script>
import Currencie from "@/components/currencie/Currencie";
import Converter from "@/components/converter/Converter";

export default {
  name: "App",
  components: { Currencie, Converter },
  data() {
    return {
      showCurrencie: true,
      showConverter: false,
    };
  },
  methods: {
    onCurrencie() {
      this.showCurrencie = true;
      this.showConverter = false;
    },
    onConverter() {
      this.showCurrencie = false;
      this.showConverter = true;
    },
  },
};
</script>

<style lang="scss">
#app {
  background: #2697ff;
}

.btn {
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  margin: 0px 0px 0px 10px;

  &:first-child {
    margin: 0;
  }

  &.active {
    font-weight: bold;
    color: #2697ff;
  }
}
</style>
