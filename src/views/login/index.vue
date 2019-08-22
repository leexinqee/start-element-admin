<template>
    <div class="login-container">
        <div class="card-box login-form">
            <div id="login_div" style=" width:400px; height:330px;" align="center">
            </div>
            <div class="tips">
            </div>
        </div>
    </div>
</template>

<script>
import { getJS, getUrlRoot } from '../../utils/index'

export default {
  name: 'login',
  data() {
    return {}
  },
  mounted() {
    const url = '//imgcache.qq.com/ptlogin/ac/v9/js/ptlogin_v1.js'
    getJS(url).then(function() {
      window.pt.setParams({
        appid: 1600001220,
        daid: 6,
        s_url: getUrlRoot(),
        style: 40,
        protocol: window.location.protocol,
        domain: 'qq.com',
        border_radius: 1,
        target: '',
        maskOpacity: 40
      })
      window.pt.showPtui()
    })
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  height: 100vh;
  background-color: $bg;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $light_gray;
    height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
