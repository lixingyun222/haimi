<template>
	<div class="w-header">
		<label for="">
			<input type="search" placeholder="搜索宝贝">
			<i class="fa fa-search"></i>
		</label>
		<span class="">搜索</span>
	</div>
</template>

<script>
	
</script>
 
<style lang="less" scoped>
	.w-header{
		width:100%;
		height:0.44rem;
		background:#242424;
		display:-webkit-box;
		-webkit-box-align:center;
		padding:0 0.1rem;
		box-sizing:border-box;
		label{
			display: block;
			position: relative;
			height:28px;
			-webkit-box-flex:1;
			margin-right:0.14rem;
			input{
				display: block;
				width:100%;
				height:100%;
				background: #1a1a1a;
				border:none;
				padding-left:36px;
				box-sizing:border-box;
			}
			i{
				position: absolute;
				top:18%;
				left:12px;
				font-size: 18px;
				color: #666;
			}
		}
		span{
			display: block;
			font-size: 0.14rem;
			color:#fff;
		}

	}
</style>