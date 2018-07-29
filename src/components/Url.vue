<template>
  <div id="container">
    <div id="header">
      <h1>ShortNer</h1>
    </div>
    <ul id="Content">
      <li>
        <input class="input" type="text" id="longUrl" v-model.lazy.trim="longUrl" placeholder="Long Url"><button
        class="button" @click=shrink >Shrink</button>
      </li>
      <li>
        <input class="input" type="text" id="customUrl" v-model.lazy.trim="customUrl" placeholder="Custom Url (Optional)"><button
        class="button" v-on:click=check >Check</button>
      </li>
      <li v-show="SSU">
        <input class="input" type="text" id="shortUrl" v-bind:value="shortUrl" placeholder="Short Url" readonly><button
        class="button" v-on:click=copy>Copy&nbsp; </button>
      </li>
    </ul>
    <div id="footer">
    <p>all rights Reserved</p>
  </div>
  </div>
</template>

<script>
export default {
    name: "Url",
  data(){
      return{
        longUrl : "",
        shortUrl : "",
        customUrl: "",
        customAvailable: false,
        SSU: false
      }
  },
  methods:{
    shrink(){
      if(this.longUrl.length > 0){
        let data;

        // data processing
        if(this.customUrl.length > 0){
          data = {'longUrl': this.longUrl, 'shortUrl':this.customUrl};
        }else{
          data={'longUrl': this.longUrl}
        }

        // Make Request to shrink Url
        this.$http.post('http://localhost:3000/_/url', data)
          .then((data)=>{
            if(!data.body.err) {
              console.log(data);
              this.shortUrl = data.body.shortUrl;
              this.SSU = true;
            }else{
              console.log(data.body.err);
            }
          })
          .catch(err=>{
            console.log(err);
          });
      }
    },
    check(){
      if(this.customUrl.length > 0){
        this.$http.post('http://localhost:3000/_/check', {'shortUrl':this.customUrl})
          .then((data)=>{
            console.log(data)
            this.customAvailable = data.body.available
          })
          .catch(err=>{
            alert(err);
          });
      }
    },
    copy(){}
  }
}
</script>

<style scoped>
  #container{
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    /*align-items: center;*/
    min-height: 100%;
    min-width: 100%;
  }
  #header{
    background: lightgray;
    width: 100%;
    height: 200px;
    /*flex-basis: 200px;*/
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul{
    list-style-type: none;
    display: block;
    width: 100%;
    max-width: 900px;
    margin: auto;
    padding-left: 0;
  }
  li{
    margin-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .input, .button{
    display: inline-grid;
    padding: 10px 15px;
    font-size: 20px;
    border-radius: 0;
  }

  .input{
    max-width: 85%;
    width: 900px;
    border-radius: 7px 0 0 7px;
    border: 1px lightgray solid;
  }
  .input:focus{
    outline : none;
    box-shadow: 0px 0px 4px  forestgreen;
  }
  .button{
    max-width: 15%;
    min-width: fit-content;
    border-radius: 0 7px 7px 0 ;
    border: 1px lightgray solid;
  }
  button:focus{
    outline: none;
  }
  @media all and  (max-width: 674px ) {
    .input{
      max-width: 75%;
    }
    .button{
      max-width: 28%;
    }
  }
  #footer{
    /*height: 20vh;*/
    margin-bottom: 0;
    background: lightgray;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  #footer > p{
    width: fit-content;
    margin-left: auto;
    margin-right: auto;

  }
</style>
