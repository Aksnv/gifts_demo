//	Scroll to top

jQuery('.back-to-top').click(function () {
  jQuery("html, body").animate({
	  scrollTop: 0
  }, 600);
  return false;
});	  
	  

$(document).click(function (e){ // событие клика по веб-документу
	var div = $("#menu-click");
	var div2 = $("#menu-click-list");
	var inp1 = $("input.btn-search-click");
	var inp2 = $("input.btn_close-click");
	var form1 = $("div.search-click-slide-form");	
	if (!div.is(e.target) && div.has(e.target).length === 0 && div.prop("checked") && !div2.is(e.target) && div2.has(e.target).length === 0)	{ 
		    div.removeAttr("checked");
		}
	if (!form1.is(e.target) && form1.has(e.target).length === 0 && inp1.prop("checked") && !inp2.prop("checked") && !inp1.is(e.target) && inp1.has(e.target).length === 0)	{ 
		    inp1.removeAttr("checked");
		}

	if (inp1.prop("checked") && !inp2.prop("checked") && inp2.is(e.target) && inp2.has(e.target).length === 0)	{ 
		    inp1.removeAttr("checked");
		}		
		
});

// изменение количества товаров в корзине
/*$(window).load(function (){
  $('a.plus-qty').click(function() {
        var $qty = $(this).next("input.cart-item__qty-num").val();
        var $qty_num = parseFloat($qty);
        $qty_num = $qty_num + 1;
        if($qty_num >= 1){ $(this).next("input.cart-item__qty-num").val($qty_num.toString()); }
    });
    
  $('a.minus-qty').click(function() {
        var $qty = $(this).prev("input.cart-item__qty-num").val();
        var $qty_num = parseFloat($qty);
        $qty_num = $qty_num - 1;        
        if($qty_num >= 1){ $(this).prev("input.cart-item__qty-num").val($qty_num.toString()); }
    });    
    
});*/

// изменение количества сертификатов
/*$(window).load(function (){
	$('.certificate-gifts a.plus-qty').click(function() {
        var $qty = $(this).prev("input.cart-item__qty-num").val();
        var $qty_num = parseFloat($qty);
        $qty_num = $qty_num + 1;
        if($qty_num >= 1){ $(this).prev("input.cart-item__qty-num").val($qty_num.toString()); }
    });
    
	$('.certificate-gifts a.minus-qty').click(function() {
        var $qty = $(this).next("input.cart-item__qty-num").val();
        var $qty_num = parseFloat($qty);
        $qty_num = $qty_num - 1;        
        if($qty_num >= 1){ $(this).next("input.cart-item__qty-num").val($qty_num.toString()); }
    });    
		
});*/


//Slider
/*$(window).load(function (){
	$("#slider-gifts__ui").slider({
	  range: true,
	  min: 0,
	  max: 10400,
	  values: [ 140, 10400 ],
	  slide: function( event, ui ) {
		$( "#amount1" ).val(ui.values[ 0 ]);
		$( "#amount2" ).val(ui.values[ 1 ]);		
	  }
	});
	$( "#amount1" ).val($( "#slider-gifts__ui" ).slider( "values", 0 ));
	$( "#amount2" ).val($( "#slider-gifts__ui" ).slider( "values", 1 ));
		
});*/


//Инструкция для плательщика
$(".pmt-message__text").click(function() {
  $(".pmt-message__description").toggleClass("pmt-message__description--open");
  $(".pmt-message__text").toggleClass("pmt-message__text--open");
});


// Add review form

$(".add-review-button").click(function(e) {
  e.preventDefault();
  $(".add-review-form").toggleClass("add-review-form--open");
  $(this).hide();
});

$(".add-review-form__reset").click(function() {
  $(".add-review-form").toggleClass("add-review-form--open");
  $(".add-review-button").show();
});


// Advanced search

$(".advanced-search__button").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass("advanced-search__button--close")) {
    $(this).addClass("advanced-search__button--open");
    $(this).removeClass("advanced-search__button--close");
    $(".advanced-search__form").slideDown();
    $(".catalog-search-res").addClass("catalog-search-res--open");
    $(".advanced-search__form select").css("display", "inline-block");
    $(".advanced-search__form select + div").css("display", "none");
    $(".advanced-search__form input + label").css("display", "none");
  } else {
    $(this).addClass("advanced-search__button--close");
    $(this).removeClass("advanced-search__button--open");
    $(".advanced-search__form").slideUp();
    $(".catalog-search-res").removeClass("catalog-search-res--open");
  }
});

function hideLabel() {
    $(".advanced-search__form input + label").hide();
  };

$(".advanced-search__form input").keyup(function() {
  setTimeout(hideLabel, 10);
});

$(window).resize(function() {
  if ($("body").css("width") <= "1239px") {
    $(".catalog-search-res").removeClass("catalog-search-res--open");
  } else if ($(".advanced-search__button").hasClass("advanced-search__button--open")) {
    $(".catalog-search-res").addClass("catalog-search-res--open");
  }
});

// Advanced search slider range (jQuery UI)

