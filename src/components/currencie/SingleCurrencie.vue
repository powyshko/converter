<template>
  <div class="card">
    <div class="card__title">{{ data.Name }}</div>
    <div class="card__body">
      <div class="card__row">
        <div class="card__currencie">
          1 {{ data.CharCode }}
          <IconTransferArrow class="card__icon" width="18px" height="18px" />
          {{ data.Value }}
        </div>
        <div class="card__previous" :class="setClassPrevious">
          <template v-if="setClassPrevious === 'top'">
            <IconArrowUp style="fill: #4dd14d" />
          </template>
          <template v-else>
            <IconArrowDown style="fill: #a50b0b" />
          </template>
          {{ getPrevious }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTransferArrow from "@/assets/img/transfer-arrows.svg";
import IconArrowUp from "@/assets/img/arrow-up.svg";
import IconArrowDown from "@/assets/img/arrow-down.svg";

export default {
  name: "SingleCurrencie",
  components: { IconTransferArrow, IconArrowUp, IconArrowDown },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getPrevious() {
      return (this.data.Value - this.data.Previous).toFixed(4);
    },
    setClassPrevious() {
      return this.getPrevious > 0 ? "top" : "bottom";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 48%;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  margin: 0px 0px 20px 0px;

  &__title {
    color: #acacac;
    margin: 0px 0px 15px 0px;
  }

  &__body {
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    color: #555555;
    font-weight: 500;
  }

  &__icon {
    margin: 0px 10px 0px 10px;
  }

  &__currencie {
  }

  &__previous {
  }
}

.top {
  color: #4dd14d;
}

.bottom {
  color: #a50b0b;
  position: relative;
}
</style>
