<template>
    <div>
        <Header/>
        <div class="environment-block">
            <h1>Try to use calculator</h1>
            <button class="change-calc-view" @click="onCleanHistory()">Clean history</button>
        </div>
        <ul class="historyOperations">
            <li v-for="({ operation, result }, index) in historyList" v-bind:key="index">
                <div class="expression">{{ operation }}</div><div class="equalSymbol">=</div><div class="expression">{{ result }}</div>
            </li>
        </ul>
    </div>
</template>

<script>

    import Header from '../components/Header'

    export default {

        name: "History",

        components: {
            Header,
        },

        computed: {
            historyList(){
              return this.$store.state.history
            }
        },

        methods: {
            onCleanHistory(){
                this.$store.commit('cleanHistory')
            }
        }
    }

</script>

<style lang="scss">

    .historyOperations {

        & .expression, .equalSymbol {
            display: inline-block;
            padding: 5px 10px;
            margin: 5px;
            font-size: 2em;
        }

        & .expression {
            border: 2px solid #dfe1e5;
            border-radius: 3px;
            color: #007ce3;
        }

        & .equalSymbol {
            color: #dfe1e5;
        }

    }

</style>
