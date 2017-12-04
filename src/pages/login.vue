<template>

  <div class="ui-login">
    <div class="login">
      <h2 class="login-header">Log in</h2>
      <div class="login-container">
        <div class="login-container">
          <p><input type="text" placeholder="用户名" v-model="mobile"></p>
          <p><input type="password" placeholder="密码" v-model="password"></p>
          <p><span>{{message}}</span></p>
          <p><input type="submit" @click="login" value="Log in"></p>

        </div>
        <!--<button >登录</button>-->
      </div>
    </div>

  </div>

</template>


<style lang="scss" scoped="" type="text/css">
  .ui-login{
    width: 100%;
    height: 100%;
    background-image: url("http://api.dujin.org/bing/1920.php");
    -moz-background-size:cover;
    -webkit-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
  }
  body {
    background: #456;
    font-family: 'Open Sans', sans-serif;
  }

  .login {
    width: 400px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
  }

  /* Reset top and bottom margins from certain elements */
  .login-header,
  .login p {
    margin-top: 0;
    margin-bottom: 0;
  }

  /* The triangle form is achieved by a CSS hack   */

  .login-header {
    background: #28d;
    padding: 20px;
    font-size: 1.4em;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
  }

  .login-container {
    background: #ebebeb;
    padding: 12px;
  }

  /* Every row inside .login-container is defined with p tags */
  .login p {
    padding: 12px;
  }

  .login input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    padding: 16px;
    outline: 0;
    font-family: inherit;
    font-size: 0.95em;
  }

  .login input[type="email"],
  .login input[type="password"] {
    background: #fff;
    border-color: #bbb;
    color: #555;
  }

  /* Text fields' focus effect */
  .login input[type="email"]:focus,
  .login input[type="password"]:focus {
    border-color: #888;
  }

  .login input[type="submit"] {
    background: #28d;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  .login input[type="submit"]:hover {
    background: #17c;
  }

  /* Buttons' focus effect */
  .login input[type="submit"]:focus {
    border-color: #05a;
  }
</style>


<script>
  export default{
    data(){
      return{
        mobile: '',
        password:'',
        message:''
      }
    },
    methods:{
      //点击登陆
      login:function(){
        if(this.mobile == ""){
          this.message = "请输入用户名";
        }else if(this.password == ""){
          this.message = "请输入密码";
        }else{

          var params = new URLSearchParams();
          let _this = this;
          params.append('name', _this.mobile);
          params.append('password', _this.password);
          _this.axios.post('/api/user/login', params).then(function (response) {
            if(response.data.status == 1){
              localStorage.token = response.data.token;

              /*
                判断登陆后跳转页面
              */
              if(_this.$route.query.redirect){
                let redirect = decodeURIComponent(_this.$route.query.redirect || '/');
                  _this.$router.push({
                    path: redirect
                  });
              }else{
                  _this.$router.push({
                    path: '/report'
                  });
              }
            
            }
          }).catch(function (response) {
            console.log(response.data.msg);
          });




        }

      },
      //点击忘记密码
      forget:function(){
        this.isshow = false;
        this.iscodeshow = true;

      },
      //点击发送验证码
      sendcode:function(){
        if(this.forget_mobile == ''){
          this.forget_message = "请输入手机号";
        }else{
          var that =this;
          sendCode(that);
        }
      },
      //点击发送验证码确定之后
      codesure:function(){
        if(this.forget_mobile == ''){
          this.forget_message = "请输入手机号";
        } else if (this.forget_code == ''){
          this.forget_message = "请输入验证码";
        }else{
          var that = this;
          $.ajax({
            type: "POST",
            dataType: 'json',
            url: "/index.php/crm/login/viliCode",
            data: {
              'mobile': that.forget_mobile,
              'code': that.forget_code
            },
            success: function (res) {
              if (res.status == 1) {
                that.forget_message = res.value;
              } else {
                //成功
                that.iscodeshow = false;
                that.enter_password_show = true;

              }
            }
          })

        }
      },
      //修改密码
      passwordsure:function(){
        var that = this;

        if(that.enter_password_first == ''){
          that.enter_password_message = '请输入密码'
        }else if(that.enter_password_first != that.enter_password_two) {
          that.enter_password_message = '请确保两次输入密码一致'
        } else{
          $.ajax({
            type: "POST",
            dataType: 'json',
            url: "/index.php/crm/login/editPassword",
            data: {
              'mobile':that.forget_mobile,
              'password': that.enter_password_first,
              'code':that.forget_code,
            },
            success: function (res) {
              if (res.status == 1) {
                that.message = res.value;
              } else {
                that.isshow = true;
                that.enter_password_show = false;
              }

            }
          })
        }
      }
    }
  }


</script>














