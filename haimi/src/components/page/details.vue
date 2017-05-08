<template>
	<div class="details-page">
		<div class="msg-info" id="msg-info">
			<span class="in"></span> 
		</div>
		<swiper-bar :banner-list="bannerList"></swiper-bar>
		<div class="details-goods-info">
			<div class="title">
				{{detailsList.Subject}}
			</div>
			<div class="price">
				<div class="pri">
					<span class="pr">￥{{detailsList.FinalPrice}}</span>
					<span class="deduct">积分可低{{detailsList.MaxCreditDeduct}}%</span>
				</div>
				<div class="sales">月销{{detailsList.MonthSalesNum}}件</div>
			</div>
			<div class="other"><b class="dian"></b><span>邮费{{detailsList.Postage}}元</span></div>
		</div>
		<div class="details-others">
			<div class='after-sale'>
				<ul>
					<li v-for="item in detailsList.Promises" :key="item">
						<b>√</b>
						<span>{{item}}</span>
					</li>
				</ul>
			</div>
			<div class="choise-color" @click="toggleShow(isShow)">
				<p>
					<span>请选择：</span>
					<span v-for="(item,index) in detailsList.AttrInfoArray"> {{item.AttrName}}，</span>
				</p>
				<i class="fa fa-angle-right"></i>
			</div>
		</div>
		<div class="details-comment">
			<p class="product-score">
				<span>宝贝评分</span>
				<span></span>
				<span>{{detailsList.ProductScore}}分</span>
			</p>
			<div class="review" v-for="(item,index) in detailsList.TopReviews" :key="item.Buyer.Avatar">
				<div class="user">
					<span><img :src="item.Buyer.Avatar" alt=""></span>
					<span>{{item.Buyer.NickName}}</span>
					<time>{{item.CreateTime}}</time>
				</div>
				<p class="reply">{{item.BuyerNote}}</p>
				<goods-pic :BuyerPictures="item.BuyerPictures"></goods-pic>
			</div>
			<div class="all">全部评价({{detailsList.ReviewCount}})</div>
		</div>
		<div class="details-haimiyanxuan">
			<dl>
				<dt>
					<img :src="Mall.LogoSrc" alt="">
				</dt>
				<dd>
					<h3>{{Mall.MallName}}</h3>
					<p>{{Mall.Introduction}}</p>
				</dd>
			</dl>
		</div>
		<div class="details-xiangqing">
			<h3>商品详情</h3>
			<img :src="Mall.WeixinQRCode" alt="">
		</div>
		<div class="details-qita" v-html=detailsList.Descriptioin></div>
		<div class="mark" v-show="isShow" @click="toggleShow(isShow)">
			
		</div>	
		<join-car v-on:show="show" :join-list="detailsList" :is-show="isShow"></join-car>

		<div class="buy-box"> 
			<div class="home">
				<a href="/">
					<i class="fa fa-home"></i>
				</a>
			</div>
			<div class="collect">
				<a href="javascript:;">
					<i class="fa fa-star"></i>
				</a>
			</div>
			<div class="shopping">
				<a href="/shoppingCart">
					<i class="fa fa-shopping-cart"></i>
				</a>
				<p class="tip" v-if="carList.length>0">{{carList.length}}</p>
			</div>
			<div class="join" @click="toggleShow(isShow)">
				<a href="javascript:;">加入购物车</a>
			</div>
			<div class="buy">
				<a href="javascript:;">立即购买</a>
			</div>
		</div>

	</div>
</template>

