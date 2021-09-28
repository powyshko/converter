<template>
  <div class="card-block">
    <InputSearch
      :value="search"
      @search="search = $event"
      style="margin: 0px 0px 50px 0px"
      >Поиск</InputSearch
    >
    <ListCurrencie :currencie="currencieFilter" />
  </div>
</template>

<script>
import InputSearch from "@/components/UI/InputSearch";
import ListCurrencie from "@/components/currencie/ListCurrencie";

export default {
  name: "Currencie",
  components: { ListCurrencie, InputSearch },
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.$store.dispatch("getCurrencies");
  },
  computed: {
    getCurrencies() {
      return this.$store.getters.getCurrencies;
    },
    currencieFilter() {
      let search = this.search.trim().toLowerCase();
      let objArr = Object.values(this.getCurrencies);
      if (!search) return objArr;
      let array = objArr.filter((cur) => {
        if (cur.Name.toLowerCase().indexOf(search) !== -1 || cur.CharCode.toLowerCase().indexOf(search) !== -1) {
          return cur;
        }
      });
      return array;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-block {
  margin: 20px 0px 0px 0px;
}
</style>
