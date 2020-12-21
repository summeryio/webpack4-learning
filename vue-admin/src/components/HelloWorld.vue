<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  h1 {
    color: #f90;
  }
}
</style>
