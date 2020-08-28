<template>
  <div id="app">
    <NavBar id="nav-bar" />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>
<style lang="scss">
html, body {
  margin: 0 auto;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  #nav-bar {
    position: fixed;
  }
  .question-selection-form {
    padding-top: 100px;
    margin: 0 auto;
    width: 80vmax;
    .question-set {
      margin: 0 auto;
      padding-top: 50px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      .question-block {
        padding: 20px 0;
        text-align: center;
        width: 300px;
        margin: 10px auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        &:hover {
          transform: scale(0.95);
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
        }
        .component-block {
          margin: 15px;
        }
      }
    }
    .submit {
      width: 500px;
    }
  }
  #page, #create, #edit, #test-view {
    border: green 2px solid;
  }
}
</style>
