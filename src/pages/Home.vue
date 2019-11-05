<template>
    <div>
        <Header />
        <Calculator />
        <AnimationBlock />
    </div>
</template>

<script>

    import Header from '../components/Header'
    import Calculator from '../components/Calculator'
    import AnimationBlock from '../components/AnimationBlock'

    export default {

        name: "Home",

        components: {
            Header,
            Calculator,
            AnimationBlock
        }

    }

</script>

<style scoped>

</style>
