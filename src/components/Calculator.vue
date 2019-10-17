<template>
  <div class="calculator">
    <div class="calcScrean">
      <CalcScrean />
    </div>
    <div class="calc_buttons">
      <Button 
        v-for="val in button_values" 
        :key="val.value" 
        :button_label="val.value"
        :button_goal="val.goal" 
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
        {goal: "operation_button", value: "("},
        {goal: "operation_button", value: ")"},
        {goal: "operation_button", value: "%"},
        {goal: "operation_button", value: "<-"},
        {goal: "digit_button", value: "7"},
        {goal: "digit_button", value: "8"},
        {goal: "digit_button", value: "9"},
        {goal: "operation_button", value: "/"},
        {goal: "digit_button", value: "4"},
        {goal: "digit_button", value: "5"},
        {goal: "digit_button", value: "6"},
        {goal: "operation_button", value: "*"},
        {goal: "digit_button", value: "1"},
        {goal: "digit_button", value: "2"},
        {goal: "digit_button", value: "3"},
        {goal: "operation_button", value: "-"},
        {goal: "digit_button", value: "0"},
        {goal: "operation_button", value: "."},
        {goal: "equal_button", value: "="},
        {goal: "operation_button", value: "+"},
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
