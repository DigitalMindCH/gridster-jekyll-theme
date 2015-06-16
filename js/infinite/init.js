$(document).ready(function () {
    $('.articles').jscroll({
        contentSelector: 'article',
        nextSelector: '.next',
        callback: removeWrap,
    });    
});

function removeWrap(){
    $('.jscroll-added article').unwrap();
}
