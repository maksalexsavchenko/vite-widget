<template>
   <widget-component/>
</template>

<script>


import WidgetComponent from "./components/WidgetComponent.vue";

export default {
    name: 'App',
   components: {WidgetComponent},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
   font-family: 'Inter', sans-serif;
   padding: 0;
   margin: 0;
}
</style>
