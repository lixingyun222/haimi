<template>
	<div class="sort-page">
		<div class="sort-img" v-for="(item,index) in sortList" v-if="index%2==0">
			<a href="javascript:;"><img :src="item.Records[0].Picture" alt=""></a>
		</div>
		<div class="sort-character" v-else>
			<ul>
				<li v-for="it in item.Records" :style="{color:it.SlideNameColor}">
					<a href="javascript::">{{it.SlideName}}</a>
				</li>
			</ul>
		</div>
	</div>
		
</template>
<script>
	export default {
		data (){
			return {
				sortList:[]
			}
		},
		created (){
			let that=this;
      		this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list&platform=WAP",{
          	
        	jsonp:"_callback"
      		}).then(function(data){

          		that.sortList=data.data.data;
      		})
		},
	}
</script>
<style lang="less" scoped>
	.sort-page{
		background: #fff;
		width:100%;
		.sort-img{
			width:100%;
			img{
				display: block;
				width:100%;
			}
		}
		.sort-character{
			width:100%;
			overflow: hidden;
			padding-top:16px;
			padding-bottom: 2px;
			ul{
				width:100%;
				li{
					padding:4px 12px;
					float: left;
					margin:0 0 14px 14px;
					border:1px solid #e5e5e5;
					a{
					    display: block;
					    color:#242424;
					    font-size: 0.14rem;
					}
				}
			}
		}
	}
</style>