let styleHeader = document.getElementById('header')
styleHeader.style.textAlign = 'center';
let rebuild = function(x) {

    if (x.style.color == "red" && x.style.backgroundColor == "blue") {
        x.style.color = "blue";
        x.innerHTML = 'no Good Day!'
        x.style.backgroundColor = "red";
    } else {
        x.style.color = "red";
        x.innerHTML = 'Good Day!'
        x.style.backgroundColor = "blue";
    }
}

setInterval(() => {
    rebuild(styleHeader)

}, 1000);