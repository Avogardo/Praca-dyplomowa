<template>
  <p>loaded</p>
</template>

<script>
export default {
  name: 'FormWithBinding',
  props: ['formsWithBinding'],
  mounted: function() {
    console.log(this.formsWithBinding);
  },
}
</script>
