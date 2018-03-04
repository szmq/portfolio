<template src="./projectSlideComponent.html"></template>

<script lang="ts" defer>
/// <reference path="./../../../node_modules/vue-router/types/vue.d.ts" />
import { Vue, Component, Prop } from "vue-property-decorator";

interface ProjectVM {
    name: string;
    description: string;
    downloadUrl: string;
    speed: number;
    slides: Array<String>;
}

@Component({
    props: {
        Project: {
            type: Object
        }
    },
})
export default class ProjectSlide extends Vue {
    Project: ProjectVM;
    SlidesNumber = 0;
    CurrentSlide = 0;

    mounted() {
        if (this.Project) {
            this.SlidesNumber = this.Project.slides.length;
        } 

        this.ChangeSlide();
    }

    ChangeSlide() { 
        setInterval(() => {
            this.CurrentSlide < this.SlidesNumber - 1 ? this.CurrentSlide += 1 : this.CurrentSlide = 0;
        }, this.Project.speed );
    }

    get SlideUrl () {
        return this.Project.slides[this.CurrentSlide];
    }
}
</script>

<style lang="scss" scope>
    @import "./projectSlideComponent.scss";
</style>