<template>
	<div>
		<div class="shoppingList">
			<div class="list">
				<div class="tuList" v-for="item in shoppingList" :key="item.AdvertID" v-if="item.Pictures!=''">
					<router-link :to="{path:'details', query:{id:item.ProductID}}">
						<div class="img" :style='{backgroundImage:"url("+item.Pictures+")"}'>
							<div class="active"></div>
						</div>
						<div class="jieshao">
							<p>{{item.Subject}}</p>
							<span>￥{{item.FinalPrice}}</span>
						</div>
					</router-link>
				</div>	
			</div>
			
		</div>
	</div>
	
</template>
<script>
	export default {
		props:["shoppingList"],
	}

</script>
<style lang="less" scoped>
	.shoppingList{
		width:100%;
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
						font-size: 0.12rem;
						padding:10px 0;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						width:100%;
						color:#999;
					}
					span{
						font-size: 0.16rem;
						display: block;
						color:#242424;
						text-align: center;
					}
				}
			}
		}

	}

</style>