<template>
  <div>
  <div class="environment-block">
    <h1>Try to use calculator</h1>
    <button class="change-calc-view">View</button>
  </div>
  <div class="calculator">
    <div class="calc-screen">
        <strong>0</strong>
    </div>
    <div class="calc_buttons">
      <div class="engineer-block">
        <button class="btn-grey two-horizontal-cells" value="convert-degree" onclick="">Rad | Deg</button>
        <button class="btn-grey" value="fact" onclick="">x!</button>
        <button class="btn-grey" value="inv" onclick="">Inv</button>
        <button class="btn-grey" value="sin" onclick="">sin</button>
        <button class="btn-grey" value="in" onclick="">ln</button>
        <button class="btn-grey" value="pi" onclick="">pi</button>
        <button class="btn-grey" value="cos" onclick="">cos</button>
        <button class="btn-grey" value="log" onclick="">log</button>
        <button class="btn-grey" value="e" onclick="">e</button>
        <button class="btn-grey" value="tan" onclick="">tan</button>
        <button class="btn-grey" value="sqrt" onclick="">sqrt</button>
        <button class="btn-grey" value="ans" onclick="">Ans</button>
        <button class="btn-grey" value="exp" onclick="">EXP</button>
        <button class="btn-grey" value="sqr" onclick="">sqr</button>
      </div>
      <div class="standard-block">
        <button class="btn-grey" value="(" onclick="">(</button>
        <button class="btn-grey" value=")" onclick="">)</button>
        <button class="btn-grey" value="%" onclick="">%</button>
        <button class="btn-grey" value="AC" onclick="">AC</button>
        <button class="btn-light" value="7" onclick="">7</button>
        <button class="btn-light" value="8" onclick="">8</button>
        <button class="btn-light" value="9" onclick="">9</button>
        <button class="btn-grey" value="/" onclick="">/</button>
        <button class="btn-light" value="4" onclick="">4</button>
        <button class="btn-light" value="5" onclick="">5</button>
        <button class="btn-light" value="6" onclick="">6</button>
        <button class="btn-grey" value="*" onclick="">*</button>
        <button class="btn-light" value="1" onclick="">1</button>
        <button class="btn-light" value="2" onclick="">2</button>
        <button class="btn-light" value="3" onclick="">3</button>
        <button class="btn-grey" value="-" onclick="">-</button>
        <button class="btn-light" value="0" onclick="">0</button>
        <button class="btn-grey" value="." onclick="">.</button>
        <button class="btn-blue" value="=" onclick="">=</button>
        <button class="btn-grey" value="+" onclick="">+</button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">

  @import '../assets/variables';

  .environment-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin-top: 60px;
    padding: 0 $environment-block-padding-big-screen;
    border-bottom: 1px solid #ebebeb;
    color: #4f4f4f;
    background-color: #fbfbfb;

    @media screen and (max-width: 620px) {
      padding: 0 $environment-block-padding-small-screen;
    }

    .change-calc-view {
      width: 120px;
      height: 25px;
      border: none;
      border-radius: 3px;
      color: #fbfbfb;
      background-color: #ff7c1f;
    }
  }

  .calculator {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;

    @media screen and (max-height: 400px) {
      overflow-y: scroll;
    }

    .calc-screen {
      padding-right: 10px;
      border: solid 2px #4d90fd;
      border-radius: 4px;
      text-align: right;

      strong {
        font-size: 2em;
        letter-spacing: 2px;
      }
    }

    .two-horizontal-cells {
      grid-area: large_button;
    }

    .engineer-block {
      display: inline-grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, 45px);
      grid-template-areas: 'large_button large_button . ';
      grid-gap: $grid-gap-wide-screen;
      width: 40%;
      box-sizing: border-box;
      margin-top: 10px;
      padding-right: $grid-gap-wide-screen;

      @media screen and (max-width: 620px) {
        display: none;
      }
    }

    .standard-block {
      display: inline-grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 45px);
      grid-gap: $grid-gap-wide-screen;
      width: 60%;
      margin-top: 10px;

      @media screen and (max-width: 620px) {
        grid-gap: $grid-gap-mobile;
        width: 100%;
      }
    }

    .calc_buttons button {
      padding: 0;
      border-style: none;
      border-radius: 4px;
      font-size: 1.1em;
      font-weight: 400;

      &:hover {
        cursor: pointer;
        filter: brightness(95%);
      }

      &:focus {
        outline: 0;
      }

      &.btn-grey {
        background-color: $grey-color;
      }

      &.btn-light {
        background-color: $light-color;
      }

      &.btn-blue {
        background-color: $blue-color;
      }
    }
  }
</style>
