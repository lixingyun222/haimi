<template>
	<div class="w-page">
		<banner-bar :banner-list="bannerList"></banner-bar>
		<goods-list :goods-list="goodsList"></goods-list>
	</div>
</template>
<script>
	import bannerBar from "@/components/page/index/bannerBar";
	import goodsList from "@/components/page/index/goodsList";
	export default {
		props:{
			pageIndex:{
				type:Number,
				default:0
			},
			navId:{
				type:String,
				default:""
			}
		},
		components:{
			bannerBar,
			goodsList
		},
		data () {
			return {
				bannerList:{},
				goodsList:[]
			}
		},
		watch:{
			navId:function(){
				this.getList();
			}
		},
		created:function(){
			this.getList();
    	},
    	methods:{
    		getList:function(){

    			var that=this;

    			this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=index_"+this.navId,{
	          	Params:{
	          		platform:"WAP"
	        	},

	        	jsonp:"_callback"
	      		}).then(function(data){
	         	 	//赋值给alllist数组,
	          		that.bannerList=data.data.data;
	      		})

	      		this.$http.jsonp("http://m.haimi.com/api/nav/advert-team-products?NavID="+this.navId+"&page=1&pageSize=100&platform=WAP",{
	        	jsonp:"_callback"
	      		}).then(function(data){
	         	 	//赋值给alllist数组,
	          		that.goodsList=data.data.data;
	      		})
    		}
    	}
	}
</script>
<style lang="less" scoped>
	
</style>