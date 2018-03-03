<template src="./projectsComponent.html"></template>

<script lang="ts" defer>
/// <reference path="./../../../node_modules/vue-router/types/vue.d.ts" />
import { Vue, Component, Prop } from "vue-property-decorator";
import * as Masonry from 'masonry-layout';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);

@Component
export default class Projects extends Vue {
    beforeRouteEnter(to: any, from: any, next: any) {
        next((_this: Projects) => {
            _this.Update();
        });
    };
    
    Update () {
        // window.onload = () => {
        //     this.MasonryInit();
        // }
        // if (document.readyState === "complete") {
        //     this.MasonryInit();
        // } else {
            // window.onload = () => {
            //     this.MasonryInit();
            // }
        // }
        // debugger;
    }

    mounted () {
        const imgPromises = Array.from(document.images)
            .filter(img => !img.complete)
            .map(img => new Promise(resolve => img.onload = resolve))

        Promise.all(imgPromises).then(() => {
            this.MasonryInit();
        })

        // const imgPromises = []
        //     .every.call(document.images, (img: HTMLImageElement) => img.complete)
        //     .map((img: HTMLImageElement) => new Promise(resolve => img.onload = resolve))

        // Promise.all(imgPromises).then(() => {
        //     console.log('loaded!')
        // })
    }

    MasonryInit () {
        var elem = <HTMLElement> document.querySelector('.grid');

        var msnry = new Masonry( elem, {
            itemSelector: '.grid-item',
        });

        var msnry = new Masonry( elem, {
        });
    }
}
</script>

<style lang="scss" scope>
    @import "./projectsComponent.scss";
</style>