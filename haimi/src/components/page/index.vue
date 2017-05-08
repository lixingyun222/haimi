<template>
	<div>
		<w-search></w-search>
		<div class="w-main">
			<nav-bar v-on:tabContent="tabContent"></nav-bar>
		</div>
		<keep-alive>
		<component v-bind:is="currentView" :pageIndex="pageIndex" :navId="navId"></component>
		</keep-alive>
		<w-footer></w-footer>
	</div>
</template>

<script>
	import wSearch from "@/components/page/index/search";
	import navBar from "@/components/page/index/navBar";
	import recommend from "@/components/page/index/recommend";
	import indexPage from "@/components/page/index/indexPage";
	import wFooter from '@/components/base/footer';
	
	export default {
		data () {
	    	return {
	      		currentView: 'recommend',
	      		pageIndex:0,
	      		navId:"2",
	      		scrollWatch: true
	    	}
	  	},
	  	components: {
	    	wSearch,
	    	navBar,
	    	recommend,
	    	indexPage,
	    	wFooter	
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
	  	methods:{
	  		tabContent (index,navId) {
	  			
	  			if(index==0){
	  				this.currentView='recommend';
	  			}else{
	  				this.currentView="indexPage";
	  			}
	  			this.navId=navId;
	  			this.pageIndex=index;

	  		}
	  	}
  	}

</script>

<style lang="less" scoped>
	
</style>