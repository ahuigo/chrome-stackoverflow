var p = document.getElementById('wmd-input');
var p = document;
if (p) {
    p = p.parentNode;
    var ignore = function(e){e.stopPropagation();};
    p.addEventListener('keydown', ignore, true);
    p.addEventListener('keypress', ignore, true);
    p.addEventListener('keyup', ignore, true);
}
