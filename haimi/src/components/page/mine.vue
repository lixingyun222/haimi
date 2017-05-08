<template>
	<div class="mine-page">
		<div class="tips">请输入手机号码验证码直接登录</div>
		<div class="box"> 
			<div class="cle"> 
				<span class="fl">手机号：</span> 
				<input type="tel" class="fl f14">  
			</div> 
			<div class="cle"> 
				<span class="fl">验证码：</span> 
				<input type="tel" class="fl f14"> 
				<span class="verify">发送验证码</span>  
			</div> 
			<button class="login">登录</button>
		</div>
	</div>
</template>
<script>
	
</script>

<style lang="less" scoped>

	.mine-page{
		position: absolute;
		top:0;
		right:0;
		left:0;
		bottom:0;
		background: #fff;
		.tips{
			padding:8px 0;
		    background: #fff9f3;
		    text-align: center;
		    font-size: 0.14rem;
		    color:#991f33;
		}
		.box{
			padding: 0 0.12rem;
			width:100%;
			box-sizing:border-box;
			.cle{
				margin-top: .14rem;
			    height: 0.38rem;
			    line-height: 0.38rem;
			    border-bottom: 1px solid #ccc;
			    display:-webkit-box;
			    span{
			    	font-size: 0.135rem;
			    	color:#666;
			    	display: block;
			    }
			    input{
			    	display: block;
			    	border:none;
			    	-webkit-box-flex:1;
			    }
			    .verify{
					text-align: end;
			    	color:#991f33;
			    	font-size: 0.12rem;
			    }
			}
			.login{
				display: block;
				margin-top:32px;
				width:100%;
				border:none;
				color:#fff;
				font-size: 0.16rem;
				padding:10px 0;
				background: #991f33;
			}
		}

	}
</style>