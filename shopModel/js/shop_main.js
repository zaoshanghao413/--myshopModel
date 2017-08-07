$(document).ready(function(){
	/*顶部右侧导航栏效果实现*/
	$(".header_top_right ul li.able_focus").hover(
	function(){
		if($(this).children("i").hasClass("rorate_again")){
			$(this).children("i").removeClass("rorate_again");
			/*console.log(1);*/
		}
		$(this).children("i").addClass("rorate");
		$(this).addClass("focus");
		$(this).children("div").addClass("focus");
	},
	function(){
		$(this).children('i').addClass("rorate_again");
		$(this).children("i").removeClass("rorate");
		/*$(this).removeClass("rorate_again");
		console.log(2);*/
		$(this).removeClass("focus");
		$(this).children("div").removeClass("focus");
	});
	/*顶部左侧城市选择效果实现*/
	$(".header_top_left>a").click(function(){
		$("#citys").show();
		$(this).parent().children("i").addClass("focus");
		$(this).addClass("focus");
	});
	$("#close").click(function(){
		$("#citys").hide();
		$(".header_top_left a").removeClass("focus");
	});
	var city;
	$("div.hot_city>ul a").click(function(){
		city=$(this).html();
		$("#position").html(city);
		$("#citys").hide();
		$(".header_top_left a").removeClass("focus");
	});
	$("div.letter_of_citys a").click(function(){
		city=$(this).html();
		$("#position").html(city);
		$("#citys").hide();
		$(".header_top_left a").removeClass("focus");
	});
	/*锚点链接的平滑过渡*/
	$("div.letters a").each(function(){
		$(this).click(function(){
			$target=$(this).attr('href');
			console.log($target);
			console.log($($target).position());
			$('div.letter_of_citys').animate({
                 scrollTop: $($target).position().top
            }, 500);
        	return false;
		});
	});
	/*购物车效果*/
	$("div.header_shoptaxi").hover(
		function(){
			$("div.shoptaxi_banner").show();
		},
		function(){
			$("div.shoptaxi_banner").hide();
		});
	/*导航栏模块显示效果*/
	$("div.mod_prom_nav>ul>li").hover(
		function(){
			$(this).find("div.mod_prom_nav_children").show();
			$(this).addClass("focus");
		},
		function(){
			$(this).find("div.mod_prom_nav_children").hide();
			$(this).removeClass("focus");
		});
	/*轮播图效果*/
	var curr=0;
	/*$("div.picture_action_btns ul li").hover(
		function(){
			$(this).find("i").addClass("action");
			$(this).addClass("action");
		},
		function(){
			$(this).find("i").removeClass("action");
			$(this).removeClass("action");
		});*/
	$("div.picture_action_btns ul li").each(function(i){
		$(this).mouseover(function(){
			curr=i;
			$("div.picture_action ul li").eq(i).fadeIn("fast").siblings("li").fadeOut("fast");
			$(this).addClass("action").siblings("li").removeClass("action");
			$("div.picture_action_btns ul li i").removeClass("action");
			$(this).find("i").addClass("action");
			switch(i){
				case 0: $("div.mod_prom_show_wrap").css('background','rgb(26,115,5)');break;
				case 1: $("div.mod_prom_show_wrap").css('background','rgb(79,210,230)');break;
				case 2: $("div.mod_prom_show_wrap").css('background','rgb(119,199,252)');break;
				case 3: $("div.mod_prom_show_wrap").css('background','rgb(108,158,219)');break;
				case 4: $("div.mod_prom_show_wrap").css('background','rgb(10,39,55)');break;
				case 5: $("div.mod_prom_show_wrap").css('background','rgb(1,140,207)');break;
				case 6: $("div.mod_prom_show_wrap").css('background','rgb(219,30,50)');break;
				case 7: $("div.mod_prom_show_wrap").css('background','rgb(121,189,238)');break;
			}
		});
	});
	var timer=setInterval(function(){
		var go=(curr+1)%8;
		$("div.picture_action_btns ul li").eq(go).mouseover();
	},6000);
	/*1号抢购部分滑动效果*/
	var index=0;
	var left_index=0;
	$("div.seclill_goods_wrap").hover(function(){
		if(index!=0&&index<2){
			$("div.seclill_goods_wrap>span").show("fast");
		}else if(index==2){
			$("span.seclill_goods_pre").show("fast");
		}else{
			$("span.seclill_goods_next").show("fast");
		}
	},
	function(){
		$("div.seclill_goods_wrap>span").hide("fast");
	});
	$("span.seclill_goods_next").click(function(){
		if(index==0){
			$("span.seclill_goods_pre").show("fast");
		}else if(index==1){
			$(this).hide("fast");
		}
		index+=1;
		left_index=-1023*index;
		/*console.log(left_index);*/
		$("ul.seclill_goods").animate({left:left_index},200);
	});
	$("span.seclill_goods_pre").click(function(){
		
		index-=1;
		if(index==0){
			$(this).hide("fast");
			$("span.seclill_goods_next").show("fast");
		}
		left_index=-1023*index;
		$("ul.seclill_goods").animate({left:left_index},200);
	});
	/*排行榜部分效果*/
	$("div.rank_tab ul li").each(function(i){
		$(this).mouseover(function(){
			$(this).addClass("focus").siblings("li").removeClass("focus");
			/*$("ul.rank_shop_goods>li").eq(i).show("fast");*/
			$("ul.rank_shop_goods>li").eq(i).addClass("focus").siblings("li").removeClass("focus");
		});
	});
	/*$("ul.rank_shop_goods>li.focus").show('fast');*/
	/*懂你想要列举部分*/
	$("div.you_like_list ul li").hover(function(){
		$(this).find("div.interest").slideDown("fast");
	},
	function(){
		$(this).find("div.interest").slideUp("fast");
	});
	/*固定导航栏部分*/
	$("div.prism_my_info").hover(function(){
		$(this).find("div.prism_my_info_child").css("background","#ff5c4d");
		$(this).find("div.prism_my_info_child").animate({left:"-72px"},300);
	},
	function(){
		$(this).find("div.prism_my_info_child").css("background","#333333");
		$(this).find("div.prism_my_info_child").animate({left:"0"},300);
	});
	$("div.prism_my_info_code").hover(function(){
		$(this).find("div.prism_my_info_child").css("display","block");
	},
	function(){
		$(this).find("div.prism_my_info_child").css("display","none");
	});
	$(".return_top").click(function(){
		 $("html,body").animate({scrollTop:0}, 500);
	});
	/*倒计时部分*/
	setInterval(function(){
		var hour=parseInt($("span.clock_hours").html());
		var muninte=parseInt($("span.clock_monites").html());
		var second=parseInt($("span.clock_seconds").html());
		if(second){
			second-=1;
		}else{
			second=59;
			if(muninte){
				muninte-=1;
			}else{
				muninte=59;
				hour-=1;
			}
		}
		if(second<10){second="0"+second;}
		if(muninte<10){muninte="0"+muninte;}
		if(hour<10){hour="0"+hour;}
		$("span.clock_hours").html(hour);
		$("span.clock_monites").html(muninte);
		$("span.clock_seconds").html(second);
	},1000);
});