<script>
	import swiperBar from "@/components/page/details/swiperBar"
	import goodsPic from "@/components/page/details/goodsPic"
	import joinCar from "@/components/page/shopping/joinCar"
	export default {
		data (){
			return {
				id:this.$route.query.id,
				bannerList:[],
				detailsList:{},
				goodsPic:[],
				Mall:[],
				isShow:false,
				carList:this.$store.state.carList
			}
		},
		components:{
			swiperBar,
			goodsPic,
			joinCar
		},
		watch:{
			'$route.query.id':'getInfo'
		},
		created (){
			this.getInfo(this.id);
		},
		methods:{
			getInfo:function(id){
				let that=this;
				if(!id){
					return false;
				}				
	      		this.$http.jsonp("http://m.haimi.com/api/product/detail-cdn?ProductID="+id+"&platform=WAP",{
	          	
	        	jsonp:"_callback"
	      		}).then(function(data){
	         	 	//赋值给alllist数组,
	          		that.bannerList=JSON.parse(data.body.data.ProductPictures);
	 				that.detailsList=data.body.data;
	 				this.Mall=this.detailsList.Mall;
	 				console.log(this.detailsList)
	      		})
			},
			toggleShow:function(val){
				this.isShow=!val;
			},
			show:function(is){
				this.isShow=is;
			}

		}
	}
