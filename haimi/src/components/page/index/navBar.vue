<template>
	<div class="w-nav-bar static">
		<nav>
			<a href="javascript:;" v-for="(item,index) in navArr"  :key="item.NavID" @click="toggleClass(item.NavID,index)" :class="index==0?'on':''">{{item.Title}}</a>
		</nav>
	</div>

</template>

<script>
	
	export default {

		data () {
			return {
				navArr:[]
			}
		},
	
		created : function(){
	  		let that=this;
      		this.$http.jsonp('http://m.haimi.com/api/nav/list',{
          		Params:{
            		platform:"WAP"
        		},
        		jsonp:"_callback"
      		}).then(function(data){
          		
          		this.navArr=data.body.data;

      		})
	  	},
	  	mounted () {
	  		var navBar=document.querySelector('.w-nav-bar');
			window.onscroll=function(){
				var clientW=document.documentElement.clientWidth;
				var offsetH=navBar.offsetHeight;
				var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
					if(scrollTop>offsetH){
						navBar.className='fixed w-nav-bar';
					}
					else{
						navBar.className='static w-nav-bar';
					}
			}
	  	},
	  	methods:{

	  		toggleClass (id,index) {
	  			var listA=document.querySelectorAll(".w-nav-bar a");

          		for(var i=0;i<listA.length;i++){
          			listA[i].className="";
          		}

          		listA[index].className="on";

	  			this.$emit('tabContent',index,id);
	  		}

	  	}
	}

</script>
<style lang="less" scoped>
	.w-nav-bar{
		height:0.4rem;
		overflow-x:auto;
		padding:0 0.1rem;
		box-sizing:border-box;
		background:#fff;
		z-index:1000;
		&.fixed{
			position: fixed;
			top:0;
		}
		&.static{
			position: static;
		}
		nav{
			display: -webkit-box;
			height:100%;
			line-height: 0.4rem;
			a{
				height:100%;
				display: block;
				padding:0 0.06rem;
				margin:0 0.06rem;
				margin:;
				color:#242424;
				font-size: 0.12rem;
				&:last-child{
					padding-right:15px;
				}
				&.on{
					border-bottom: 4px solid #242424;
					box-sizing:border-box;
				}

			}
		}
	}
</style>