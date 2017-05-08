<template>
	<div class="w-main w-classify-page">
		<div class="header">
			<nav>
				<a href="javascript:;" v-for="(item,index) in header" :class="index==0?'on':''" @click="tabTaggle(index)">{{item.name}}</a>
			</nav>
		</div>
			<component v-bind:is="currentView">
				
			</component>

		<w-footer></w-footer>

	</div>

</template>

<script>
	import sortTemplate from "@/components/page/classify/sort";
	import brandTemplate from "@/components/page/classify/brand";
	import wFooter from '@/components/base/footer';
	export default {
		data () {
	    	return {
	      		currentView: 'sortTemplate',
	      		header:[
		    		{name:"分类"},
		    		{name:"品牌"}
		    	],
		    	scrollWatch: true
		    	
	    	}
	  	},
		components:{
			sortTemplate,
			brandTemplate,
			wFooter
		},
		mounted() {
			window.scrollTop=0;
			window.onScroll=function(){
				if(this.scrollWatch){
					
				}
			}

			
		},
		destroyed () {
			this.scrollWatch = false;
		},
		methods:{
			tabTaggle:function(index){
				var listA=document.querySelectorAll(".header a");

          		for(var i=0;i<listA.length;i++){
          			listA[i].className="";
          		}

          		listA[index].className="on";
				if(index==0){
					this.currentView = sortTemplate;
				}else{
					this.currentView = brandTemplate;
				}
				
			}
		}
	}
	
</script>
<style lang="less" scoped>
	.w-classify-page{
		width:100%;
		.header{
			height:44px;
			background: #fff;
			width:100%;
			nav{
				width:100%;
				display: -webkit-box;
				-webkit-box-pack:center;
				-webkit-box-align:center;
				height:100%;
				a{
					display: block;
					font-size: 0.14rem;
					padding:3px 4px;
					margin:0 12px;
					box-sizing:border-box;
					color:#666;
					&.on{
						box-sizing:border-box;
						border-bottom:2px solid #242424;
	    				color: #242424;
	    				
					}
				}
				
			}
		}
	}
</style>