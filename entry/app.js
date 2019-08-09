import '../scss/app.scss';
import '../css/app.css';
import $ from 'jquery';

function component() {
    var element = document.createElement('div');
    element.innerHTML = "zzz";

    return element;
}

document.body.appendChild(component());
$('#img1').attr('src','../asset/hsjj_03.png');
