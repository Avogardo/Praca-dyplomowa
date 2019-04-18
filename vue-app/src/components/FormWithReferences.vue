<template>
    <div class="form-wrapper">
        <form>
            <input
                v-for="(input, index) in formsWithReferences"
                :key="`${input.text}${index}withReferences`"
                ref="input"
                :value="input.text"
                :type="input.type"
                v-on:click="input.action"
                v-on:keyup="onKeyAction"
            />
        </form>
    </div>
</template>

<style lang="scss">
    .form-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        margin-top: 10px;
        margin-bottom: 40px;
    }

    input {
        border-radius: 4px;
    }

    input[type=text], input[type=number] {
        border: 2px solid #7fce7f;
        padding: 3px;
        margin: 3px;
    }

    input[type=submit] {
        background-color: #4CAF50;
        color: #ffffff;
        padding: 10px 0;
        margin: 8px 0;
        border: none;
        cursor: pointer;
    }
</style>

<script>
  import FormTypes from '../FormTypes';

  export default {
    name: 'FormWithReferences',
    props: ['formsWithReferences'],
    data: function() {
      return {
        formTypes: FormTypes,
      };
    },
    methods: {
      onKeyAction: function (event) {
        event.preventDefault();
        this.$refs.input.forEach((element, index) => {
          this.formsWithReferences[index].text = element.value;
        });
        this.$emit('changed', this.formsWithReferences);
      },
    },
  }
</script>
