<template>
  <div class="short-response-container">
    <span class="question">{{ question }}</span>
    <input class="answer" v-model="answer" @change="updateAnswer(answer)"/>
  </div>
</template>

<script>
export default {
  name: 'ShortResponse',
  props: {
    question: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      answer: ""
    }
  },
  methods: {
    updateAnswer(thisAnswer) {
      this.$emit('change', thisAnswer);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.short-response-container {
  text-align: left;
  display: flex;
  flex-flow: wrap column;
  justify-content: left;
  .question, .answer {
    width: 400px;
  }
}
</style>
