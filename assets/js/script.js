$(document).ready(function() {
    // Drawer.jsの初期化
    $('.drawer').drawer();
  
    // ドロワーメニューのリンククリック時にドロワーを閉じる
    $('.drawer-menu a').on('click', function() {
      $('.drawer').drawer('close');
    });
  });
  

  $('.banner__wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
   });