<template>
  <div class="multi-checkbox-container">
    <span class="question">{{question}}</span>
        <div class="choices" v-for="answer in answers" :key="answer.id">
      <input type="checkbox" :value="answer.choice" v-model="selected" @change="updateSelected(selected)" />
      <label for="answer">{{ answer.choice }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiCheckbox',
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
      selected: [],
    }
  },
  methods: {
    updateSelected(selected) {
      this.$emit('change', selected)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.multi-checkbox-container{
  display: block;
  .choices {
    display: flex;
    flex-flow: wrap row;
    justify-content: left;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    .choice {
      padding: 5px 10px;
      label {
        margin-left: 5px;
      }
    }
  }
}
</style>
