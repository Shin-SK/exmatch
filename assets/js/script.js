$(document).ready(function() {
    // Drawer.jsの初期化
    $('.drawer').drawer();
  
    // ドロワーメニューのリンククリック時にドロワーを閉じる
    $('.drawer-menu a').on('click', function() {
      $('.drawer').drawer('close');
    });
});
  
$(document).ready(function () {
    $("[data-toggle='click']").on("click", function () {
        const wrap = $(this).closest(".box"); // 親のwrapを取得
        const target = wrap.find("#contents"); // ターゲットの#contentsを取得

        // 表示・非表示を切り替え
        if (target.is(":hidden")) {
            target.slideDown(); // ふわっと表示
            $(this).addClass("active"); // 回転クラスを追加
        } else {
            target.slideUp(); // ふわっと非表示
            $(this).removeClass("active"); // 回転クラスを削除
        }
    });
});

// 1つ目のSwiper
const bannerSwiper = new Swiper('.banner', {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
      delay: 0,
      disableOnInteraction: false,
  },
  speed: 3000,
  breakpoints: {
    768: {
        slidesPerView: 3, // 768px以下では1枚表示
        centeredSlides: false, // 中央配置を無効化
    },
},
});

// 2つ目のSwiper
const oaiteLoopSwiper = new Swiper('.oaite__loop', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  loopAdditionalSlides: 3, // 必要に応じて追加スライドを増やす
  autoplay: {
      delay: 0,
      disableOnInteraction: false,
  },
  speed: 3000,
  freeMode: true,
  freeModeMomentum: false,
});