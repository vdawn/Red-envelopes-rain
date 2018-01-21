// 福袋雨
$(function () {
  function abc() {
    $(".blessing1").animate({ top: "300px" }, 2000, function () {
      flag_1 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing2").animate({ top: "300px" }, 3500, function () {
      flag_2 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing3").animate({ top: "300px" }, 5000, function () {
      flag_3 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing4").animate({ top: "300px" }, 3100, function () {
      flag_4 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing5").animate({ top: "300px" }, 2700, function () {
      flag_5 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing6").animate({ top: "300px" }, 2500, function () {
      flag_6 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing7").animate({ top: "300px" }, 4500, function () {
      flag_7 = true;
      $(this).css('top', '-70px');
    });
  }
  abc();
  var time_1;
  var time_2;
  var time_3;
  var time_4;
  var time_5;
  var time_6;
  var time_7;
  var flag_1 = false;
  var flag_2 = false;
  var flag_3 = false;
  var flag_4 = false;
  var flag_5 = false;
  var flag_6 = false;
  var flag_7 = false;

// 定时器
  clearInterval(time_1);
  time_1 = setInterval(function () {
    if (flag_1) {
      flag_1 = false;
      $(".blessing1").animate({ top: "300px" }, 4300, function () {
        flag_1 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 1000)
  clearInterval(time_2);
  time_2 = setInterval(function () {
    if (flag_2) {
      flag_2 = false;
      $(".blessing2").animate({ top: "300px" }, 1900, function () {
        flag_2 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 1000)
  clearInterval(time_3);
  time_3 = setInterval(function () {
    if (flag_3) {
      flag_3 = false;
      $(".blessing3").animate({ top: "300px" }, 3800, function () {
        flag_3 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 1000)
  clearInterval(time_4);
  time_4 = setInterval(function () {
    if (flag_4) {
      flag_4 = false;
      $(".blessing4").animate({ top: "300px" }, 4300, function () {
        flag_4 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 1000)
  clearInterval(time_5);
  time_5 = setInterval(function () {
    if (flag_5) {
      flag_5 = false;
      $(".blessing5").animate({ top: "300px" }, 2200, function () {
        flag_5 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 1000)
  clearInterval(time_6);
  time_6 = setInterval(function () {

    if (flag_6) {
      flag_6 = false;
      $(".blessing6").animate({ top: "300px" }, 2000, function () {
        flag_6 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 1000)
  clearInterval(time_7);
  time_7 = setInterval(function () {
    if (flag_7) {
      flag_7 = false;
      $(".blessing7").animate({ top: "300px" }, 3000, function () {
        flag_7 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 1000)
});

// 点击任意一个福袋打开
$(function(){
   $(".blessing").click(function(){
    $(this).css({  
      "transform": "rotateY(180deg)",  
      "-webkit-transform" : "rotateY(180deg)" ,
       
    }); 
   })
})
