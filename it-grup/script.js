$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordeon .acItem1').on('click', f_acc);
});

function f_acc(){
    

    let parent = document.querySelector('.acItem1');
    let parentArr = Array.from(document.querySelectorAll('.acItem1'));
    let childrenArrPlus = Array.from(document.querySelectorAll('.plus1'));
    // console.log(childredArrPlus);
    let childrenArrMinus = Array.from(document.querySelectorAll('.minus1'));
    // console.log(childredArrMinus);

    // let cklickedChild = this;
    childrenArrPlus.map((elem) => {
        if(elem.classList.contains('hiddentag')) {

            elem.classList.remove('hiddentag');
        }
    });

    childrenArrMinus.map((elem) => {
        // if(elem.classList.contains('hiddentag')) {
            elem.classList.add('hiddentag');

        // }
    });
    // cklickedChild.classList.toggle('hiddentag');


    // $(".acItem1").children('.plus1.hiddentag').toggle('hiddentag');
	this.querySelector('.plus1').classList.toggle('hiddentag');
    this.querySelector('.minus1').classList.toggle('hiddentag');

    // let that = this; 
    // $(".acItem1").removeClass('activea');
    // $(that).toggle('activea');
//скрываем все кроме того, что должны открыть
  $('#accordeon .acText').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);
}



$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordeon .arrowWrap').on('click', acc);
});

function acc(){
	$(this).children('.textAc').children('.arrowRight').toggle('hiddentag');
	$(this).children('.textAc').children('.arrowDown').toggle('hiddentag');
//скрываем все кроме того, что должны открыть
  $('#accordeon .mainTextAc').not($(this).next()).slideUp(400);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(400);
}


$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordeon .arrowWrap1').on('click', acc);
});

function acc(){
	$(this).children('.textAc').children('.arrowRight').toggle('hiddentag');
	$(this).children('.textAc').children('.arrowDown').toggle('hiddentag');
//скрываем все кроме того, что должны открыть
  $('#accordeon .overWrap').not($(this).next()).slideUp(700);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(700);  
}

document.addEventListener('click', function(e) {
    var _this = e.target;
    if((_this.matches('.box1')) || (_this.matches('.boxIm1')) || (_this.matches('.box1 .boxText'))){
        document.querySelector('.contentt').style.display='flex';     
        document.querySelector('.content1').style.display='none';
    } 
});

document.addEventListener('click', function(e) {
    var _this = e.target;
    if((_this.matches('.box2')) || (_this.matches('.boxIm2')) || (_this.matches('.box2 .boxText'))){
        document.querySelector('.content1').style.display='flex';
        document.querySelector('.contentt').style.display='none';
    } else {        
    } return;
});

document.addEventListener('click', function(e) {
    var _this = e.target;
    if((_this.matches('.comfBox1')) || (_this.matches('.comfIm1')) || (_this.matches('.comfBox1 .comfText'))){
        document.querySelector('.comfCont1').style.display='flex';
        document.querySelector('.comfCont2').style.display='none';
        document.querySelector('.comfCont3').style.display='none';
    } else {        
    } return;
});
document.addEventListener('click', function(e) {
    var _this = e.target;
    if((_this.matches('.comfBox2')) || (_this.matches('.comfIm2')) || (_this.matches('.comfBox2 .comfText'))){
        document.querySelector('.comfCont2').style.display='flex';
        document.querySelector('.comfCont1').style.display='none';
        document.querySelector('.comfCont3').style.display='none';
    } else {        
    } return;
});
document.addEventListener('click', function(e) {
    var _this = e.target;
    if((_this.matches('.comfBox3')) || (_this.matches('.comfIm3')) || (_this.matches('.comfBox3 .comfText'))){
        document.querySelector('.comfCont3').style.display='flex';
        document.querySelector('.comfCont1').style.display='none';
        document.querySelector('.comfCont2').style.display='none';
    } else {        
    } return;
});

