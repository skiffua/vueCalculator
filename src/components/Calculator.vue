<template>
  <div class="calculator">
    <div class="calcScrean">
      <CalcScrean />
    </div>
    <div class="calc_buttons">
      <Button v-for="val in button_values" :key="val" :button_label="val" />
    </div>
  </div>
</template>

<script>
import CalcScrean from "./CalcScreen";
import Button from "./Button";

export default {
  components: {
    CalcScrean,
    Button
  },
  data: function() {
    return {
      button_values: [
        "(",
        ")",
        "%",
        "<-",
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        "0",
        ".",
        "=",
        "+"
      ]
    };
  }
};
</script>

<style>
.calculator {
  width: 60%;
  margin: auto;
}
.calcScrean {
    border: solid 2px #4d90fd;
    border-radius: 4px;
    text-align: right
}
.calc_buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
</style>
