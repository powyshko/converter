<template>
  <div class="card-converter">
    <div class="card-converter__title">
      {{ infoCurrencie.Name }}
    </div>
    <div class="card-converter__row">
      <SelectCurrencie
        v-model="select"
        :options="getKeysCurrencies"
        @input="$emit('select', select)"
        :selectTest="infoCurrencie.CharCode"
      ></SelectCurrencie>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SelectCurrencie from "@/components/UI/SelectCurrencie";

export default {
  name: "SingleConverterCard",
  components: { SelectCurrencie },
  props: {
    infoCurrencie: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getKeysCurrencies() {
      return this.$store.getters.getKeysCurrencies;
    },
  },
  data() {
    return {
      select: this.infoCurrencie.CharCode,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-converter {
  width: 48%;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 16px;

  &__title {
    color: #acacac;
    margin: 0px 0px 15px 0px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    color: #555555;
    font-weight: 500;
  }
}
</style>
