<template>
	<div>
		<div class="shopping-cart" v-if="carList.length==0">
			<div class="def">
			 	<a href="/" class="v-link-active"> 
			 		<img src="data:image/png;base64,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" _v-987867b8="">
			 		<span _v-987867b8="">去首页逛逛</span> 
			 	</a> 
			 </div>
			 <div class="everyone-look">
			 	<h3 class="title">大家都在买的宝贝</h3>
			 	<div>
			 		<shopping-list :shopping-list="shoppingList"></shopping-list>
			 	</div>
			 	
			 </div>
			
		</div>
		<div class="carList" v-if="carList.length>0">
			<div class="cart-home">
				<div class="check">
					<input type="checkbox">
				</div>
				<div class="haimi">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThGOEQxNkM5NjZEMTFFNjkyNThGNDA1Mzg5ODhGNTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThGOEQxNkI5NjZEMTFFNjkyNThGNDA1Mzg5ODhGNTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTg1NjY2Njc4NkRFMTFFNjg1NEVGQ0EwRUMxMEI1MDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTg1NjY2Njg4NkRFMTFFNjg1NEVGQ0EwRUMxMEI1MDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6yiEiYAAABU0lEQVR42uyYfWrCQBDFk1K9QFshp9Br6A3MX4aWHCogKIgewVMUlJzBmkJ7g0J8C1MowY9lNpMivIFhDIkzP99uZgfjuq6je7OH6A6N0IQmNKF19ujzUFEUY4Q5PDHiOMJf8zzftqm0JXAkuee+D8e3TkSoPETYwb+hxPOZ+0G0yOlyfOHjE3yE630bSmcS14ZKbxq19NBQoIcwlculIfRCYio1g5SewAfwEsv2bkUsuUv4i9QMgs46UDlq1MjU0Fgm96tdq/uBrzqAXkmtidRWKZ3C+/Atlu/TmlhquD7dk9oq6FmHW6P5QmaqPo0l+jA+UK5ZBeUTjdJv7sv/AHxwR3rQifhH+Vr2XtzmiQg7m5ejKaEt52nffekzVVLpliwOXAm+iIQmNKEJre/T7l+g5HfaU/bjS/crK6Wt5uub87N6nuaeJjShCU1oQvvaSYABAL1MXqSJHl6OAAAAAElFTkSuQmCC" alt="">
					<span>海蜜严选</span>
				</div>
			</div>
			<div class="goods-list">
				<div class="goods" v-for="item in carList">
					<div class="check">
						<input type="checkbox">
					</div>
					<div class="info-list">
						<div class="images" :style='{backgroundImage:"url("+item.src+")"}'>
							<div class="act"></div>
						</div>
						<div class="right-list">
							<div class="info"><p>{{item.name}}</p><b>删除</b></div>
							<div class="classifyList">
								<div class="classify-l" v-if="item.choiseName.length==1">
									<span>{{item.choiseName[0]}}：</span><span>{{item.choise[0]}}</span>
								</div>
								<div class="classify-l" v-if="item.choiseName.length==2">
									<span>{{item.choiseName[0]}}：</span><span>{{item.choise[0]}}，</span>
									<span>{{item.choiseName[1]}}：</span><span>{{item.choise[1]}}</span>
								</div>
							</div>
							<div class="price-num">
								<span class="price">{{item.price}}</span>
								<span class="num">×{{item.num}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="account-bar">
				<div class="check">
					<input type="checkbox">
				</div>
				<div class="all">
					全选
				</div>
				<div class="total">
					<p>合计：￥{{price}}</p>
					<span>已优惠{{favorable}}元</span>
				</div>
				<div class="account">
					结算
				</div>
			</div>
		</div>
		<w-footer></w-footer>
	</div>
</template>

<script>
	import shoppingList from "@/components/page/shopping/shoppingList";
	import wFooter from '@/components/base/footer';

	export default {
		components:{
			wFooter,
			shoppingList
		},
		data (){
			return {
				shoppingList:[],
				scrollWatch:true,
				carList:this.$store.state.carList,
				favorable:0,
				price:0
			}
		},
		mounted() {
			window.scrollTop=0;
			window.onScroll=function(){
				if(this.scrollWatch){
					
				}
			}

			
		},
		destroyed () {
			this.scrollWatch = false;
		},
		created (){
			this.getData();
		},
		methods:{
			getData:function(){
				this.$http.jsonp("http://m.haimi.com/api/cart/info?clearInvalidProducts=Y&platform=WAP",{
	        	jsonp:"_callback"
	      		}).then(function(data){
	         	 	//赋值给alllist数组,
	          		this.shoppingList=data.data.extra.Suggest;
	          		console.log(this.$store.state.carList)
	      		})
			}
		}
	}
</script>
<style lang="less" scoped>
	.account-bar{
		width:100%;
		position: fixed;
		bottom:49px;
		left:0;
		height:57px;
		background:#fff;
		border-top:1px solid #eee;
		display: -webkit-box;
		-webkit-box-align:center;
		padding-left: 0.12rem;
		box-sizing:border-box;
		.check{
			margin-right:12px;
			input{
				display: block;
				width:15px;
				height:15px;
			}
		}.all{
			font-size: 0.15rem;
		}
		.total{
			-webkit-box-flex:1;
			text-align: end;
			p{
				color:#801a2a;
				font-size: 0.16rem;
			}
			span{
				font-size: 0.12rem;
				display: block;
				margin-top:3px;
				color:#999;
			}
		}
		.account{
			padding:0 36px;
			background: #801a2a;
			height:100%;
			color:#fff;
			font-size: 0.16rem;
			line-height: 50px;
			margin-left:7px;
		}
	}
	.carList{
		margin-bottom:64px;
		width:100%;
		overflow: hidden;
		.cart-home{
			height:44px;
			background: #fff;
			display: -webkit-box;
			padding:0 0.12rem;
			box-sizing:border-box;
			-webkit-box-align:center;
			border-bottom: 1px solid #e5e5e5;
			.check{
				margin-right:12px;
				input{
					display: block;
					width:16px;
					height:16px;
				}
			}
			.haimi{
				display:-webkit-box;
				height:100%;
				-webkit-box-align:center;
				img{
					display: block;
					width:20%;
					margin-right:4px;
				} 
				span{
					display: block;
					font-size: 0.15rem;
					line-height: 44px;
				}

			}
		}
		.goods-list{
			width:100%;
			background: #fff;
			.goods{
				width:100%;
				padding:12px 0.12rem;
				box-sizing:border-box;
				display: -webkit-box;
				-webkit-box-align:center;
				.check{
					padding-right:12px;
					box-sizing:border-box;
					input{
						display: block;
						width:16px;
						height:16px;
					}
				}
				.info-list{
					-webkit-box-flex:1;
					display: -webkit-box;
					.images{
						width:21.5%;
						background-position:center center;
						background-size: cover;
						margin-right: 10px;
						.act{
							padding-top:100%;
							border: 1px solid #eee;
						}
					}
					.right-list{
						-webkit-box-flex:1;
						.info{
							display: -webkit-box;
							width:100%;
							padding-bottom:2px;
							p{
								-webkit-box-flex:1;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								font-size: 0.14rem;
								color:#242424;
								padding-right: 30px;
								box-sizing:border-box;
							}
							b{
								display: block;
								font-size: 0.14rem;
								color:#666;
								font-weight: normal;
							}
						}
						.classifyList{
							-webkit-box-flex:1;
							.classify-l{
								display: -webkit-box;
								span{
									font-size: 0.14rem;
									display: block;
									color:#999;
								}
							}
						}
						.price-num{
							display: -webkit-box;
							margin-top:11px;
							span{
								display: block;
								&.price{
									-webkit-box-flex:1;
									color:#242424;
									font-size: 0.14rem;
								}
								&.num{
									color:#666;
									font-size: 0.12rem;
								}
							}
						}
					}
				}

			}
		}
	}
	.shopping-cart{
		width:100%;
		.def{
			width:100%;
			a{
				display: block;
				
				img{
					display: block;
					width:29%;
					margin:1.4rem auto 0.16rem;
				}
				span{
					display: block;
				    margin: 0 auto;
				    width: 0.8rem;
				    line-height:0.26rem;
				    border: 1px solid #000;
				    text-align: center;
				    font-size: 0.12rem;
					color:#000;
				}
			}
		}
		.everyone-look{
			margin-top:0.7rem;
			.title{
				padding:10px 0;
			    text-align: center;
			    background-color: #fff;
			    border-bottom: 1px solid #eee;
			    font-size: 0.14rem;
			    font-weight: normal;
			}
		}
	}
</style>