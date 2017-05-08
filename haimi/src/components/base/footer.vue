<template>
	<footer class="w-footer">
		<nav>
			<router-link class="footer-icon" to="/" active-class="on" exact>
				<i class="fa fa-home"></i>
				<span>首页</span>
			</router-link>
			<router-link class="footer-icon" to="/classify" active-class="on">
				<i class="fa fa-reorder"></i>
				<span>分类</span>
			</router-link>
			<router-link class="footer-icon" to="/shoppingCart" active-class="on">
				<i class="fa fa-shopping-cart"></i>
				<span>购物车</span>
				<p class="tip" v-if="carList.length>0">{{carList.length}}</p>
			</router-link>
			<router-link class="footer-icon" to="/mine" active-class="on">
				<i class="fa fa-user"></i>
				<span>我的</span>
			</router-link>
		</nav>
	</footer>
</template>
<script>
	export default	{
		props:{
			
		},
		data (){
			return {
				carList:this.$store.state.carList
			}
		}
	}
</script>
<style lang="less" scoped>
	.w-footer{
		height:0.48rem;
		width:100%;
		background:#fff;
		border-top: 1px solid #e5e5e5;
		position: fixed;
		bottom: 0;
		left:0;
		nav{
			display: -webkit-box;
			height:100%;
			-webkit-box-align:center;
			.footer-icon{
				-webkit-box-flex:1;
				display: block;
				display: -webkit-box;
				-webkit-box-orient:vertical;
				text-align: center;
				&:nth-child(3){
					position:relative;
					.tip{
						height:15px;
						width:15px;
						background:#801a2a;
						line-height: 15px;
						text-align: center;
						color:#fff;
						position: absolute;
						top:-2px;
						right:34%;
						border-radius: 100%;
						font-size: 0.1rem;
					}
				}
				span{
					display: block;
					font-size: 0.14rem;
					color:#999;
				}
				i{
					margin-top:0.02rem;
					display: block;
					font-size: 0.20rem;
					color:#999;
				}
				&.on{
					span{
						color:#801a2a;
					}
					i{
						color:#801a2a;
					}
				}
			}

		}
	}
</style>