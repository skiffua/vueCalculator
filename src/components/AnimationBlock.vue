<template>
    <div class="container text-center pt-5">
        <button
                class="btn btn-primary mb-5"
                @click="show = !show"
        >
            Toggle
        </button>
        <transition
                name="ma"
        >
            <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nostrum!</p>
        </transition>
    </div>

</template>

<script>
    export default {
        name: "AnimationBlock",
        data () {
            return {
                show: false,
            }
        }
    }
</script>

<style scoped>

    .ma-enter {
        opacity: 0;
    }

    .ma-enter-active {
        transition: opacity 2s;
    }

    .ma-enter-to {

    }

    .ma-leave {

    }

    .ma-leave-active{
        animation: 1s ma-slide forwards;
        transition: opacity 1s ;
    }

    .ma-leave-to {
        opacity: 0;
    }

    @keyframes ma-slide {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-100px);
        }
    }

</style>
