<template src="./projectsComponent.html"></template>

<script lang="ts">
/// <reference path="./../../../node_modules/vue-router/types/vue.d.ts" />
import { Vue, Component, Prop, Inject, Provide } from "vue-property-decorator";
import * as Masonry from 'masonry-layout';
// import ProjectSlide from './../project-slide/projectSlideComponent.vue';
import ProjectSlide from "./../project-slide/ProjectSlideComponent.vue";

@Component({
    components: {
        ProjectSlide
    }
})
export default class Projects extends Vue {
    Projects = [
        {
            'name': 'project1', 
            'description': 'project1 desc',
            'downloadUrl': '#',
            'speed': '3700',
            'slides': [
                'http://cloud.screenpresso.com/pvTvc/2018-03-03_23h15_00.png',
                'http://cloud.screenpresso.com/DpaR/2018-03-03_23h17_23.png',
            ]
        },
        {
            'name': 'project2', 
            'description': 'project2 desc',
            'downloadUrl': '#',
            'speed': '2800',
            'slides': [
                'http://cloud.screenpresso.com/DpaR/2018-03-03_23h17_23.png',
                'http://cloud.screenpresso.com/pvTvc/2018-03-03_23h15_00.png',
            ]
        },
        {
            'name': 'project3', 
            'description': 'project3 desc',
            'downloadUrl': '#',
            'speed': '3200',
            'slides': [
                'http://cloud.screenpresso.com/DpaR/2018-03-03_23h17_23.png',
                'http://cloud.screenpresso.com/pvTvc/2018-03-03_23h15_00.png',
            ]
        },
        {
            'name': 'project4', 
            'description': 'project1 desc',
            'downloadUrl': '#',
            'speed': '3300',
            'slides': [
                'http://cloud.screenpresso.com/DpaR/2018-03-03_23h17_23.png',
                'http://cloud.screenpresso.com/pvTvc/2018-03-03_23h15_00.png',
            ]
        },
        {
            'name': 'project5', 
            'description': 'project2 desc',
            'downloadUrl': '#',
            'speed': '2900',
            'slides': [
                'http://cloud.screenpresso.com/DpaR/2018-03-03_23h17_23.png',
                'http://cloud.screenpresso.com/pvTvc/2018-03-03_23h15_00.png',
            ]
        },
        {
            'name': 'project6', 
            'description': 'project3 desc',
            'downloadUrl': '#',
            'speed': '3500',
            'slides': [
                'http://cloud.screenpresso.com/pvTvc/2018-03-03_23h15_00.png',
                'http://cloud.screenpresso.com/DpaR/2018-03-03_23h17_23.png',
            ]
        },
    ];

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