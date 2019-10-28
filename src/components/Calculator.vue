<template>
    <div>
        <div class="environment-block">
            <h1>Try to use calculator</h1>
            <button class="change-calc-view">View</button>
        </div>

        <div class="calculator">
            <div class="calc-screen">
                <strong class="output-field">{{ error || calc_screen || 0 }}</strong>
            </div>
            <div class="calc_buttons">
                <div class="engineer-block">
                    <button class="btn-grey two-horizontal-cells" value="convert-degree" onclick="">Rad | Deg</button>
                    <button class="btn-grey" value="fact">x!</button>
                    <button class="btn-grey" value="inv">Inv</button>
                    <button class="btn-grey" value="sin">sin</button>
                    <button class="btn-grey" value="in">ln</button>
                    <button class="btn-grey" value="pi">pi</button>
                    <button class="btn-grey" value="cos">cos</button>
                    <button class="btn-grey" value="log">log</button>
                    <button class="btn-grey" value="e">e</button>
                    <button class="btn-grey" value="tan">tan</button>
                    <button class="btn-grey" value="sqrt">sqrt</button>
                    <button class="btn-grey" value="ans">Ans</button>
                    <button class="btn-grey" value="exp">EXP</button>
                    <button class="btn-grey" value="sqr">sqr</button>
                </div>
                <div class="standard-block">
                    <button class="btn-grey" value="(">(</button>
                    <button class="btn-grey" value=")">)</button>
                    <button class="btn-grey" value="%">%</button>
                    <button class="btn-grey" value="AC" @click="onClearScreen()">CE</button>
                    <button class="btn-light" value="7" @click="onDigitClick('7')">7</button>
                    <button class="btn-light" value="8" @click="onDigitClick('8')">8</button>
                    <button class="btn-light" value="9" @click="onDigitClick('9')">9</button>
                    <button class="btn-grey" value="/" @click="onOperationClick('/')">/</button>
                    <button class="btn-light" value="4" @click="onDigitClick('4')">4</button>
                    <button class="btn-light" value="5" @click="onDigitClick('5')">5</button>
                    <button class="btn-light" value="6" @click="onDigitClick('6')">6</button>
                    <button class="btn-grey" value="*" @click="onOperationClick('*')">*</button>
                    <button class="btn-light" value="1" @click="onDigitClick('1')">1</button>
                    <button class="btn-light" value="2" @click="onDigitClick('2')">2</button>
                    <button class="btn-light" value="3" @click="onDigitClick('3')">3</button>
                    <button class="btn-grey" value="-" @click="onOperationClick('-')">-</button>
                    <button class="btn-light" value="0" @click="onDigitClick('0')">0</button>
                    <button class="btn-grey" value="." @click="onDotClick()">.</button>
                    <button class="btn-blue" value="=" @click="onGetResult()">=</button>
                    <button class="btn-grey" value="+" @click="onOperationClick('+')">+</button>
                </div>
            </div>
            <p v-for="(operation, index) in history" v-bind:key="index">{{ operation }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                calc_screen: '',
                error: '',
                first_argument: '',
                second_argument: '',
                lastSecond_argument: '',
                operation: '',
                lastOperation: '',
                history: []
            }
        },

        methods: {
            onClearScreen() {
                this.calc_screen = '';
                this.first_argument = '';
                this.second_argument = '';
                this.lastSecond_argument = '';
                this.operation = '';
                this.lastOperation = '';
                this.error = '';
            },

            onDigitClick(digit) {

                if (this.error) {
                    this.onClearScreen();
                }

                const number = this.operation ? this.second_argument : this.first_argument;

                if (number === '0') {
                    this.operation ? this.second_argument = '' : this.first_argument = '';
                }

                if (this.operation) {
                    this.second_argument += digit;
                } else {
                    this.first_argument += digit;
                }
                this.result();
            },

            onDotClick() {

                if (!this.operation) {
                    this.first_argument = this.addDot(this.first_argument);
                } else {
                    this.second_argument = this.addDot(this.second_argument);
                }

                this.result();
            },

            addDot(argument) {

                argument = argument || '0';
                argument += argument.indexOf('.') !== -1 ? '' : '.';
                return argument;
            },

            onOperationClick(operation) {

                if (!this.first_argument) {
                    this.first_argument = '0';
                }

                this.first_argument = this.deleteDotIfNoDigitAfter(this.first_argument)

                if (this.second_argument) {
                    this.second_argument = this.deleteDotIfNoDigitAfter(this.second_argument)
                    this.onGetResult();
                }

                this.operation = operation;
                this.result();
            },

            deleteDotIfNoDigitAfter(argument) {

                if (argument.indexOf('.') === (argument.length - 1)) {
                    return argument.slice(0, argument.length - 1)
                } else {
                    return argument
                }
            },

            onGetResult() {

                try {
                    if (!this.first_argument || (!this.first_argument && !this.second_argument)) {
                        return;
                    }

                    if (!this.operation && !this.lastOperation) {
                        return;
                    }

                    if (this.first_argument && !this.operation && !this.second_argument && this.lastOperation) {
                        this.operation = this.lastOperation;
                        this.second_argument = this.lastSecond_argument;
                    }

                    if (this.first_argument && this.operation && !this.second_argument) {
                        this.second_argument = this.first_argument;
                    }

                    if (this.second_argument === '0' && this.operation === '/') {
                        throw new Error('Can not divide by zero');
                    }

                    if (this.second_argument) {
                        this.second_argument = this.deleteDotIfNoDigitAfter(this.second_argument)
                    }

                    this.result();

                    const result = eval(this.calc_screen).toString();
                    this.history.push(this.calc_screen + '=' + result);
                    this.first_argument = result;
                    this.lastSecond_argument = this.second_argument;
                    this.second_argument = '';

                    this.lastOperation = this.operation;
                    this.operation = '';

                    this.result();
                } catch (e) {
                    this.error = e.message;
                }
            },

            result() {
                this.calc_screen = this.first_argument + this.operation + this.second_argument;
            }
        }
    }
</script>

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

            .output-field {
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
