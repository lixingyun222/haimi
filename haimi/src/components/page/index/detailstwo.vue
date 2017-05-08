<template>
	<div>
		<div class="xiangqing">
			<div class="pic-list" v-for="item in picList">
				<a href="javascript:;" v-for="it in item.Records">
					<img :src="it.Picture" alt="">
				</a>
			</div>
		</div>
		<shopping-list :shopping-list="shoppingList"></shopping-list>
	</div>
	
	
</template>
<script>
	import shoppingList from "@/components/page/shopping/shoppingList";
	export default {
		data (){
			return {
				id:this.$route.query.id,
				picList:{},
				shoppingList:{}
			}
		},
		components:{
			shoppingList
		},
		watch:{
			'$route.query.id':'getList'
		},
		created (){
			this.getList(this.id);
		},
		methods:{
			getList:function(id){
				let that=this;
				if(!id){
					return false;
				}				
	      		this.$http.jsonp("http://m.haimi.com/api/ad-module/get?AdModuleID="+id+"&platform=WAP",{
	          	
	        	jsonp:"_callback"
	      		}).then(function(data){
	         	 	this.picList=data.body.data;
	      		})

	      		this.$http.jsonp("http://m.haimi.com/api/promotion/activity-products-cdn?ActivityID=1081&pageSize=20&platform=WAP&deviceID=",{
	        	jsonp:"_callback"
	      		}).then(function(data){
	         	 	//赋值给alllist数组,
	          		this.shoppingList=data.data.data.Specials[0].Products;
	          		console.log(data.data)
	      		})
			}
		}
	}
</script>

<style lang="less">
	.xiangqing{
		width:100%;
		.pic-list{
			width:100%;
			margin-bottom:10px;
			a{
				display: block;
				img{
					display: block;
					width:100%;					
				}
			}
		}
		
	}
</style>