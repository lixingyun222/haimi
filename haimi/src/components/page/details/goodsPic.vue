<template>
	<div>
		<ul class="picList" v-if="goodsPic!=''">
			<li v-for="it in goodsPic" :style='{backgroundImage:"url("+it+")"}' :key="it">
				<span class='act'></span>
			</li>
		</ul>
	</div>
	
</template>
<script>
	export default {
		props:{
			BuyerPictures:{
				type:String,
				default:""
			}

		},
		data (){
			return {
				goodsPic:[]
			}
		},
		methods:{

		},
		created (){
			if(this.BuyerPictures!=''){
				this.goodsPic=this.BuyerPictures.split(",");
			}
		
		}

	}
</script>
<style lang='less'>
	.picList{
		width:100%;
		padding:13px 0;
		box-sizing:border-box;
		display: -webkit-box;
		border-bottom:1px solid #eee;
		li{
			width:14.8%;
			background-position: center center;
			background-size: cover;
			margin-right:10px;
			.act{
				display: block;
				padding-top:100%;
			}
		}
				
	}
</style>