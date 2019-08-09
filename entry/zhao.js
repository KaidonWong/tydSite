import '../css/common.css';
import '../scss/header.scss';
import '../scss/footer.scss';
import '../scss/zhao.scss';
import $ from 'jquery';

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

    $('.line').click(function(e) {
        let name = $(this).find('div:nth-of-type(1)');

        let next = $(this).next();
        let display = next.css('display');
        if(display == 'none') {
            next.css('display','block');
            name.css('color','#d40e10');
        }else {
            next.css('display','none');
            name.css('color','#000000');
        }
        let button = $(this).find('.button');
        button.toggleClass('up');
    });

    $('.line').hover(function(e){
        let name = $(this).find('div:nth-of-type(1)');
        name.css('color','#d40e10');
    },function(e){
        let next = $(this).next();
        let display = next.css('display');
        if(display == 'block') {
            return;
        }
        let name = $(this).find('div:nth-of-type(1)');
        name.css('color','#000000');
    });

    $('.tabs').on('click','.tab',function(e) {
        let $tab = $(this);
        $tab.addClass('active');
        redImg($tab.find('.image'));

        let $siblings = $tab.siblings();
        $siblings.removeClass('active');
        $siblings.each(function(){
            greyImg($(this).find('.image'));
        });

        let $panels = $('.panel');
        $panels.css('display','none');
        let name = $tab.attr('name');
        $(`.${name}`).css('display','block');

    });

})

function redImg($element) {
    let $imgs = $element.children();
    $imgs.eq(0).css('display','none');
    $imgs.eq(1).css('display','inline');
}

function greyImg($element) {
    let $imgs = $element.children();
    $imgs.eq(0).css('display','inline');
    $imgs.eq(1).css('display','none');
}