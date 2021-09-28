<template>
  <div class="card-container">
    <SingleCurrencie v-for="item in currencie" :key="item.ID" :data="item" />
  </div>
</template>

<script>
import SingleCurrencie from "@/components/currencie/SingleCurrencie";

export default {
  name: "ListCurrencie",
  components: { SingleCurrencie },
  props: {
    currencie: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
