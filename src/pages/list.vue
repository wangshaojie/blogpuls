<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
             <router-link :to="{ name: 'index'}"  class="nav-link">
                  Home
              </router-link>
          </li>
          <li class="nav-item  active">
            <router-link :to="{ name: 'list'}"  class="nav-link">
                  Blog
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Album example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary">Main call to action</a>
            <a href="#" class="btn btn-secondary">Secondary action</a>
          </p>
        </div>
      </section>

      <div class="album text-muted">
        <div class="container">
          <div class="row">
            <div class="card" v-for="item in data">
              <router-link :to="{ name: 'detail', params: { id: item._id }}">
                <img style="height: 280px; width: 100%; display: block;" src="https://unsplash.it/300/200" data-holder-rendered="true">
                <p class="card-text">{{item.title}}</p>
              </router-link>
            </div>
          </div>

        </div>
      </div>

    </main>
  </div>
  
  <!-- <div class="list">
    <div class="ui items">
      <div class="item" >
        <router-link :to="{ name: 'detail', params: { id: item._id }}">
          <div class="image">
            <img src="https://unsplash.it/300/200">
          </div>
          <div class="content">
            <a class="header">{{item.title}}</a>
            <div class="meta">
              <span>{{item.date}}</span>
            </div>
            <div class="description">
              <p></p>
            </div>
            <div class="extra">{{item.desc}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped="" type="text/css">
  @import '../assets/sass/statistic.scss';
  @import '../assets/sass/list.scss';
</style>

<script>


  export default{
      data(){
          return{
              msg : "list",
              data:[],
          }
      },
      mounted:function(){
          this.$nextTick(function () {
            this.list();
          })
      },

      methods:{
          list:function(){
              var that= this;
              that.axios.get('/api/list').then(function (response) {
                  console.log(response)
                  that.data = response.data.data;
                  console.log(that.data)

              })
              // $.ajax({
              //     type:'GET',
              //     url:'/api/list',
              //     success:function(res){

              //         that.data = res.value;
              //         console.log(that.data);
              //     }
              // })
          },

      }
  }
</script>
