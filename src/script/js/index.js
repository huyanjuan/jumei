//1.导入模块的公用部分
!(function ($) {
	$(".topcontent").load("header.html .top");
	//第一个参数：地址。
	//第二个参数：选择器。
	$(".footercontent").load("footer.html");
})(jQuery);

//头部登陆后
!(function ($) {
	/* var $header_box=$('.h-box-left');
	var $admin=$('.after-left'); */
	function addCookie(key, value, day) {
		var date = new Date(); //创建日期对象
		date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
		document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
	}
	function getCookie(key) {
		var str = decodeURI(document.cookie);
		var arr = str.split('; ');
		for (var i = 0; i < arr.length; i++) {
			var arr1 = arr[i].split('=');
			if (arr1[0] == key) {
				return arr1[1];
			}
		}
	}
	function delCookie(key, value) {
		addCookie(key, value, -1); //添加的函数,将时间设置为过去时间
	}
	//显示隐藏
	$(function () {
		if (getCookie('UserName')) {
			$('.h-box-left').hide();
			$('.after-left').show().find('.sp').html(getCookie('UserName'));
			/* console.log(1);
			console.log(getCookie('UserName')) */
		}
		$('.after-left .tuichu').on('click', function () {
			delCookie('UserName', '', -1);
			$('.h-box-left').hide();
			$('.after-left').show();
		});
	});
})(jQuery);
//楼梯效果
!(function ($) {
	var $louti = $("#leftnav"); //左侧楼梯
	var $loutili = $("#loutinav ul a");
	var $louceng = $("#main .louti");
	var $first_a = $(".first a");
	var $second_a = $(".second a");
	var $third_a = $(".third a");
	$(window).on("scroll", function () {
		var $scrolltop = $(window).scrollTop();
		//console.log($scrolltop);
		if ($scrolltop && $scrolltop >= 1980) {
			$louti.show();
		} else {
			$louti.hide();
		}

		$louceng.each(function (index, element) {
			var $top = $louceng.eq(index).offset().top + $(this).innerHeight();
			//console.log($top);
			if ($scrolltop > $top) {
				if ($scrolltop > $top) {
					$second_a.css({
						"background-position": "-176px -124px",
						"color": "#fff"
					});

					$first_a.css({
						"background-position": "0 0",
						"color": "#8f8f8f"
					});
					$third_a.css({
						"background-position": "0 -186px",
						"color": "#8f8f8f"
					});

					if ($scrolltop > $top + 2500) {

						$third_a.css({
							"background-position": "-176px -186px",
							"color": "#fff"
						});
						$first_a.css({
							"background-position": "0 0",
							"color": "#8f8f8f"
						});
						$second_a.css({
							"background-position": "-0px -124px",
							"color": "#8f8f8f"
						});
						return false;
					}
					return false;
				}
				$loutili.eq($(this).index()).addClass('active');
			} else {
				$second_a.css({
					"background-position": "0px -124px",
					"color": "#8f8f8f",
				});
				$first_a.css({
					"background-position": "-176px 0",
					"color": "#fff"
				});
				$third_a.css({
					"background-position": "0 -186px",
					"color": "#8f8f8f"
				});
			}
		});
	});
})(jQuery);

!(function ($) {
	// if ($('.sx_content').offset().top <= $(window).height() + $(window).scrollTop()) {

	$.ajax({
		url: "http://10.31.162.25/jumeiyoupin/php/getdata.php",
		dataType: "json",
		type: "get"
	}).done(function (data) {
		//console.log(data);

		//console.log($.responseText);
		var $htmlstr = '';
		$.each(data, function (index, value) {
		/* for (var obj of arrlist) { */
			$htmlstr += '<li class="box">'+
								'<div class = "img_box" >'+
									'<a href = "http://10.31.162.25/jumeiyoupin/src/detail.html?id='+value.id+'">'+
										'<img src="'+value.url.split(',')[0]+'" id="'+value.id+'"/>'+
										'<div class = "img_none" >'+
											'<div class = "xinpin global div" >海外直采 海外价格 闪电发货</div>'+
										'</div>'+
									'</a>'+
									 '<div class = "cart" >'+
										 '<a href = "javascript:;"class = "add_cart" >加入购物车</a>'+
									'</div>'+						 
								'</div>'+
								'<a href="#">'+
									'<div class="details">'+
										'<p class="title">'+
										   '<span>【官方授权】</span>'+value.title+
										'</p>'+
										'<div class="intro">'+
											'<div class="price">'+
												'<em>¥</em><span class="nprice">'+value.price+'</span>'+
												'<span class="bprice"></span>'+
											'</div>'+
											'<div class="num_timer">'+
												'<div class="timer">'+
													'<em>00</em>天<em>15</em>时<em>52</em>分<em>55</em>秒'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</a>'+
						'</li>';
		});
		//$htmlstr += "</ul>";
		$('.sx_content ul').html($htmlstr);
	});
	//}
})(jQuery);