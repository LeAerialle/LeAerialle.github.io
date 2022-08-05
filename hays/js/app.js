$(document).foundation()
$(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });

  function changeImage(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

  //Unit Code
  function changeImage(imgs,unit) {
    if(unit==1) {
      var expandImg = document.getElementById("expandedImg");
    }
    else if (unit==2) {
      var expandImg = document.getElementById("expandedImg2");
    }
    else if (unit==3) {
      var expandImg = document.getElementById("expandedImg3");
    }
    else if (unit==4) {
      var expandImg = document.getElementById("expandedImg4");
    }
    else if (unit==5) {
      var expandImg = document.getElementById("expandedImg5");
    }
    else if (unit==6) {
      var expandImg = document.getElementById("expandedImg6");
    }
    else if (unit==7) {
      var expandImg = document.getElementById("expandedImg7");
    }
    else if (unit==8) {
      var expandImg = document.getElementById("expandedImg8");
    }
    else if (unit==9) {
      var expandImg = document.getElementById("expandedImg9");
    }
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

  //Contact code
  $(document).ready(function(){
    $('#success').hide();
    $("#btn").click(function(){
      $('#success').show();
      $('#btn').disable = true;
    });

  });

  //photos code
  function showFullScreenImg(img) {
    img.requestFullscreen();
  }
  function showBigImg(img) {
    //$('.bigImg').css("background", "url(../photos/unit1/1.jpg) no-repeat center");
    $('.bigImg').css("background", "url(../photos/unit1/1.jpg) no-repeat center");
    $('.bigImg').css("background-size", "contain");
    $('.bigImg').show();
    //css("background-image", "url(/myimage.jpg)")
  }

  
