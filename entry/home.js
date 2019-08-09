import '../css/common.css';
import '../scss/header.scss';
import '../scss/footer.scss';
import '../scss/home.scss';
import $ from 'jquery';

var switchBanner = 1;

$().ready(function(){
    $('.chanpinzhongxin').hover(function(){
        $('.chanpinzhongxin').find('.subcontent').addClass('visible');
    },function(){
        $('.chanpinzhongxin').find('.subcontent').removeClass('visible');
    });

    $('.jiejuefangan').hover(function () {
        $('.jiejuefangan').find('.subcontent').addClass('visible');
    }, function () {
        $('.jiejuefangan').find('.subcontent').removeClass('visible');
    });

    $('.banner').hover(function(){
        $('.bg-buttons').css('opacity',1);
    },function(){
        $('.bg-buttons').css('opacity',0);
    });

    $('.bg-buttons').click(function(){
        $('#bg-mask').css('animation','bg-switch 0.6s 1');
        setTimeout(() => {
            $('#bg-mask').css('animation','none');
        }, 600);
        if(switchBanner%2 == 0) {
            $('#img2').css('visibility','visible');
        }else{
            $('#img2').css('visibility','hidden');
        }
        switchBanner++;
    });
})