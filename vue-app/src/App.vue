<template>
  <div id="app">
    <Navigation />
    <router-view  :formsWithBinding="formsWithBinding" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
  import Navigation from './views/Navigation.vue';
  import FormModel from './FormModel';
  import FormTypes from './FormTypes';

  export default {
    name: 'app',
    data: function() {
      return {
        formsWithBinding: [],
      };
    },
    components: {
      Navigation,
    },
    mounted: function() {
      this.formsWithBinding = [
        new FormModel(FormTypes.text, 'text'),
        new FormModel(FormTypes.number, 0),
        new FormModel(FormTypes.submit, "Submit"),
      ];
    },
  }
</script>