//povorot
// 1
$( function() {
  $('.card').mouseenter( function( event ) {
    $( event.currentTarget ).toggleClass('flipped');
    $('.backTitel1').css("display","flex");
    $('.backText1').css("display","flex");
  });  
});
// 4
$( function() {
  $('.card4').mouseenter( function( event ) {
    $( event.currentTarget ).toggleClass('flipped');
    $('.backTitel4').css("display","flex");
    $('.backText4').css("display","flex");
  });  
});
// 2
$( function() {
  $('.card2').mouseenter( function( event ) {
    $( event.currentTarget ).toggleClass('flipped');
    $('.backTitel2').css("display","flex");
    $('.backText2').css("display","flex");
  });  
});
// 3
$( function() {
  $('.card3').mouseenter( function( event ) {
    $( event.currentTarget ).toggleClass('flipped');
    $('.backTitel3').css("display","flex");
    $('.backText3').css("display","flex");
  });  
});
// 5
$( function() {
  $('.card5').mouseenter( function( event ) {
    $( event.currentTarget ).toggleClass('flipped');
    $('.backTitel5').css("display","flex");
    $('.backText5').css("display","flex");
  });  
});
// 6
$( function() {
  $('.card6').mouseenter( function( event ) {
    $( event.currentTarget ).toggleClass('flipped');
    $('.backTitel6').css("display","flex");
    $('.backText6').css("display","flex");
  });  
});

$( function() {
    $("#card1").flip({
      axis: 'y',
      trigger: 'hover'
    });
});
$( function() {
    $("#card2").flip({
      axis: 'y',
      trigger: 'hover'
    });
});
$( function() {
    $("#card3").flip({
      axis: 'y',
      trigger: 'hover'
    });
});
$( function() {
    $("#card4").flip({
      axis: 'y',
      trigger: 'hover'
    });
});
$( function() {
    $("#card5").flip({
      axis: 'y',
      trigger: 'hover'
    });
});
$( function() {
    $("#card6").flip({
      axis: 'y',
      trigger: 'hover'
    });
});
//end povorot
// forma verx



// $(document).ready(function() {

//     $("#top").submit(function() {
//         $.ajax({
//             type: "POST",
//             url: "telegram.php",
//             data: $(this).serialize()
//         }).done(function() {
//             $(this).find("#name").val("");
//              $(this).find("#phone1").val("");
//             alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
//             $("#top").trigger("reset");
//         });
//         return false;
//     });
// });

//popap
$(document).ready(function() {

    $("#top").submit(function() {
        $.ajax({
            type: "POST",
            url: "telegram.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("#name").val("");
            $(this).find("#phone1").val("");
             $("#top").trigger("reset");
          
        
                $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                    function(){ // пoсле выпoлнения предъидущей aнимaции
                        $('#modal_form') 
                            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                            .animate({opacity: 1, top: '30%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                });
            
            /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
            $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
                $('#modal_form')
                    .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                        function(){ // пoсле aнимaции
                            $(this).css('display', 'none'); // делaем ему display: none;
                            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                        }
                    );
            });
           
        });
        return false;
    });
});


// popap what
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('#whatIsCloud').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay1').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form1') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '5%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close1, #overlay1').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form1')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay1').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});
//endpopap

// popap count
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('#but').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay2').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form2') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '5%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close2, #overlay2').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form2')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay2').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});
//endpopap

document.addEventListener('click', function(e) {
    var _this = e.target;
    if((_this.matches('.tabs1'))){
        document.querySelector('.co1').style.display='flex';
        document.querySelector('.co2').style.display='none';
    } else {        
    } return;
});
document.addEventListener('click', function(e) {
    var _this = e.target;
    if((_this.matches('.tabs2'))){
        document.querySelector('.co2').style.display='flex';
        document.querySelector('.co1').style.display='none';
    } else {        
    } return;
});

