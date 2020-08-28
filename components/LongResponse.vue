<template>
  <div class="long-response-container">
    <span class="question">{{ question }}</span>
    <textarea v-model="answer" class="answer" placeholder="Type your response here" @change="updateAnswer(answer)" />
  </div>
</template>

<script>
export default {
  name: 'LongResponse',
  props: {
    question: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      answer: ''
    }
  },
    methods: {
    updateAnswer(answer) {
      this.$emit('change', answer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.long-response-container {
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .question, .answer {
    width: 90%;
  }
}
</style>
