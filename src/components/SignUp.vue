<template>
<div class="container">
  <header id="header" class="section">
    <h1>SignUp</h1>
  </header>
  <form id="content" class="section">
      <input id="Username" type="text" placeholder="Username">
      <input id="email" type="text" placeholder="Email">
      <input id="password" type="password" placeholder="Password" v-model.lazy="password1">
      <input id="confirm" type="password" placeholder="Confirm Password" v-model.lazy=password2>
      <button>Submit</button>
  </form>
  <footer id="info" class="section">
  </footer>
</div>
</template>

<script>
    export default {
        name: "SignUp",
        data(){
          return{
            password1:"",
            password2:""
          }
        },
        computed:{
          password(){
            return this.password1 === this.password2
          }
        }
    }
</script>

<style scoped>
  .container{
    display: flex;
    align-self: center;
    flex-flow: column;
    padding: 40px ;
    border:  2px gray dotted;
    border-radius: 7px
  }

  form{
    display: flex;
    flex-flow: column;
  }
  input{
    width: 300px;
    margin-bottom: 40px;
    height: 40px  ;
  }
  button{
    border-radius: 7px;
    height: 2rem;
  }
  button:focus{
    outline: none;
  }
  .section{
    margin-top: 10px;
    margin-bottom: 20px;
  }
</style>
