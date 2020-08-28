<template>
  <div id="app">
    <div id="page">
      <form id="question-creation" class="question-selection-form" @submit.prevent="processForm">
        <div class="test-header">
          <div class="name-block">
            <label for="short-response">Name:</label>
            <short-response name="short-response" @change="enterName(answer)"></short-response>
          </div>
          <div class="test-info-block">
            <span>{{ teacher }}</span>
            <span>{{ className }}</span>
            <span>{{ subject }}</span>
          </div>
        </div>
        <div class="question-set">
          <div class="question-block" v-for="question in questions" :key="question.id">
            <div class="question-header">Question Type: {{ question.type }}</div>
            <hr>
            <component
              class="component-block"
              :is='question.type'
              :question="question.question"
              :answers="question.answers"
              @change="logResults($event, question.id)"
            />
          </div>
        </div>
        <br>
        <button class="submit" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LongResponse from '../components/LongResponse'
import DropdownSingleChoice from '../components/DropdownSingleChoice'
import ShortResponse from '../components/ShortResponse'
import MultipleChoice from '../components/MultipleChoice'
import MultiCheckbox from '../components/MultiCheckbox'


export default {
  components: {
    LongResponse, DropdownSingleChoice, ShortResponse, MultipleChoice, MultiCheckbox
  },
  data() {
    return {
      testResults: {}
    }
  },
  // I could have used 'const response =  await axios.get('http://localhost:3000/questions')' here and returned response.data = but this { data } format is an ES6 destructuring simplification.

  async asyncData() {
    try {
      const { data } =  await axios.get('http://localhost:3000/test')
        return {
          teacher: data.teacher,
          className: data.class,
          subject: data.subject,
          questions: data.questions
        }
      }
      catch (e) {
        console.log(e)
        //or
        // error({
        // statusCode: 503,
        // message: "Sorry bruh, not working for you"
        // })
      }
  },
  methods: {
    enterName(answer) {
      console.log(answer);
    },
    logResults(event, id) {
      this.testResults[id] = event;
      console.log(this.testResults);
    },
    processForm() {
      console.log(this.testResults);
    }
  }
}
</script>

<style lang="scss">
.test-header {
  display: flex;
  justify-content: space-between;
  .name-block {
    display: flex;
    > label {
      padding-right: 20px;
    }
  }
  .test-info-block  {
    display: flex;
    flex-flow: wrap column-reverse;
  }
}
</style>
