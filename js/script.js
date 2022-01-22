$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Chào mừng bạn đến với bất ngờ nhỏ của mình',
        text: 'Nhấn Ok để xem đó là gì nào',
        imageUrl: 'img/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#242424',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button pÃ³ition
function moveButton() {
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
});

$('#yes').click(function() {
    $('.content').hide(200);
    Swal.fire({
        width: 900,
        confirmButtonText: 'Okiiiii lun <3',
        background: '#242424',
        title: 'Tớ biết mà ^^ Tớ cũng thích cậu từ lâu lắm rồi á 😍',
        text: "Giờ cậu có thể thoát ra và nhắn tin với tớ rằng cậu thích tớ thế nào 💗💌",
        confirmButtonColor: '#242424',
        onClose: () => {
            $('.content').show(200);
            }
    })
})
