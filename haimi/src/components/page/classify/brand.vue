<template>
	<div class="brand-page">
		<div class="brandList" v-for="item in brandList">
			<a href="javascript:;">
				<img :src="item.Picture" alt="">
				<div class="jieshao">
					<h3 :style="{color:item.SlideNameColor}">{{item.SlideName}}</h3>
					<p :style="{color:item.DescriptionColor}">{{item.Description}}</p>
				</div>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		data (){
			return {
				brandList:[]
			}
		},
		created (){
			let that=this;
      		this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=yanxuan-brand-list&platform=WAP",{
          	
        	jsonp:"_callback"
      		}).then(function(data){

          		this.brandList=data.data.data[0].Records;
      		})
		}
	}
</script>
<style lang="less" scoped>
	.brand-page{
		width:100%;
		overflow: hidden;
		background: #fff;
		.brandList{
			width:33.33333333333%;
			float: left;
			
			img{
				display: block;
				width:100%;
			}
			
			.jieshao{
				padding:8px 0;
				h3{
					font-size: 0.14rem;
					text-align: center;
					font-weight: normal;
				}
				p{
					font-size: 0.12rem;
					text-align: center;
				}
			}
			
		}
	}
</style>