// fomu
 $(document).ready(function() {

    $("#top1").submit(function() {
        $.ajax({
            type: "POST",
            url: "telegram1.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("#name").val("");
             $(this).find("#phone2").val("");

            $("#top1").trigger("reset");

            $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function(){ // пoсле выпoлнения предъидущей aнимaции
                    $('#modal_form')
                        .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                        .animate({opacity: 1, top: '30%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                });

            /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
            $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
                $('#modal_form')
                    .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                        function(){ // пoсле aнимaции
                            $(this).css('display', 'none'); // делaем ему display: none;
                            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                        }
                    );
            });
        });
        return false;
    });
});

  $(document).ready(function() {

    $("#top2").submit(function() {
        $.ajax({
            type: "POST",
            url: "telegram2.php",
            data: $(this).serialize()
        }).done(function() {
             $(this).find("#phone3").val("");
            $("#top2").trigger("reset");
            $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function(){ // пoсле выпoлнения предъидущей aнимaции
                    $('#modal_form')
                        .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                        .animate({opacity: 1, top: '30%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                });

            /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
            $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
                $('#modal_form')
                    .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                        function(){ // пoсле aнимaции
                            $(this).css('display', 'none'); // делaем ему display: none;
                            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                        }
                    );
            });
        });
        return false;
    });
});

   $(document).ready(function() {

    $("#top3").submit(function() {
        $.ajax({
            type: "POST",
            url: "telegram3.php",
            data: $(this).serialize()
        }).done(function() {
             $(this).find("#phone4").val("");

            $("#top3").trigger("reset");

            $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function(){ // пoсле выпoлнения предъидущей aнимaции
                    $('#modal_form')
                        .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                        .animate({opacity: 1, top: '30%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                });

            /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
            $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
                $('#modal_form')
                    .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                        function(){ // пoсле aнимaции
                            $(this).css('display', 'none'); // делaем ему display: none;
                            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                        }
                    );
            });
        });
        return false;
    });
});

    $(document).ready(function() {

    $("#popForm").submit(function() {
        $.ajax({
            type: "POST",
            url: "telegram4.php",
            data: $(this).serialize()
        }).done(function() {
             $(this).find("#phone5").val("");

            $("#popForm").trigger("reset");

            $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function(){ // пoсле выпoлнения предъидущей aнимaции
                    $('#modal_form')
                        .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                        .animate({opacity: 1, top: '30%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                });

            /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
            $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
                $('#modal_form')
                    .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                        function(){ // пoсле aнимaции
                            $(this).css('display', 'none'); // делaем ему display: none;
                            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                        }
                    );
            });
        });
        return false;
    });




        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('#scroller').fadeIn();
            } else {
                $('#scroller').fadeOut();
            }
        });
        $('#scroller').click(function () {
            $('.container,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });

});


//poputka animacii numberov
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5440) {
            $('#forHover').fadeIn();
        }
    });
});
//end


// scrip for year
var date = new Date();
var year = date.getFullYear();
var a = document.getElementById('corYear');
a.innerHTML=" "+year+" ";

// window.onscroll = function() {
//     posLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
//     posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
//      console.log('x=' + posLeft + '\ny=' + posTop);
// }




///asdasd

