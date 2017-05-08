<template>
	<div>
		<div class="join-car" v-show="isShow">
			
			<div class="leixing">
				<div class="pic" :style='{backgroundImage:"url("+joinList.Pictures+")"}'>
					<div class="ca"></div>
				</div>
				<div class="info">
					<h4>￥<span class="price">{{joinList.FinalPrice}}</span></h4>
					<p class="stock">(库存<span class="kucun">{{joinList.Stock}}</span>件)</p>
					<p class="choise">
						<span v-if="joinList.AttrInfoArray!=''">请选择：</span>
						<span v-for="(item,index) in joinList.AttrInfoArray"> {{item.AttrName}},</span>
					</p>
				</div>
			</div>
			<div class="w-category" v-for="(item,i) in joinList.AttrInfoArray">
				<h4 >{{item.AttrName}}</h4>
				<ul class="category-list1" v-if="i==0">
					<li v-for="(it,index) in item.AttrValues.split(',')" :class="joinList.SkuInfo[index].Stock>0?'black':
					'disabled'" @click="toggleClass1($event,index,it)" ref="label1">
						{{it}}
					</li>
				</ul>
				<ul class="category-list1" v-if="i!=0">
					<li v-for="(it,index) in item.AttrValues.split(',')" class="black" @click="toggleClass2($event,index,it)" ref="label2">
						{{it}}
					</li>
				</ul>
			</div>
			<div class="count">
				<h4>购买数量</h4>
				<div class="num">
					<span class="sub" @click="sub">-</span>
					<span class="nums">{{num}}</span>
					<span class="add" @click="add">+</span>
				</div>
			</div>
			<button class="btn" @click="isSure">
				确认
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			joinList:{
				type:Object,
				default:function(){}
			},
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data (){
			return {
				num:1,
				txt1:"",
				txt2:"",
				src:"",
				show:false
			}
		},
		methods:{
			toggleShow:function(val){
				this.isShow=!val;
			},
			sub:function(){
				
				if(this.num>=2){
					this.num--;
				}
				else{
					alert("至少选择一件")
				}
			},
			add:function(){
				this.num++;
			},
			toggleClass1:function(e,index,text){
				var thisDom=e.target;
				this.txt1=text;
				thisDom.className=thisDom.className=="black"?"red":"black";
				this.$refs.label1.forEach(function(item,i){
					
					if(item==thisDom) return;
					if(item.className=="disabled"){
						item.className="disabled";
					}else{
						item.className="black"
					}
					
				})
				var pic=document.querySelector(".leixing .pic");
				var kucun=document.querySelector(".kucun");
			
				var price=document.querySelector(".price");
				if(this.joinList.SkuPictures[index]){
					this.pSrc=this.joinList.SkuPictures[index].Picture;
					pic.style.backgroundImage="url("+this.pSrc+")";
				}else{
					return false
				}
					
					kucun.innerHTML=this.joinList.SkuInfo[index].Stock;
					
					
				if(this.$refs.label2){
					this.ifClass1(index,text,this.$refs.label2,0);
				}

				this.toggleKucun(this.txt2,text);
				this.toggleChoise1(thisDom,text);	
			},
			toggleClass2:function(e,index,text){
				var thisDom=e.target;
				this.txt2=text;
				var choiseSpan=document.querySelectorAll(".choise span");
				

				thisDom.className=thisDom.className=="black"?"red":"black";
				this.$refs.label2.forEach(function(item,i){

					if(item==thisDom) return;
					if(item.className=="disabled"){
						item.className="disabled";
					}else{
						item.className="black"
					}
				})

				
				choiseSpan[0].innerHTML=text?"已选择：":"请选择：";
				choiseSpan[2].innerHTML="，"+text;
				

				this.ifClass1(index,text,this.$refs.label1,1)
				this.toggleKucun(text,this.txt1);
				this.toggleChoise2(thisDom,text);
			},
			ifClass1:function(index,text,ref,n){
				var SkuInfo=this.joinList.SkuInfo;
				var arr=[];
				for(var i=0;i<SkuInfo.length;i++){
					var texts=SkuInfo[i].SkuName.split(",")[n];
					if(texts==text){
						arr.push(SkuInfo[i])
					}
				}
				ref.forEach(function(item,i){
					if(arr[i].Stock==0){
						item.className="disabled"
					}else if(item.className=="red"){
						item.className="red"
					}else{
						item.className="black"
					}
				})
			},
			toggleKucun:function(t2,t1){
				var SkuInfo=this.joinList.SkuInfo;
				var kucun=document.querySelector(".kucun");
				for(var i=0;i<SkuInfo.length;i++){
					var texts=SkuInfo[i].SkuName.split(",");
					if(texts[0]==t1 && t2==texts[1]){
						kucun.innerHTML=this.joinList.SkuInfo[i].Stock;
					}
				}
			},
			toggleChoise1:function(thisDom,text){
				var choiseSpan=document.querySelectorAll(".choise span");
				if(choiseSpan.length>2){
					if(thisDom.className=="red"){
						choiseSpan[1].innerHTML=text;
						choiseSpan[0].innerHTML="已选择："
						if(this.txt2){
							choiseSpan[2].innerHTML=","+this.txt2;
						}else{
							choiseSpan[2].innerHTML="";
						}
						
					}else{
						choiseSpan[1].innerHTML="";
						this.txt1="";
						if(this.txt2){
							choiseSpan[0].innerHTML="已选择："
							choiseSpan[2].innerHTML=this.txt2;
							
						}else{
							choiseSpan[0].innerHTML="请选择："
							choiseSpan[1].innerHTML=this.joinList.AttrInfoArray[0].AttrName+",";
							choiseSpan[2].innerHTML=this.joinList.AttrInfoArray[1].AttrName;
						}
						
					}
					
				}else{
					
					if(thisDom.className=="red"){
						choiseSpan[1].innerHTML=text;
						choiseSpan[0].innerHTML="已选择："
					}else{
						choiseSpan[0].innerHTML="请选择："
						choiseSpan[1].innerHTML=this.joinList.AttrInfoArray[0].AttrName;
					}
				}
			},
			toggleChoise2:function(thisDom,text){
				var choiseSpan=document.querySelectorAll(".choise span");

				if(thisDom.className=="red"){
					choiseSpan[2].innerHTML=text;
					choiseSpan[0].innerHTML="已选择："
					if(this.txt1){
						choiseSpan[2].innerHTML=","+text;
						choiseSpan[1].innerHTML=this.txt1;
					}else{
						choiseSpan[1].innerHTML="";
					}
				}else{
					choiseSpan[2].innerHTML="";
					this.txt2="";
					if(this.txt1){
						choiseSpan[0].innerHTML="已选择："
						choiseSpan[1].innerHTML=this.txt1;
						
					}else{
						choiseSpan[0].innerHTML="请选择："
						choiseSpan[1].innerHTML=this.joinList.AttrInfoArray[0].AttrName+",";
						choiseSpan[2].innerHTML=this.joinList.AttrInfoArray[1].AttrName;
					}
				}
				
			},
			clickSure:function(){
				var choiseSpan=document.querySelectorAll(".choise span");
	
				var data={
					name:this.joinList.Subject,
					src:"",
					num:this.num,
					choise:[],
					id:this.joinList.ProductID,
					choiseName:[],
					price:this.joinList.FinalPrice
				}
				if(this.src){
					data.src=this.src;
				}else{
					data.src=this.joinList.Pictures;
				}
				if(this.joinList.AttrInfoArray.length>0){
					for(var i=0;i<this.joinList.AttrInfoArray.length;i++){
						data.choiseName.push(this.joinList.AttrInfoArray[i].AttrName)
					}
				}else{
					data.choiseName=[];
				}
				
				if(choiseSpan.length==1){
					data.choise=[];
				}else if(choiseSpan.length==2){
					data.choise[0]=choiseSpan[1].innerHTML;
				}else if(choiseSpan.length==3){
					data.choise[0]=choiseSpan[1].innerHTML;
					data.choise[1]=choiseSpan[2].innerHTML.substr(1);
				}
				
				this.$store.commit("addCarList",data);
				this.$emit('show',this.show);
				this.tip("添加购物车成功")
			},
			isSure:function(){
				var isRed1=false;
				var isRed2=false;
				var that=this;
				if(!this.$refs.label1 && !this.$refs.label2){
					this.clickSure()
				}else if(this.$refs.label1 && this.$refs.label2){
					this.$refs.label1.forEach(function(it,i){
						if(it.className=="red"){
							isRed1=true;
						}
					})
					this.$refs.label2.forEach(function(it,i){
						if(it.className=="red"){
							isRed2=true;
						}
					})
					if(isRed1 && isRed2){
						this.clickSure();
					}else{
						this.tip("选项不全")
						return false;
					}
				}else if(this.$refs.label1){

					this.$refs.label1.forEach(function(it,i){
						if(it.className=="red"){
							isRed1=true;
						}
					})
					if(isRed1){
						that.clickSure()
					}else{
						this.tip("没有选择类别")
						return false;
					}
				}	
			},
			tip:function(tex){
				var msgInfo = document.querySelector("#msg-info");
				var info = msgInfo.querySelector(".in");

				info.innerHTML=tex;

				msgInfo.style.display="block";

				setTimeout(function(){
					msgInfo.style.display="none";
				},1000)
			}
		}
	}
