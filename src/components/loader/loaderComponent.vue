<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template src="./loaderComponent.html"></template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Loader extends Vue {
    $refs: {
        loader: HTMLElement;
    }

    mounted() {
        setTimeout(() => {
            this.$refs.loader.classList.remove('loader--active');
        }, 3000)

        this.$refs.loader.addEventListener("transitionend", detectTheEnd, false);
        this.$refs.loader.addEventListener("webkitTransitionEnd", detectTheEnd, false);
        this.$refs.loader.addEventListener("mozTransitionEnd", detectTheEnd, false);
        this.$refs.loader.addEventListener("msTransitionEnd", detectTheEnd, false);
        this.$refs.loader.addEventListener("oTransitionEnd", detectTheEnd, false);

        function detectTheEnd(e: any) {
            const loader = e.currentTarget as HTMLElement;

            if (loader && e.propertyName == "visibility") {
                loader.classList.add('loader--hide');
            }
        }
    }
}
</script>

<style lang="scss" scope>
    @import "./loaderComponent.scss";
</style>