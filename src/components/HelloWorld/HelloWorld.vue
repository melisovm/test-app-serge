<template lang="pug">
  .hello_world__container.full_height.flex.center
    .hello_world__text_block Hello World!
    .hello_world__counter_block.cursor__pointer.unselectable(@click="setDecrementNumber()") {{getNumber | separateByHundred}}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'HelloWorld',
    data: () => ({}),
    computed: {
      ...mapGetters('number_operations', ['getNumber'])
    },
    methods: {
      ...mapActions('number_operations', ['decrementNumber']),

      setDecrementNumber() {
        this.decrementNumber();
      }
    },
    filters: {
      separateByHundred(value) {
        return value.toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
      }
    }
  };
</script>

<style lang="stylus">
  @import "../../mixins/default_settings"

  .hello_world__text_block
    margin-bottom 10px
</style>