</script>
<style lang="less">
	.msg-info{
	    position: fixed;
	    top:0;
	    bottom:0;
	    right:0;
	    left:0;
	    text-align: center;
	    z-index: 1000;
	    display: none;
		.in{
			margin:auto;
			min-width:0.3rem;
			margin-top:80%;
			display: inline-block;
		    background: rgba(0,0,0,.7);
		    color: #fff;
		    padding: .1rem .2rem;
		    border-radius: 5px;
		    word-wrap: break-word;
		    text-align: center;
		    word-break: break-all;
		    font-size: 0.14rem;
		}
	}
	.details-page{
		width:100%;
		
		.buy-box{
			height:0.48rem;
			width:100%;
			display: -webkit-box;
			position: fixed;
			bottom:0;
			left:0;
			background: #fff;
			border-top: 1px solid #e5e5e5;
			-webkit-box-align:center;
			div{
				-webkit-box-flex:0.7;
				text-align: center;
				a{
					display: block;
					font-size: 0.14rem;
					i{
						font-size: 22px;
						color:#ccc;
					}
				}
				&.buy{
					-webkit-box-flex:2.2;
					height:100%;
					line-height: 0.48rem;
					background: #801a2a;
					a{
						color:#fff;
					}
				}
				&.join{
					-webkit-box-flex:1.7;
					height:100%;
					line-height: 0.48rem;
					a{
						color:#242424;
					}
				}
				&.shopping{
					position: relative;
					.tip{
						height:15px;
						width:15px;
						background:#801a2a;
						line-height: 15px;
						text-align: center;
						color:#fff;
						position: absolute;
						top:-6px;
						right:6%;
						border-radius: 100%;
						font-size: 0.1rem;
					}
				}
			}
		}
		.details-goods-info{
			width:100%;
			background: #fff;
			padding-top:15px;
			.title{
				color:#242424;
				font-size: 0.16rem;
				line-height: 0.22rem;
				padding:0 0.12rem;
				box-sizing:border-box;
			}
			.price{
				padding:15px 0.12rem;
				box-sizing:border-box;
				width:100%;
				display: -webkit-box;
				border-bottom: 1px solid #eee;
				.pri{
					display: -webkit-box;
					-webkit-box-align:center;
					span{
						display:block;
						&.pr{
							font-size: 0.18rem;
							color:#991f33;
							margin-right:4px;
						}
						&.deduct{
							font-size: 0.14rem;
							background: #cbac81;
							color:#fff;
							height:100%;
						}
					}
					
				}
				.sales{
					-webkit-box-flex:1;
					text-align: end;
					font-size: 0.12rem;
					color:#999;
				}

			}
			.other{
				width:100%;
				padding:10px 0.12rem;
				box-sizing:border-box;
				display: -webkit-box;
				-webkit-box-align:center;
				.dian{
					display: block;
					height:4px;
					width:4px;
					border-radius: 100%;
					background: #000;
					margin-right:4px;
				}
				span{
					font-size: 0.12rem;
					display: block;
				}
			}
		}
		.details-others{
			width:100%;
			margin-top:10px;
			.after-sale{
				padding:13px 0.12rem;
				box-sizing:border-box;
				background: #fff;
				ul{
					display: -webkit-box;
					li{
						display: -webkit-box;
						-webkit-box-align:center;
						margin-right:15px;
						b{
							height:12px;
							width:12px;
							display: block;
							border-radius: 100%;
							border:1px solid #991f33;
							font-size: 0.08rem;
							color:#991f33;
							display: block;
							text-align: center;
							line-height: 12px;
						}
						span{
							font-size: 0.12rem;
							color:#242424;
							display: block;
						}
					}
				}
			}
			.choise-color{
				height:0.44rem;
				display: -webkit-box;
				-webkit-box-align:center;
				margin-top:10px;
				background: #fff;
				padding:0 0.12rem; 
				box-sizing:border-box;
				width:100%;
				p{
					display: -webkit-box;
					-webkit-box-flex:1;
					-webkit-box-align:center;
					
					span{
						display: block;
						border:none;
						font-size: 0.12rem;
						color:#242424;
						&.nth-child(1){

							font-size: 0.12rem;
							color:#242424;
							display: block;
							padding-right:4px;
							box-sizing:border-box;
					
						}
					}
				}
				i{
					
					display: block;
					font-size:0.16rem; 
					text-align: end;
				}
			}
		}
		.details-comment{
			background: #fff;
			margin-top:10px;
			.product-score{
				display: -webkit-box;
				padding:13px 0.12rem;
				box-sizing:border-box;
				border-bottom: 1px solid #eee;
				span{
					display: block;
					font-size: 0.12rem;
					margin-right:10px;
					&:nth-child(3){
						color:#991f33;
					}
				}
			}
			.review{
				background: #fff;
				width:100%;
				padding:0 0.12rem;
				padding-top:10px;
				box-sizing:border-box;
				.user{
					
					display: -webkit-box;
					-webkit-box-align:center;
					span{
						display: block;
						&:nth-child(1){
							width:6.9%;
							img{
								display: block;
								width:100%;
							}
						}
						&:nth-child(2){
							font-size: 0.14rem;
							margin-left:10px;
						}
						color:#999;
					}
					time{
						display: block;
						font-size: 0.12rem;
						color:#999;
						-webkit-box-flex:1;
						text-align: end;
					}
				}
				.reply{
					font-size: 0.14rem;	
					padding:12px 0.2rem;
					box-sizing:border-box;				
				}
				

			}
			.all{
				padding:12px 0;
				box-sizing:border-box;
				width:100%;
				font-size: 0.14rem;
				text-align: center;
			}
		}
		.details-haimiyanxuan{
			width:100%;
			margin-top:10px;
			background:#fff;
			padding:12px 0.12rem;
			box-sizing:border-box;
			dl{
				display: -webkit-box;
				dt{
					width:14.6%;
					margin-right:14px;
					img{
						display: block;
						width:100%;
					}
				}
				dd{
					-webkit-box-flex:1;
					h3{
						font-size: 0.14rem;
						font-weight: normal;
						margin-top:4px;
					}
					p{
						font-size: 0.12rem;
						margin-top:4px;
						color:#999;
					}
				}
			}
		}
		.details-xiangqing{
			width:100%;
			background:#fff;
			margin-top:10px;
			padding:10px 0.12rem;
			box-sizing:border-box;
			h3{
				font-size: 0.14rem;
				color:#242424;
				padding-bottom:10px;
			}
			img{
				display: block;
				width:100%;
			}
		}
		.details-qita{
			width:100%;
			padding:12px 0.12rem;
			box-sizing:border-box;
			background:#fff;
			font-size:16px;
			overflow: hidden;
			
			p{
				span{
					color:#242424;
					line-height: 0.24rem;
					img{
						display: block;
						width:100% !important;
						height:auto !important;
					}
				}
				img{
					display: block !important;
					width:100% !important;
					height:auto;
				}
			
				
				iframe{
					display: block;
					width:100%;
					height:auto;
				}
				
			}
		}
	}
</style>