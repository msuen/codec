!function($){$.fn.progress=function(){var r=this.data("percent");this.css("width",r+"%")}}(jQuery),$(document).ready(function(){$(".content__navigation-load .load").progress(),jQuery("#slider").slippry({speed:3e3,pause:2500,pager:!1,controls:!1})});var $grid=$(".grid").masonry({itemSelector:".grid-item",columnWidth:".grid-sizer",gutter:20,percentPosition:!0});$grid.imagesLoaded().progress(function(){$grid.masonry("layout")});