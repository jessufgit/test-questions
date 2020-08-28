<template>
  <div id="edit">
    This is where a question will go.
  </div>
</template>

<script>

export default {
  data() {
    return {
      question: {}
    }
  },
  // I could have used 'const response =  await axios.get('http://localhost:3000/questions')' here and returned response.data = but this { data } format is an ES6 destructuring simplification.

  // async asyncData({params, error}) {
  //   try {
  //     const { data } =  await axios.get('http://localhost:3000/questions' + params.id)
  //       return {
  //         questions: data
  //       }
  //     }
  //     catch(e) {
  //       // console.log(e)
  //       //or
  //       error({
  //         statusCode: 503,
  //         message: "Sorry bruh, not working for you"
  //       })
  //     }
  // },
  methods: {
    processForm() {
      console.log("Hello")
    }
  }
}
</script>

<style lang="scss">

</style>
