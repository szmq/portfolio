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
            this.$refs.loader.addEventListener("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", (e) => {
                const loader = e.currentTarget as HTMLElement;

                if (loader) {
                    loader.classList.add('loader--hide');
                }
            }, false);
        }, 3000)
    }
}
</script>

<style lang="scss" scope>
    @import "./loaderComponent.scss";
</style>