<template>
	<div>
		<div class="swiper-container" id="swiper-box">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="item in bannerList">
	            	<a href="javascript:;"><img :src="item.Picture" alt=""></a>
	            </div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	    </div>
	    <div class="banner" v-if="bannerList.length==1">
			<img :src="bannerList[0].Records[0].Picture" alt="">
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
			    observeParents:true,
			    autoplay:2000
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
			.swiper-slide{
				a{
					display: block;
					img{
						width:100%;
						display: block;
					}
				}
			}
		}
		.swiper-pagination{
			height:1.2rem;
			
		}
	}




</style>