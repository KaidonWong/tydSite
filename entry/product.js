import '../css/common.css';
import '../scss/header.scss';
import '../scss/footer.scss';
import '../scss/product.scss';
import $ from 'jquery';


var currentLabel = 0;
const labelType = 11;
const labelNum = labelType * 2;
const labelWidth = 266;
var timerId;

function buttonLeftOnClick() {
    if (currentLabel == 0) {
        $('.module').css('transition', 'none');
        let temp = -labelType * labelWidth;
        $('.module').css('transform', `translateX(${temp}px)`);
        currentLabel = (labelNum - labelType);
        setTimeout(buttonLeftOnClick,10);
    }else{
        $('.module').css('transition', 'transform 1s');
        currentLabel -= 1;
        let offset = -currentLabel * labelWidth;
        $('.module').css('transform', `translateX(${offset}px)`);
    }
}

function buttonRightOnClick() {
    if (currentLabel == (labelNum - labelType)) {
        $('.module').css('transition', 'none');
        $('.module').css('transform', `translateX(0px)`);
        currentLabel = 0;
        setTimeout(buttonRightOnClick,10);
    }else{
        $('.module').css('transition', 'transform 1s');
        currentLabel += 1;
        let offset = -currentLabel * labelWidth;
        $('.module').css('transform', `translateX(${offset}px)`);
    }
}

$().ready(function () {
    $('.chanpinzhongxin').hover(function () {
        $('.chanpinzhongxin').find('.subcontent').addClass('visible');
    }, function () {
        $('.chanpinzhongxin').find('.subcontent').removeClass('visible');
    });

    $('.jiejuefangan').hover(function () {
        $('.jiejuefangan').find('.subcontent').addClass('visible');
    }, function () {
        $('.jiejuefangan').find('.subcontent').removeClass('visible');
    });

    $('.module').hover(function () {
        clearInterval(timerId);
    }, function () {
        timerId = setInterval(function () {
            buttonRightOnClick();
        }, 3000)
    });

    $(".button-left").click(function () {
        clearInterval(timerId);
        buttonLeftOnClick();
    });

    $(".button-right").click(function () {
        clearInterval(timerId);
        buttonRightOnClick();
    });

    timerId = setInterval(function(){
        buttonRightOnClick();
    },3000);

    $('.catalog').on('click','.module',function(e){
        let url = $(this).attr('name');
        $('.panel').css('display','none');
        $(`.${url}`).css('display','block');
    });

    $('.panel').css('display','none');
    let keyword = "";
    let keywords = window.location.search;
    //删除？
    keywords = keywords.substring(1);
    let keywordArr = keywords.split('&');
    for(let item of keywordArr) {
        let arr = item.split('=');
        if (arr.length != 2) {
            continue;
        }
        let name = arr[0];
        if(name == 'panel') {
            keyword = arr[1];
        }
    }

    if(keyword == "") {
        $($('.panel').get(0)).css('display','block');
    }else{
        let panel = $(`.${keyword}`);
        if(panel.length != 0) {
            panel.css('display','block');
        }else{
            $($('.panel').get(0)).css('display','block');
        }
    }

})