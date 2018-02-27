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
        this.MasonryInit();
    }

    created () {
        window.onload = () => {
            this.MasonryInit();
        }
    }

    MasonryInit () {
        var elem = <HTMLElement> document.querySelector('.grid');
        var msnry = new Masonry( elem, {
            itemSelector: '.grid-item',
        });

        var msnry = new Masonry( elem, {
            gutter: 40,
        });
    }
}
</script>

<style lang="scss" scope>
    @import "./projectsComponent.scss";
</style>