</script>

<style lang="less">
	
	.mark{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background: #000;
		opacity: 0.4;
		z-index: 100;
	}
	.join-car{
		background: #fff;
		width:100%;
		position: fixed;
		bottom: 0;
		left:0;
		z-index: 101;
		.leixing{
			width:100%;
			padding:12px 0.12rem;
			box-sizing:border-box;
			display: -webkit-box;
			border-bottom:1px solid #eee;
			.pic{
				width:17%;
				margin-right:10px;
				background-position: center center;
				background-size: cover;
				.ca{
					padding:50%;
				}
			}

			.info{
				-webkit-box-flex:1;
				h4{
					font-size: 0.16rem;
					color:#801a2a;
					font-weight: normal;
				}
				.stock{
					display: block;
					font-size: 0.12rem;
					color:#999;
					margin-top:5px;
					display: -webkit-box;
					-webkit-box-align:center;
					span{
						font-size: 0.12rem;
						color:#999;
					}
				}
				.choise{
					font-size: 0.14rem;
					color:#666;
					margin-top:3px;
					display: -webkit-box;
					-webkit-box-align:center;
					span{
						display: block;
						font-size: 0.14rem;
						color:#666;
						
						&.douhao{
							&:after{
								content:",";
							}
						}
						
						
					}
				}
			}
			
		}
		.w-category{
			padding:0px 0.12rem;
			padding-top:10px;
			box-sizing:border-box;
			h4{
				font-size: 0.12rem;
				color:#242424;
				font-weight: normal;
			}
			ul{
				margin-top:10px;
				width:100%;
				padding-bottom: 5px;
				border-bottom: 1px solid #eee;
				overflow: hidden;
				li{
					margin-right:13px;
					margin-bottom: 8px;
					padding:6px 10px;
					float: left;
					font-size: 0.12rem;
					&.black{
						border:1px solid #000;
						color:#242424;
					}
					&.red{
						border:1px solid #801a2a;
						color:#801a2a;
					}
					&.disabled{
						pointer-events: none;
						border:1px solid #999;
						color:#999;
					}
				
				}
			}
		}
		.count{
			display: -webkit-box;
			margin-top:4px; 
			margin-bottom: 4px;
			padding:8px 0.12rem;
			-webkit-box-align:center;
			h4{
				font-size: 0.14rem;
				font-weight: normal;
				-webkit-box-flex:1;
			}
			.num{
				display: -webkit-box;

				span{
					display: block;
					width:30px;
					height:30px;
					border:1px solid #eee;
					font-size: 0.2rem;
					box-sizing:border-box;
					text-align: center;
					line-height: 28px;
					&.nums{
						width:60px;
					}
				}
			}
		}
		.btn{
			border:none;
			background: #801a2a;
			color:#fff;
			font-size: 0.16rem;
			width:100%;
			padding:12px 0;
			display: block;
		}
	}
</style>