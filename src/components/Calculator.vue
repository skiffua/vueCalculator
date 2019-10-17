<template>
  <div class="calculator">
    <div class="calcScrean">
      <CalcScrean />
    </div>
    <div class="calc_buttons">
      <Button 
        v-for="val in button_values" 
        :key="val" 
        :button_label="val" 
        :value="val" 
      />
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
  margin: 20px auto;
  width: 60%;
  max-width: 400px;
}
.calcScrean {
    border: solid 2px #4d90fd;
    border-radius: 4px;
    text-align: right
}
.calc_buttons {
  --grid_gap: 10px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 5vw);
  grid-column-gap: var(--grid_gap);
  grid-row-gap: var(--grid_gap);
}
</style>
