<template>
  <div class="base-input">
    <label><slot /></label>
    <input type="search" v-model="search" />
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      search: this.value,
    };
  },
  watch: {
    search(value) {
      this.$emit("search", value);
    },
  },
};
</script>

<style lang="scss">
.base-input {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;

  input {
    display: block;
    width: 100%;
    height: 45px;
    margin: 15px 0px 15px 0px;
    border-radius: 10px;
    padding: 0px 15px;
  }
}
</style>
