<template>
  <div class="final-test">
    <div>{{ finalAnswers }}</div>
  </div>
</template>

<script>
export default {
  name: 'CreatedTest',
  props: {
    finalAnswers: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.final-test{
  display: block;
  margin: 0 auto;
}
</style>
