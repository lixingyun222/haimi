<template>
    <div id="app" class='w-wrap'>
        <div class="loading-box"  v-show="loadingShow">
            <div class="loading-css3"> 
                <div class="loader">Loading...</div>
                <div style="fontSize:0.16rem">正在加载</div>
            </div> 
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>
  import Swiper from '../static/lib/swiper/js/swiper.min.js';
  export default {
    name:'app',
    components:{

    },
    computed : {
        loadingShow () {
        // console.log(this.$store.state.loadingShow)
        return this.$store.state.loadingShow
        }
    }

  }
</script>

<style lang="less">
    @import '../static/lib/font-awesome-4.7.0/css/font-awesome.min.css';
    @import "assets/css/reset.css";
    @import "assets/css/index.less";
    .loading-box{
        position:fixed;z-index:1000;bottom:0;left:0;width:100%;height:100%;background:transparent
    }
    .loading-css3{
        position:fixed;top:40%;left:40%; margin:auto;padding:.1rem;text-align:center;background:rgba(0,0,0,.65);border-radius:.15rem;z-index:1001;color:#fff;
    }
    .loading-box .loader{
        -webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear;text-indent:-9999em;border-top:.06rem solid hsla(0,0%,100%,.2);border-right:.06rem solid hsla(0,0%,100%,.2);border-bottom:.06rem solid hsla(0,0%,100%,.2);border-left:.06rem solid #fff
    }
    .loading-box .loader,.loading-box .loader:after{
        width:.2em;height:.2em;margin:0 auto;border-radius:50%
    }
    @-webkit-keyframes loading{
        0%{
            -webkit-transform:rotate(0deg);transform:rotate(0deg)
        }
        to
        {
            -webkit-transform:rotate(1turn);transform:rotate(1turn)
        }
    }

    @keyframes loading{
        0%
        {
        -webkit-transform:rotate(0deg);transform:rotate(0deg)
        }
        to{
            -webkit-transform:rotate(1turn);transform:rotate(1turn)
        }
    }


  
</style>
