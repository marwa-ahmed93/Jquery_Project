

$(document).ready(function () {


  let aboutOffsetTop = $("#about").offset().top;
   let workOffsetTop =  $("#work").offset().top;
  $(window).scroll(function () {

    let wScroll = $(window).scrollTop();

    if (wScroll > aboutOffsetTop - 50) {


      $("#mainNav").css("backgroundColor", "rgba(0,0,0,0.7)");
      $("#mainNav").addClass("scrolled");
      $("#btnUp").fadeIn(500)

    }
    else {
      $("#mainNav").css("backgroundColor", "transparent");
      $("#mainNav").removeClass("scrolled");
      $("#btnUp").fadeOut(500)

    }

    if (wScroll > aboutOffsetTop -200){
      startCounter()
    }

  })
  $("#btnUp").click(function () {

    $("html , body").animate({ scrollTop: 0 }, 1000);

  })
  // $("a").not("a[href^='http']")
  $("a[href^='#']").click(function () {

    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html , body").animate({ scrollTop: sectionOffset }, 1000);

  });

  $("#sideBarToggle").click(function () {

    let colorBoxWidth = $("#colorBox").innerWidth();

    if ($("#sideBar").css("left") == "0px") {

      $("#sideBar").animate({ left: `-${colorBoxWidth}` }, 1000);

    }

    else {
      $("#sideBar").animate({ left: '0px' }, 1000);
    }

  })
  let colorsBoxs = $(".color-item");
  for (let i = 0; i < $(".color-item").length; i++) {
    let red = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let yellow = Math.round(Math.random() * 255);
    $(".color-item").eq(i).css("backgroundColor", `rgb(${red} , ${blue} , ${green} , ${yellow})`)
  }

  $(".color-item").click(function () {
    let bgColor = $(this).css("backgroundColor")
    $(".change").css("color", bgColor)
  })


  $("#loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto")

  });


  $(".skitter-large").skitter({ auto_play: false });




  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });





  // var typed = new Typed('#element', {
  //   // Waits 1000ms after typing "First"
  //   strings: ['First ^1000 sentence.', 'Second sentence.'],
  // });

  var typed = new Typed('#element', {
    strings: ['<i>web Designer</i> .', 'Full stack web Development.', 'UI/UX Designer.'],
    typeSpeed: 50,
    loop: true,
  });






  // let counter = 0;

  // function counterUp()
  // {
  //   counter ++ ;
  //   $("#projectNumber").html(counter)

  //   // document.getElementById("projectNumber").innerHTML = counter;
  // }
  // setInterval(counterUp , 500)



  //first step
  // function counterUp(){
  //   let counter = 0;
  //   let x = setInterval( () => {
  //     counter ++ ;
  //   $("#projectNumber").html(counter)
  //   if(counter == 100) clearInterval(x); 

  //   }, 100 ) ;



  // }
  // counterUp()


  //second step
  function counterUp(element, limt, speed) {
    let counter = 0;
    let x = setInterval(() => {
      counter++;
      $(element).html(counter)
      if (counter == limt) clearInterval(x);

    }, speed);



  }
  function startCounter() {
    counterUp("#projectNumber", 100, 50);
    counterUp("#clientsNumber", 20, 50);
    counterUp("#codeNumber", 90, 50);
    counterUp("#coffeNumber", 70, 50);
  }




  // fullDate.getHours()-12
  function printDate(){
    
    let fullDate =  new Date();
    if(fullDate.getHours() > 12){
      $("#hourContainer").text(fullDate.getHours()-12);
    }
    else{
      $("#hourContainer").text(fullDate.getHours());
    }
    
    $("#minutesContainer").text(fullDate.getMinutes());
    $("#seconds").text(fullDate.getSeconds());

  }
 setInterval( printDate , 1000)





});