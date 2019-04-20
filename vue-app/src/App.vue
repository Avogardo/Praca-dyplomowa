<template>
  <div id="app">
    <Navigation />
    <router-view
      :formsWithBinding="formsWithBinding"
      :formsWithReferences="formsWithBinding"
      @changed="onChange"
    />
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
  import Navigation from './views';
  import FormModel from './FormModel';
  import FormTypes from './FormTypes';

  export default {
    name: 'app',
    data: function() {
      return {
        formsWithBinding: [],
        formsWithReferences: [],
        text: 'This is an input',
        number: 0,
      };
    },
    components: {
      Navigation,
    },
    mounted: function() {
      this.formsWithBinding = [
        new FormModel(FormTypes.text, this.text),
        new FormModel(FormTypes.number, this.number),
        new FormModel(FormTypes.submit, "Submit", this.onSubmit),
      ];

      this.formsWithReferences = [
        new FormModel(FormTypes.text, 'This is an input'),
        new FormModel(FormTypes.number, 0),
        new FormModel(FormTypes.submit, "Submit", this.onSubmit),
      ];
    },
    methods: {
      onSubmit: function(event) {
        event.preventDefault();
        console.log(this.formsWithBinding);
        console.log(this.formsWithReferences);
      },
      onChange: function(formsWithReferences) {
        this.formsWithReferences = formsWithReferences;
      },
    },
  };
</script>