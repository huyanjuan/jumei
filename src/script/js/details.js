!(function ($) {

    $.ajax({
        url: 'http://10.31.162.25/jumeiyoupin/php/details.php',
        data: {
            id: location.search.substring(1).split('=')[1]
        },
        dataType: 'json'
    }).done(function (data) {
        //console.log(htitle); 
        var htitle =data[0].title+'--'+'聚美优品官网'; 
        $('.h_title').append(htitle);
       /*  var htitle = `<title>${data[0].title}</title>`;
        $('head').append(htitle) */
    }).done(function (data) {//拼接menu      
        var $str = `<div class="menu">
                <a href="#">聚美优品首页</a> 
                >

                <a href="#">${data[0].stitle}</a>
                >

                <a href="#">${data[0].function}</a>
                >

                <span>${data[0].detail}</span>

            </div>`;
             $('.p_menu').html($str);        
            }).done(function (data) {//拼接左边内容介绍
                var $stext = `<div class="t_detail">
                    ${data[0].stext}
                </div>`;
                $('.title').html($stext);
            }).done(function (data) {
               $('.deal_img img').attr("src", data[0].burl.split(', ')[0]);
               $('#bf img').attr("src",data[0].burl.split(', ')[0]);
            }).done(function (data) {
                var $destr = ` <div class="right_header">
                <a href="#">
                    <img src="${data[0].surl.split(',')[0]}" alt="">
                </a>
            </div>
            <div class="reduce_price">
                <div class="price">
                    <span class="qian">¥</span>
                    <span class="shu">${data[0].price}</span>
                    <div class="re_detail">
                        <p>
                            <span class="word">参考价</span>
                            <span class="p_size">¥</span>
                            <span>129</span>
                            <span class="del_price">
                                直降
                                <span class="cut_price">
                                    <span class="p_size">¥</span>
                                    ${data[0].fyl}
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="buy_num">
                    <div>
                        <i class="icon"></i>
                        <p class="number">
                            <span class="red">1579</span>
                            人已购买
                        </p>
                    </div>
                </div>
            </div>

            <div class="baoyou_rule">
                <div class="rule_zhengce">
                    <span class="p_rule">包邮政策：</span>
                    <div class="d_rule">本商品满299元或2件包邮（新疆部分区域除外）</div>
                </div>
                <div class="rule_zhengce">
                    <span class="p_rule">服务政策：</span>
                    <div class="d_rule a_rule">
                        <a href="#">
                            本商品支持<span class="red">30</span>天拆封无条件退货
                        </a>
                    </div>
                </div>
            </div>
            <div class="add_cart">
                <a href="#" class="red_button"></a>
            </div>`;
            $('.detail').html($destr);
            })
          
})(jQuery);


!(function ($) {
    $("#spic").hover(function() {
        $("#sf").css("visibility", "visible");
        $("#bf").css("visibility", "visible");

        $("#sf").width(($(this).width() * $("#bf").width()) / $("#bpic").width());
        $("#sf").height(($(this).height() * $("#bf").height()) / $("#bpic").height());

        var $bili = $("#bpic").width() / $("#spic").width();

        $("#spic").on("mousemove", function(ev) {
          var $left = ev.pageX - $(".wrap").offset().left - $("#sf").width() / 2;
          var $top = ev.pageY - $(".wrap").offset().top - $("#sf").height() / 2;
          console.log($left);
          console.log(ev.pageX);
          console.log($(".wrap").offset().left);
          console.log($("#sf").width());
          console.log($("#spic").width());

          if ($left <= 0) {
            $left = 0;
          } else if ($left >= $("#spic").width() - $("#sf").width()) {
            $left = $("#spic").width() - $("#sf").width();
          }

          if ($top <= 0) {
            $top = 0;
          } else if ($top >= $("#spic").height() - $("#sf").height()) {
            $top = $("#spic").height() - $("#sf").height();
          }

          $("#sf").css({ left: $left, top: $top });

          $("#bpic").css({ left: -$bili * $left, top: -$bili * $top });
        });
      }, function() {
        $("#sf").css("visibility", "hidden");
        $("#bf").css("visibility", "hidden");
      });
})(jQuery);