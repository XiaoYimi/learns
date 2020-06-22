<template>
  <button :disabled="disabled" :class="btnClass" @click="pageTo"><slot>Btn</slot></button>
</template>
 
<script>
export default {
  name: 'do-button',
  props: {
    size: {
      type: String,
      validator: v => ['small', 'medium', 'large'].filter(item => item === v).length
    },
    shape: {
      type: String,
      validator: v => ['circle', 'rectangle'].filter(item => item === v).length
    },
    // type 为关键字,无法定义为 props 字段
    types: {
      type: String,
      validator: v => ['red', 'orange'].filter(item => item === v).length
    },
    disabled: Boolean
  },
  data () {
    return {
      originClass: 'do-button'
    };
  },
  computed: {
    btnClass () {
      const { size, shape, types, disabled, originClass } = this
      return [
        originClass,
        size ? originClass + '-' + size : '',
        shape ? originClass + '-' + shape : '',
        types ? originClass + '-' + types : ''
      ]
    }
  },
  methods: {
    pageTo () {
      this.$emit('click')
    }
  },
}
</script>
 
<style lang="scss" scoped>
</style>