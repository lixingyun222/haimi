<template>
	<div>
		<div class="goodsList" v-for="item in goodsList">
			<h3>{{item.Title}}</h3>
			<div class="list">
				
				<div class="tuList" v-for="it in item.Products" :key="it.AdvertID" v-if="it.Pictures!=''">
					<router-link :to="{path:'details', query:{id:it.ProductID}}">
						<div class="img" :style='{backgroundImage:"url("+it.Pictures+")"}'>
							<div class="active"></div>
						</div>
						<div class="jieshao">
							<p>{{it.Subject}}</p>
							<span>￥{{it.FinalPrice}}</span>
						</div>
					</router-link>
				</div>	
			
			</div>
			
		</div>
	</div>
	
</template>
<script>
	export default {
		props:["goodsList"],
	}

</script>
<style lang="less" scoped>
	.goodsList{
		width:100%;
		h3{
			padding:12px 0;
			text-align: center;
			font-size: 0.14rem;
		}
		.list{
			width:100%;
			overflow: hidden;
			.tuList{
				width:50%;
				float: left;
				margin-bottom:10px;
				&:nth-child(even){
					padding-left:3px;
					box-sizing:border-box;
				}
				&:nth-child(odd){
					padding-right:3px;
					box-sizing:border-box;
				}
				.img{
					width:100%;
					background-position:center center;
					background-size:cover;
					.active{
						padding-top:100%;
					}
				}
				.jieshao{
					background: #fff;
					padding:0 10px;
					padding-bottom:10px;
					overflow: hidden;
					box-sizing:border-box;
					p{
						font-size: 0.14rem;
						padding:6px 0;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						width:100%;
						color:#242424;
					}
					span{
						font-size: 0.14rem;
						display: block;
						color:#242424;
					}
				}
			}
		}

	}



</style>