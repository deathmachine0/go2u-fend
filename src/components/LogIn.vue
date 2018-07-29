<template>
<div class="container">
  <header>
    <h1>Login</h1>
  </header>
  <form>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button >Log In</button>
  </form>
  <footer></footer>
</div>
</template>

<script>
    export default {
        name: "LogIn",
        data(){
          return{
            username:"",
            password:""
          }
        },
        methods:{
          login(){
            this.$http.post('/login',{username: this.username, password : this.password })
              .then(res=>{

            })
            .catch(err=>{

            })
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
