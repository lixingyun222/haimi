<template>
	<div>
		<div class="swiper-container" id="swiper-box">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="item in bannerList">
	            	<a href="javascript:;">
	            		<img :src="item.picture" alt="">
	            	</a>
	            </div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	    </div>
	    
	</div>
	
</template>

<script>
	
	export default {
		props:["bannerList"],
		mounted:function(){
		   var swiper = new Swiper('.swiper-container', {
		  		pagination: '.swiper-pagination',
		        slidesPerView: 1,
			    paginationClickable: true,
			    spaceBetween:10,
			    observer:true,
			    observeParents:true
		    });
	  	}
	}
</script>
<style lang="less" scoped>
	.banner{
		img{
			display: block;
			width:100%;
		}
	}
	#swiper-box{
		.swiper-wrapper{
			box-sizing:border-box;
			.swiper-slide{
				
				
				a{
					display: block;
					width:100%;
					padding:0 13%;
					box-sizing:border-box;
					img{
						display: block;
						width:100%;
					}
				}
			}
		}
		.swiper-pagination{
			height:1.2rem;
			
		}
	}




</style>