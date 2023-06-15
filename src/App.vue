<template>
	<appHeader/>
	<router-view></router-view>
</template>

<script>
import appHeader from './components/appHeader.vue';
	export default {
    name: "App",
    component: {
        appHeader,
    },
    components: { appHeader }
}
</script>

<style lang="scss" scoped>

</style>