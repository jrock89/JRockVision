jQuery(document).ready(function ($) {


  // var lastURL = document.referrer;
  // if(lastURL === "http://localhost/JRockVision/sports.php")
  // {
  //   $('html, body').stop().animate({
  //     scrollTop: $("#slide4").offset().top
  //   }, 100);
  // }


  $(".behind_menu").click(function() {
    $('.menu_box').toggleClass('menu_box_slide');
    $('.body_wrapper').toggleClass('body_move');
      $('html, body').animate({
          scrollTop: $(".behind_the").offset().top
      }, 900);
  });
  $(".explore").click(function() {

      $('html, body').animate({
          scrollTop: $(".behind_the").offset().top
      }, 900);
  });

  $(".photo_menu").click(function() {
    $('.menu_box').toggleClass('menu_box_slide');
    $('.body_wrapper').toggleClass('body_move');
      $('html, body').animate({
          scrollTop: $("#slide4").offset().top
      }, 900);
  });

  $(".video_menu").click(function() {
    $('.menu_box').toggleClass('menu_box_slide');
    $('.body_wrapper').toggleClass('body_move');
      $('html, body').animate({
          scrollTop: $("#slide5_5").offset().top
      }, 900);
  });

  $(".contact_menu").click(function() {
    $('.menu_box').toggleClass('menu_box_slide');
    $('.body_wrapper').toggleClass('body_move');
      $('html, body').animate({
          scrollTop: $("#slide6").offset().top
      }, 900);
  });





  $('.gal_1 .gal_img').html('<img src="images/jrv/ring.png" alt="" />');
  $('.gal_2 .gal_img').html('<img src="images/jrv/family.png" alt="" />');
  $('.gal_3 .gal_img').html('<img src="images/jrv/senor.png" alt="" />');
  $('.gal_4 .gal_img').html('<img src="images/jrv/children.png" alt="" />');
  $('.gal_5 .gal_img').html('<img src="images/jrv/couples.png" alt="" />');
  $('.gal_6 .gal_img').html('<img src="images/jrv/seasonal.png" alt="" />');
  $('.gal_7 .gal_img').html('<img src="images/jrv/sports.png" alt="" />');
  $('.gal_8 .gal_img').html('<img src="images/jrv/landscapes.png" alt="" />');
  $('.gal_9 .gal_img').html('<img src="images/jrv/marketing.png" alt="" />');
  $('.gal_10 .gal_img').html('<img src="images/jrv/caught.jpg" alt="" />');
  $('.gal_11 .gal_img').html('<img src="images/c.jpg" alt="" />');
  $('.gal_12 .gal_img').html('<img src="images/c.jpg" alt="" />');


  $(window).load(function(){
    $('.loader').fadeOut('slow');
    // $('.inner_jamie').html('<img src="images/jrv/jamie.png" alt="" />');
    // $('.inner_laura').html('<img src="images/jrv/laura.png" alt="" />');


    // $('body').toggleClass('body_img_move');




  });


  $('.btn_1').show();


$('.behind_the').waypoint(function() {
    $('.explore').toggle();
},{offset:'99%'});

$('.behind_the').waypoint(function() {
  $('.menu_btn').toggleClass('dark_menu');
});

$('.photo_gal_box_wrap').waypoint(function() {
  $('.menu_btn').toggleClass('dark_menu');
});

$('.toggle_menu_color').waypoint(function() {
  $('.menu_btn').toggleClass('dark_menu');
});

$('.video_gal_box_wrap').waypoint(function() {
  $('.menu_btn').toggleClass('dark_menu');
});


  $('#slide2').waypoint(function() {
    $('.btn_1').toggle();
    $('.btn_2').toggle();
  });
  $('#slide2_5').waypoint(function() {
    $('.btn_2').toggle();
    $('.btn_3').toggle();






    //
    // $('.photo_gal_box_wrap').slideToggle();
    // $('.loading_photo_gal').hide();


  });
  $('#slide4').waypoint(function() {
    $('.btn_3').toggle();
    $('.btn_4').toggle();


    $('.gal_vid_1 .gal_img').html('<img src="images/jrv/music_vid.png" alt="" />');
    $('.gal_vid_2 .gal_img').html('<img src="images/jrv/mark_vid.png" alt="" />');
    $('.gal_vid_3 .gal_img').html('<img src="images/jrv/ring.png" alt="" />');
    $('.gal_vid_4 .gal_img').html('<img src="images/jrv/sports_vid.png" alt="" />');

  });
  $('#slide5_5').waypoint(function() {
    $('.btn_4').toggle();
    $('.btn_5').toggle();
  });
  $('#slide6').waypoint(function() {
    $('.btn_5').toggle();
    $('.btn_6').toggle();
  });
  // $('#slide6').waypoint(function() {
  //   $('.btn_6').toggle();
  //   $('.btn_7').toggle();
  // });


      $('.home_logo').on('click', function(){


        if($('.whos_house').text() === "gallery")
        {
          $('body').fadeOut();
          setTimeout(function(){
            window.location.href = "index.php";
          },700);
        }
        else{
          $('body').css('background', '#fff').fadeOut();

          setTimeout(function(){
            window.location.href = "index.php";
          },700);
        }



      });





      //wedding gallery
    $('.gal_1').on('mouseover', function(){
      $('.gal_info_1').fadeIn('fast');
    });
    $('.gal_1').on('mouseleave', function(){
      $('.gal_info_1').fadeOut('fast');
    });
    // $('.gal_1').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "wedding.php";
    //   },700);
    // });

    //family gallery
    $('.gal_2').on('mouseover', function(){
      $('.gal_info_2').fadeIn('fast');
    });
    $('.gal_2').on('mouseleave', function(){
      $('.gal_info_2').fadeOut('fast');
    });
    // $('.gal_2').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "familey.php";
    //   },700);
    // });

    //senor
    $('.gal_3').on('mouseover', function(){
      $('.gal_info_3').fadeIn('fast');
    });
    $('.gal_3').on('mouseleave', function(){
      $('.gal_info_3').fadeOut('fast');
    });
    // $('.gal_3').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "senior.php";
    //   },700);
    // });

    //baby
    $('.gal_4').on('mouseover', function(){
      $('.gal_info_4').fadeIn('fast');
    });
    $('.gal_4').on('mouseleave', function(){
      $('.gal_info_4').fadeOut('fast');
    });
    // $('.gal_4').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "children.php";
    //   },700);
    // });

    //couples
    $('.gal_5').on('mouseover', function(){
      $('.gal_info_5').fadeIn('fast');
    });
    $('.gal_5').on('mouseleave', function(){
      $('.gal_info_5').fadeOut('fast');
    });
    // $('.gal_5').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "couples.php";
    //   },700);
    // });

    //seasonal
    $('.gal_6').on('mouseover', function(){
      $('.gal_info_6').fadeIn('fast');
    });
    $('.gal_6').on('mouseleave', function(){
      $('.gal_info_6').fadeOut('fast');
    });
    // $('.gal_6').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "seasonal.php";
    //   },700);
    // });

    //sports
    $('.gal_7').on('mouseover', function(){
      $('.gal_info_7').fadeIn('fast');
    });
    $('.gal_7').on('mouseleave', function(){
      $('.gal_info_7').fadeOut('fast');
    });
    // $('.gal_7').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "sports.php";
    //   },700);
    // });

    //landscapes
    $('.gal_8').on('mouseover', function(){
      $('.gal_info_8').fadeIn('fast');
    });
    $('.gal_8').on('mouseleave', function(){
      $('.gal_info_8').fadeOut('fast');
    });
    // $('.gal_8').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "landscapes.php";
    //   },700);
    // });

    //marketing
    $('.gal_9').on('mouseover', function(){
      $('.gal_info_9').fadeIn('fast');
    });
    $('.gal_9').on('mouseleave', function(){
      $('.gal_info_9').fadeOut('fast');
    });
    // $('.gal_9').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "marketing.php";
    //   },700);
    // });

    //caught
    $('.gal_10').on('mouseover', function(){
      $('.gal_info_10').fadeIn('fast');
    });
    $('.gal_10').on('mouseleave', function(){
      $('.gal_info_10').fadeOut('fast');
    });
    // $('.gal_10').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "caught.php";
    //   },700);
    // });


    //video1 gallery
  $('.gal_vid_1').on('mouseover', function(){
    $('.gal_info_vid_1').fadeIn('fast');
  });
  $('.gal_vid_1').on('mouseleave', function(){
    $('.gal_info_vid_1').fadeOut('fast');
  });
  // $('.gal_vid_1').on('click', function(){
  //   $('body').fadeOut();
  //   setTimeout(function(){
  //     window.location.href = "music-video.php";
  //   },700);
  // });


      //video1 gallery
    $('.gal_vid_2').on('mouseover', function(){
      $('.gal_info_vid_2').fadeIn('fast');
    });
    $('.gal_vid_2').on('mouseleave', function(){
      $('.gal_info_vid_2').fadeOut('fast');
    });
    // $('.gal_vid_2').on('click', function(){
    //   $('body').fadeOut();
    //   setTimeout(function(){
    //     window.location.href = "marketing-video.php";
    //   },700);
    // });


        //video3 gallery
      $('.gal_vid_3').on('mouseover', function(){
        $('.gal_info_vid_3').fadeIn('fast');
      });
      $('.gal_vid_3').on('mouseleave', function(){
        $('.gal_info_vid_3').fadeOut('fast');
      });
      // $('.gal_vid_3').on('click', function(){
      //   $('body').fadeOut();
      //   setTimeout(function(){
      //     window.location.href = "wedding-video.php";
      //   },700);
      // });


          //video4 gallery
        $('.gal_vid_4').on('mouseover', function(){
          $('.gal_info_vid_4').fadeIn('fast');
        });
        $('.gal_vid_4').on('mouseleave', function(){
          $('.gal_info_vid_4').fadeOut('fast');
        });
        // $('.gal_vid_4').on('click', function(){
        //   $('body').fadeOut();
        //   setTimeout(function(){
        //     window.location.href = "sports-video.php";
        //   },700);
        // });



    // $('.gal_11').on('mouseover', function(){
    //
    //   $('.gal_info_11').fadeIn('fast');
    // });
    // $('.gal_11').on('mouseleave', function(){
    //   $('.gal_info_11').fadeOut('fast');
    // });
    //
    //
    // $('.gal_12').on('mouseover', function(){
    //
    //   $('.gal_info_12').fadeIn('fast');
    // });
    // $('.gal_12').on('mouseleave', function(){
    //   $('.gal_info_12').fadeOut('fast');
    // });



    $('.menu_btn').on('click', function(){
      $('.body_wrapper').toggleClass('body_move');
      $('.menu_box').toggleClass('menu_box_slide');
    });

    $('#theNav').hide();


    $('#jamie').waypoint(function() {
        // $('.inner_jamie').html('<img src="images/jrv/jamie.jpg" alt="" />');
      setTimeout(function(){

          $('.inner_jamie').toggleClass('shift_inner_jamie');
      }, 200);
 this.destroy()

    },{offset:'99%'});

    $('#laura').waypoint(function() {
      // $('.inner_laura').html('<img src="images/jrv/laura2.png" alt="" />');
      setTimeout(function(){


          $('.inner_laura').toggleClass('shift_inner_laura');
      }, 200);
       this.destroy()
    },{offset:'99%'});

    $('#slide2').waypoint(function() {
        // $('.footbar').toggle(200);
        // $('#theNav').toggle(200);
        // $('#btnTwo').toggleClass('on-page');
        // $('#btnThree').removeClass('on-page');
        // $('#btnFour').removeClass('on-page');
        // $('#theNav').toggleClass('navbar-fixed-bottom');
    });

    $('#slide3').waypoint(function() {
        // $('.footbar').toggle(200);
      //  $('#btnTwo').removeClass('on-page');
      //   $('#btnThree').toggleClass('on-page');
      //   $('#btnFour').removeClass('on-page');
        // $('#theNav').toggleClass('navbar-fixed-bottom');
    });

    $('#slide4').waypoint(function() {
        // $('.footbar').toggle(200);
        // $('#btnTwo').removeClass('on-page');
        // $('#btnFour').toggleClass('on-page');
        // $('#btnThree').removeClass('on-page');
        // $('#theNav').toggleClass('navbar-fixed-bottom');
    });

    // $("#slide1").backstretch("images/b.jpg");

    //initialise Stellar.js
    $(window).stellar({
        horizontalScrolling: false,
        verticalOffset: 0,
        horizontalOffset: 0
    });
    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the next navigation link
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    });
    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });


    $('.carousel').carousel({
        pause: "false"
    });


});
