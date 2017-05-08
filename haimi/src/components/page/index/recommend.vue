<template>
	<div class="w-index-page">
		<banner-bar :banner-list="bannerList"></banner-bar>
		
		<div class="w-tipList">
			<nav>
				<a :href="item.Redirect" v-for="item in tipList" :key="item.SlideID">
					<img :src="item.Picture" alt="">
					<span :style="{color:item.SlideNameColor}">{{item.SlideName}}</span>
				</a>
			</nav>
		</div>

		<div class="w-images">
			<router-link :to="{path:'details', query:{id:images1.CastID}}">
				<img :src="images1.Picture" alt="">
			</router-link>
		</div>
		<div class="w-images">
			<router-link :to="{path:'detailstwo', query:{id:143}}">
				<img :src="images2.Picture" alt="">
			</router-link>
		</div>
		<div class="w-images2">
			<h2>{{images3Name.Name}}</h2>
			<div class="imgList">
				<div class="left">
					<router-link v-for="(item,index) in images3" v-if="index<2" :to="{path:'details', query:{id:item.CastID}}" :key="item.CastID">
						<img :src="item.Picture" alt="">
					</router-link>
				</div>
				<div class="right">
					<router-link v-for="(item,index) in images3"  v-if="index>1" :to="{path:'details', query:{id:item.CastID}}" :key="item.CastID">
						<img :src="item.Picture" alt="">
					</router-link>
				</div>
				
			</div>
		</div>
		<div class="w-images2">
			<h2>{{giftName.Name}}</h2>
			<div class="pic-list">
				<router-link v-for="item in giftList" :to="{path:'details', query:{id:item.CastID}}" :key="item.CastID">
					<img :src="item.Picture" alt="">
				</router-link>
			</div>
		</div>
		<div class="w-images3">
			<div class="title"><img :src="tuwenName1.Picture" alt=""></div>
			<div class="tuwenList">
				<div class="list" v-for="item in tuwenList1">
					<router-link :to="{path:'details', query:{id:item.CastID}}" :key="item.CastID">
						<b href="javascript::"><img :src="item.Picture" alt=""></b>
						<h3 :style="{color:item.SlideNameColor}">{{item.SlideName}}</h3>
						<span :style="{color:item.DescriptionColor}">{{item.Description}}</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="w-images3">
			<div class="title"><img :src="tuwenName2.Picture" alt=""></div>
			<div class="tuwenList">
				<div class="list" v-for="item in tuwenList2">
					<router-link :to="{path:'details', query:{id:item.CastID}}" :key="item.CastID">
						<b href="javascript::"><img :src="item.Picture" alt=""></b>
						<h3 :style="{color:item.SlideNameColor}">{{item.SlideName}}</h3>
						<span :style="{color:item.DescriptionColor}">{{item.Description}}</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="w-images3">
			<div class="title"><img :src="tuwenName3.Picture" alt=""></div>
			<div class="tuwenList">
				<div class="list" v-for="item in tuwenList3">
					<router-link :to="{path:'details', query:{id:item.CastID}}" :key="item.CastID">
						<b href="javascript::"><img :src="item.Picture" alt=""></b>
						<h3 :style="{color:item.SlideNameColor}">{{item.SlideName}}</h3>
						<span :style="{color:item.DescriptionColor}">{{item.Description}}</span>
					</router-link>
				</div>
			</div>
		</div>
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
				indexList:[],
				bannerList:[],
				tipList:[],
				images1:[],
				images2:[],
				images3Name:{},
				images3:{},
				giftName:{},
				giftList:[],
				tuwenName1:{},
				tuwenList1:[],
				tuwenName2:{},
				tuwenList2:[],
				tuwenName3:{},
				tuwenList3:[],
				goodsList:[]


			}
		},
		created:function(){
				
			var that=this;
			this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=index_"+this.navId,{
          	Params:{
          		platform:"WAP"
        	},

        	jsonp:"_callback"
      		}).then(function(data){
         		that.indexList=data.data.data;

         	 	that.bannerList=that.indexList[0].Records;
         	 	that.tipList=that.indexList[1].Records;
         	 	that.images1=that.indexList[2].Records[0];
         	 	that.images2=that.indexList[3].Records[0];
         	 	

         	 	that.images3Name=that.indexList[4].Channel;
         	 	that.images3=that.indexList[4].Records;

         	 	that.giftName=that.indexList[5].Channel;
         	 	that.giftList=that.indexList[5].Records;

         	 	that.tuwenName1=that.indexList[6].Records[0];
         	 	that.tuwenList1=that.indexList[7].Records;

         	 	that.tuwenName2=that.indexList[8].Records[0];
         	 	that.tuwenList2=that.indexList[9].Records;

         	 	that.tuwenName3=that.indexList[10].Records[0];
         	 	that.tuwenList3=that.indexList[11].Records;

      		})

      		this.$http.jsonp("http://m.haimi.com/api/nav/advert-team-products?NavID="+this.navId+"&page=1&pageSize=100&platform=WAP",{
        	jsonp:"_callback"
      		}).then(function(data){
         	 	//赋值给alllist数组,
          		this.goodsList=data.data.data;

      		})
      	
    	}
	}
</script>
<style lang="less" scoped>
	.w-index-page{
		.w-tipList{
			width:100%;
			background:#fff;
			margin-top:10px;
			margin-bottom:10px;
			padding-bottom:10px;
			nav{
				display: -webkit-box;
				-webkit-box-align:center;
				a{
					-webkit-box-flex:1;
					display: block;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					text-align: center;
					span{
						display: block;
						font-size: 0.14rem;
						color:#999;
						margin-top:4px;
					}
					img{
						width:100%;
						display: block;
					}
					
				}

			}
		}
		.w-images{
			img{
				display: block;
				width:100%;
			}
		}
		.w-images2{
			background: #fff;
			margin-top:10px;
			h2{
				font-size:0.14rem; 
				padding:12px 0;
				text-align: center;
				font-weight: normal;
				background:#fff;
			}
			.imgList{
				display: -webkit-box;
				.left{
					width:51.5%;
					a{
						display: block;
						img{
							width:100%;
							display: block;
						}
					}
				}
				.right{
					width:48.5%;
					a{
						display: block;
						img{
							width:100%;
							display: block;
						}
					}
				}
			}
			.pic-list{
				overflow: hidden;
				a{
					display: block;
					width:50%;
					float: left;
					img{
						display: block;
						width:100%;
					}
				}
			}
		}
		.w-images3{
			margin-top:10px;
			background:#fff;
			.title{
				img{
					display: block;
					width:100%;
				}
			}
			.tuwenList{
				display: -webkit-box;
				overflow-x:auto;
				padding-bottom:10px;
				.list{
					width:28%;
					b{
						display: block;
						img{
							display: block;
							width:100%;
						}
					}
					h3{
						font-size: 0.14rem;
						font-weight: normal;
						text-align: center;
					}
					span{
						display: block;
						font-size: 0.12rem;
						text-align: center;
					}
				}
			}
		}
	}
	
</style>