var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 8000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
//asdsadasd
$(document).ready(function(){
    $('.arrow').on('mouseover', function(e){
        $('.vsplivashka').animate({
            top:'70px',
            opacity:'1'
        }, 300);

    }) ;
    $('.vsplivashka').on('mouseleave', function(e){
        $('.vsplivashka').animate({
            top:'80px',
            opacity:'0'
        }, 300);
    });
    $('.a1').on('mouseenter', function(e){
        $('.im1').animate({
            marginRight:'10px',
            marginLeft:'0px',
            opacity:'1'
        }, 200);
        $('.a1').animate({
            color:'#ffb901'
        }, 200)
    });
    $('.a1').on('mouseleave', function(e){
        $('.im1').animate({
            marginRight:'25px',
            marginLeft:'-30px',
            opacity:'1'
        }, 200);
    })
    $('.a2').on('mouseenter', function(e){
        $('.im2').animate({
            marginRight:'10px',
            marginLeft:'0px',
            opacity:'1'
        }, 200);
    });
    $('.a2').on('mouseleave', function(e){
        $('.im2').animate({
            marginRight:'25px',
            marginLeft:'-30px',
            opacity:'1'
        }, 200);
    })
    $('.a3').on('mouseenter', function(e){
        $('.im3').animate({
            marginRight:'10px',
            marginLeft:'0px',
            opacity:'1'
        }, 200);
    });
    $('.a3').on('mouseleave', function(e){
        $('.im3').animate({
            marginRight:'25px',
            marginLeft:'-30px',
            opacity:'1'
        }, 200);
    })
    $('.a4').on('mouseenter', function(e){
        $('.im4').animate({
            marginRight:'10px',
            marginLeft:'0px',
            opacity:'1'
        }, 200);
    });
    $('.a4').on('mouseleave', function(e){
        $('.im4').animate({
            marginRight:'25px',
            marginLeft:'-30px',
            opacity:'1'
        }, 200);
    })
})
/***************Мой код*****************/
$('.box1').css({
    background:'#000',
    color:'#fff'
})
$('.psevdo1').css({
    display:'block'
})
$('.box1').on('click', function(e){
    $('.box1').css({
        background:'#000',
        color:'#fff'
    })
    $('.psevdo1').css({
        display:'block'
    })
    $('.psevdo2').css({
        display:'none'
    });
    $('.box2').css({
        background:'#fff',
        color:'#ffb901'
    })

});
$('.box2').on('click', function(e){
    $('.box2').css({
        background:'#000',
        color:'#fff'
    });
    $('.psevdo2').css({
        display:'block'
    });
    $('.psevdo1').css({
        display:'none'
    });
    $('.box1').css({
        background:'#fff',
        color:'#ffb901'
    });
});
/***************Мой код2*****************/
$('.comfBox1').css({
    background:'#000',
    color:'#fff'
})
$('.psevdo3').css({
    display:'block'
})
$('.comfBox1').on('click', function(e){
    $('.comfBox1').css({
        background:'#000',
        color:'#fff'
    })
    $('.psevdo3').css({
        display:'block'
    })
    $('.psevdo4').css({
        display:'none'
    });
    $('.comfBox2').css({
        background:'#fff',
        color:'#ffb901'
    });

    $('.psevdo5').css({
        display:'none'
    });
    $('.comfBox3').css({
        background:'#fff',
        color:'#ffb901'
    });
});
$('.comfBox2').on('click', function(e){
    $('.comfBox2').css({
        background:'#000',
        color:'#fff'
    });
    $('.psevdo4').css({
        display:'block'
    });
    $('.psevdo3').css({
        display:'none'
    });
    $('.comfBox1').css({
        background:'#fff',
        color:'#ffb901'
    });
    $('.psevdo5').css({
        display:'none'
    });
    $('.comfBox3').css({
        background:'#fff',
        color:'#ffb901'
    });
});
$('.comfBox3').on('click', function(e){
    $('.comfBox3').css({
        background:'#000',
        color:'#fff'
    });
    $('.psevdo5').css({
        display:'block'
    });
    $('.psevdo3').css({
        display:'none'
    });
    $('.comfBox1').css({
        background:'#fff',
        color:'#ffb901'
    });
    $('.psevdo4').css({
        display:'none'
    });
    $('.comfBox2').css({
        background:'#fff',
        color:'#ffb901'
    });
});


//tabs
$('.tabs2').css({
    background:'#f6f6f6',
    color:'#ffb901'
})

$('.tabs2').on('click', function(e){
    $('.tabs2').css({
        background:'#fff',
        color:'#000'
    });

    $('.tabs1').css({
        background:'#f6f6f6',
        color:'#ffb901'
    });
});
$('.tabs1').on('click', function(e){
    $('.tabs1').css({
        background:'#fff',
        color:'#000'
    });

    $('.tabs2').css({
        background:'#f6f6f6',
        color:'#ffb901'
    });
});

//popap tablica
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('#but-buy').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay2').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form2')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '5%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close2, #overlay2').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form2')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay2').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});
//end
// video
$(function(){
  var $refreshButton = $('#refresh');
  var $results = $('#css_result');
  
  function refresh(){
    var css = $('style.cp-pen-styles').text();
    $results.html(css);
  }

  refresh();
  $refreshButton.click(refresh);
  
  // Select all the contents when clicked
  $results.click(function(){
    $(this).select();
  });
});
/* Проигрывание видео по нажатию на него*/
const video = document.querySelector('video');
video.onclick = () => video.paused ? video.play() : video.pause();

/* кнопка проигрывания*/

$('#play_button').click(function(){
$('video')[0].play();
})
// end video