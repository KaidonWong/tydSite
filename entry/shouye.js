import '../css/shouye.css';
import $ from 'jquery';

$(function() {
    var i = 0;
    var len = $("#scroll ul li").length - 1;
    $(".nav-prev").click(function() {
        if(i == len) {
            i = -1;
        }
        i++;
        $("#scroll ul li").eq(i).fadeIn(1500).siblings().hide();
    }); //到这里分开！上面的是上一张点击的效果代码，下面的是下一张点击的效果代码．
    $(".nav-next").click(function(){	//获取类名的点击事件． 
        if(i==0){ 
            i=len+1; 
        } 
        i--; 
        $("#scroll ul li").eq(i).fadeIn(1500).siblings().hide(); 
    }); 
}); /*轮播*/