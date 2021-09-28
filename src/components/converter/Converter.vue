<template>
  <div class="converter-container">
    <SingleConverterCard
      @select="onSelectedData"
      :infoCurrencie="getDataCurrencie"
      ><input
        @input="onInput(valueCurrencie)"
        v-model="valueCurrencie"
        class="input-currencie"
        type="text"
    /></SingleConverterCard>
    <div class="transfer-block" @click="onTransfer">
      <IconTransferArrow width="18px" height="18px" />
    </div>
    <SingleConverterCard
      @select="onSelectedConvert"
      :infoCurrencie="getConvertCurrencie"
      ><div>{{ resultConverter }}</div></SingleConverterCard
    >
  </div>
</template>

<script>
import SingleConverterCard from "@/components/converter/SingleConverterCard";
import IconTransferArrow from "@/assets/img/transfer-arrows.svg";

export default {
  name: "Converter",
  components: { SingleConverterCard, IconTransferArrow },
  data() {
    return {
      charCodeData: "USD",
      charCodeConvert: "USD",
      resultConverter: "",
      valueCurrencie: "",
      transfer: false,
    };
  },
  created() {
    this.$store.dispatch("getCharCodeCur", "USD");
    this.$store.dispatch("getCharCodeConv", "USD");
  },
  computed: {
    getDataCurrencie() {
      return this.$store.getters.getCurrenciesSingle(this.charCodeData);
    },
    getConvertCurrencie() {
      return this.$store.getters.getCurrenciesSingle(this.charCodeConvert);
    },
  },
  watch: {
    charCodeData() {
      this.onInput(this.valueCurrencie);
    },
    charCodeConvert() {
      this.onInput(this.valueCurrencie);
    },
  },
  methods: {
    onSelectedData(data) {
      this.charCodeData = data;
      this.$store.dispatch("getCharCodeCur", data);
    },
    onSelectedConvert(data) {
      this.charCodeConvert = data;
      this.$store.dispatch("getCharCodeConv", data);
    },
    onInput(value) {
      let resultCurrencie = this.getDataCurrencie.Value * value;
      this.resultConverter = (
        resultCurrencie / this.getConvertCurrencie.Value
      ).toFixed(4);
    },
    onTransfer() {
      this.transfer = !this.transfer;
      if (this.transfer) {
        this.charCodeData = this.$store.getters.getCharCodeConv;
        this.charCodeConvert = this.$store.getters.getCharCodeCur;
      } else {
        this.charCodeData = this.$store.getters.getCharCodeCur;
        this.charCodeConvert = this.$store.getters.getCharCodeConv;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.converter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px 0px 0px 0px;
}
.input-currencie {
  border-bottom: 1px solid #555555;
  width: 200px;
}

.transfer-block {
  padding: 8px;
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;
}
</style>
