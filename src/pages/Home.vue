<template>
    <div>
        <Header />
        <Calculator />
    </div>
</template>

<script>

    import Header from '../components/Header'
    import Calculator from '../components/Calculator'

    export default {

        name: "Home",

        components: {
            Header,
            Calculator
        }

    }

</script>

<style scoped>

</style>