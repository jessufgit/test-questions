<template>
  <div class="dropdown-single-choice-container">
    <span class="question">{{ question }}</span>
    <select v-model="selected">
      <option value="" disabled >Please select the correct answer</option>
      <option :value="answer.choice" v-for="answer in answers" :key="answer.id">{{ answer.choice }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropdownSingleChoice',
  props: {
    question: {
      type: String,
      default: ""
    },
    answers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dropdown-single-choice-container {
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
