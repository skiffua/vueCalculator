<template>
    <div>
        <Header />
        <Calculator />
        <button @click="onShowModalWindow()">Show modal window</button>
        <modal name="hello-world" class="modal-window">
            hello, world!
        </modal>
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
        },
        methods: {
            onShowModalWindow(){
                this.$modal.show('hello-world');
            }
        }

    }

</script>

<style scoped>
    .modal-window{
        color: red
    }
</style>
