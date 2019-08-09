import '../css/common.css';
import '../scss/header.scss';
import '../scss/footer.scss';
import '../scss/aboutus.scss';
import $ from 'jquery';
import '../js/api.js';
import {initMap} from '../js/map';

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

    $('.button-left').click((e)=>{
        e.stopPropagation();
        let $temp = $(e.delegateTarget).siblings();
        let $pages;
        $temp.each((index,item)=>{
            if($(item).hasClass('pages')) {
                $pages = $(item);
            }
        });
        $pages = $pages.children();
        $pages.each((index,page)=>{
            let $page = $(page);
            let visible = $page.css('visibility');
            if(visible == 'visible') {
                $pages.css('visibility','hidden');
                if((index-1) == -1) {
                    let $showPage = $($pages[$pages.length-1]);
                    $showPage.css('visibility','visible');
                }else {
                    let $showPage = $($pages[index-1]);
                    $showPage.css('visibility','visible');
                }
                return false;
            }
        });
    });
    $('.button-right').click((e)=>{
        e.stopPropagation();
        let $temp = $(e.delegateTarget).siblings();
        let $pages;
        $temp.each((index,item)=>{
            if($(item).hasClass('pages')) {
                $pages = $(item);
            }
        });
        $pages = $pages.children();
        $pages.each((index,page)=>{
            let $page = $(page);
            let visible = $page.css('visibility');
            if(visible == 'visible') {
                $pages.css('visibility','hidden');
                if((index+1) == $pages.length) {
                    let $showPage = $($pages[0]);
                    $showPage.css('visibility','visible');
                }else {
                    let $showPage = $($pages[index+1]);
                    $showPage.css('visibility','visible');
                }
                return false;
            }
        });

    });

    $('.pages').on('click','.paper',function(e){
        let bgUrl = $(this).css('background-image');
        let temp = bgUrl.split("\"");
        let url = temp[1];
        $('.pop-up img').attr('src',url);
        $('.pop-up').css('visibility','visible');
    });

    $('.pop-up').click(function(){
        $('.pop-up').css('visibility','hidden');
    });

    $('.menu').on('click','>div',function(e){
        $('.main-content').css('display','none');
        let name = $(this).attr('name');
        $(`.${name}`).css('display','block');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.main-content').css('display','none');
    $($('.main-content').get(0)).css('display','block');
    initMap();//创建和初始化地图
})