$( function() {
    $( ".advanced-search__price-range" ).slider({
      range: true,
      min: 100,
      max: 9999,
      values: [ 100, 5000 ],
      slide: function( event, ui ) {
        $( "#advanced-search__min-price" ).val( ui.values[ 0 ] );
        $( "#advanced-search__max-price" ).val( ui.values[ 1 ] );
      }
    });
    $( "#advanced-search__min-price" ).val( $( ".advanced-search__price-range" ).slider( "values", 0 ) );
    $( "#advanced-search__max-price" ).val( $( ".advanced-search__price-range" ).slider( "values", 1 ) );
  } );


// Main slider

// Main slider pagination

$(".slider-pagination__item").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".slider-pagination__item").length; i++) {
    $($(".slider-pagination__item")[i]).removeClass("slider-pagination__item--active");
    $(".slider-image--" + (i + 1)).removeClass("slider-image--active");
  }
  $(this).addClass("slider-pagination__item--active");
  var num = $(this).attr("class").substr(49, 1);
  $(".slider-image--" + num).addClass("slider-image--active");
  sliderArrows(num - 1);
});

// Main slider arrows

$(".slider-arrow--back").click(function() {
  $(".slider-arrow--forward").removeAttr("disabled");
  for (var i = 0; i < $(".slider-image").length; i++) {
    if ($($(".slider-image")[i]).hasClass("slider-image--active")) {
      $($(".slider-image")[i]).removeClass("slider-image--active");
      if (i == 2) {
        $(".slider-image--" + i).addClass("slider-image--active");
        break;
      } else if (i == 1) {
        $(".slider-image--" + i).addClass("slider-image--active");
        $(".slider-arrow--back").attr("disabled", "disabled");
        break;
      } else {
        break;
      }
    }
  }
  for (var j = 0; j < $(".slider-pagination__item").length; j++) {
    if ($($(".slider-pagination__item")[j]).hasClass("slider-pagination__item--active")) {
      $($(".slider-pagination__item")[j]).removeClass("slider-pagination__item--active");
      if (j == 2) {
        $(".slider-pagination__item--" + j).addClass("slider-pagination__item--active");
        break;
      } else if (j == 1) {
        $(".slider-pagination__item--" + j).addClass("slider-pagination__item--active");
        break;
      } else {
        break;
      }
    }
  }
});

$(".slider-arrow--forward").click(function() {
  $(".slider-arrow--back").removeAttr("disabled");
  for (var i = 0; i < $(".slider-image").length; i++) {
    if ($($(".slider-image")[i]).hasClass("slider-image--active")) {
      $($(".slider-image")[i]).removeClass("slider-image--active");
      if (i == 0) {
        $(".slider-image--" + (i + 2)).addClass("slider-image--active");
        break;
      } else if (i == 1) {
        $(".slider-image--" + (i + 2)).addClass("slider-image--active");
        $(".slider-arrow--forward").attr("disabled", "disabled");
        break;
      } else {
        break;
      }
    }
  }
  for (var j = 0; j < $(".slider-pagination__item").length; j++) {
    if ($($(".slider-pagination__item")[j]).hasClass("slider-pagination__item--active")) {
      $($(".slider-pagination__item")[j]).removeClass("slider-pagination__item--active");
      if (j == 0) {
        $(".slider-pagination__item--" + (j + 2)).addClass("slider-pagination__item--active");
        break;
      } else if (j == 1) {
        $(".slider-pagination__item--" + (j + 2)).addClass("slider-pagination__item--active");
        break;
      } else {
        break;
      }
    }
  }
});

// Main slider switch

function sliderSwitch() {
  for (var i = 0; i < $(".slider-image").length; i++) {
    if ($($(".slider-image")[i]).hasClass("slider-image--active")) {

      $($(".slider-image")[i]).removeClass("slider-image--active");
      if (i < 2) {
        $($(".slider-image")[i]).next().addClass("slider-image--active");
        $(".slider-pagination__item--" + (i + 2)).addClass("slider-pagination__item--active");
        $(".slider-pagination__item--" + (i + 1)).removeClass("slider-pagination__item--active");
        sliderArrows(i + 1);
        break;
      } else {
        $(".slider-image--" + (i - 1)).addClass("slider-image--active");
        for (var j = 0; j < $(".slider-pagination__item").length; j++) {
          $($(".slider-pagination__item")[j]).removeClass("slider-pagination__item--active");
        }
        $(".slider-pagination__item--" + (i - 1)).addClass("slider-pagination__item--active");
        $(".slider-arrow--back").attr("disabled", "disabled");
        $(".slider-arrow--forward").removeAttr("disabled");
        break;
      }
    }
  }
};

function sliderArrows(i) {
  if (i == 0) {
    $(".slider-arrow--back").attr("disabled", "disabled");
    $(".slider-arrow--forward").removeAttr("disabled");
  } else if (i == 1) {
    $(".slider-arrow--back").removeAttr("disabled");
    $(".slider-arrow--forward").removeAttr("disabled");
  } else {
    $(".slider-arrow--forward").attr("disabled", "disabled");
    $(".slider-arrow--back").removeAttr("disabled");
  }
};

/*setInterval(sliderSwitch, 6000);*/

// END - Main slider