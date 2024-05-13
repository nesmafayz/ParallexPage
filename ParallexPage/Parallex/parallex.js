let stars1 = document.getElementById('stars1');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let night = document.querySelector('.night');

window.onscroll = function () {
    let value = scrollY;
    stars1.style.left = value + "px";
    moon2.style.top = value * 3 + "px";
    mountains3.style.top = value * 1.5 + "px";
    river5.style.top = value * 1.2 + "px";
    boat6.style.top = value + "px";
    boat6.style.left = value * 3 + "px";
    night.style.fontSize = value + "px";
    if (scrollY >= 65)
    {

        night.style.fontSize = 65 + "px";
        night.style.position = 'fixed';
        if (scrollY >= 455) {
            night.style.display = 'none';
        }
        else {
            night.style.display = 'block';
        }
        if (scrollY >= 200) {
            var data=document.querySelector('.main');
            data.style.background = 'linear-gradient(#376281, #10001f)';
        }
        else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }

    }
}


