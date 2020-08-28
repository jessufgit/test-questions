<template>
  <transition name="fade">
    <div class="multiple-choice-container">
      <span class="question">{{question}}</span>
      <div class="choices" v-for="answer in answers" :key="answer.id">
        <input type="radio"  :value="answer.choice" v-model="selected" @change="updateSelected(selected)" />
        <label for="answer">{{ answer.choice }}</label>
      </div>
        <br>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MultipleChoice',
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.multiple-choice-container{
  display: block;
  align-items: center;
  margin: 0 auto;
  .choices {
    display: flex;
    flex-flow: wrap row;
    justify-content: left;
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
