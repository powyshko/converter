<template>
  <div class="body-select">
    <div>{{ selectTest }}</div>
    <select v-model="selected" id="test" class="select">
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="selectTest"
        class="select__item"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectCurrencie",
  props: {
    options: {
      type: Array,
      default: () => {},
    },
    value: {
      type: String,
      default: "",
    },
    selectTest: {
      type: String,
      default: "",
    },
  },
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  border-bottom: 1px solid #555555;
}
</style>
