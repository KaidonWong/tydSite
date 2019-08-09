import '../css/common.css';
import '../scss/header.scss';
import '../scss/footer.scss';
import '../scss/news.scss';
import $ from 'jquery';

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
})