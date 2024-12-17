$(document).ready(function() {
    // Drawer.jsの初期化
    $('.drawer').drawer();
  
    // ドロワーメニューのリンククリック時にドロワーを閉じる
    $('.drawer-menu a').on('click', function() {
      $('.drawer').drawer('close');
    });
});


$(document).ready(function() {
    // midashiの位置を取得
    var blockPosition = $('.index #midashi').offset().top; // #midashi の位置を取得
    var isVisible = false; // 現在の表示状態を保持するフラグ

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop(); // 現在のスクロール位置を取得
        if (scrollTop > blockPosition && !isVisible) {
            $('#navigation').addClass('visible'); // visibleクラスを付与
            isVisible = true;
        } else if (scrollTop <= blockPosition && isVisible) {
            $('#navigation').removeClass('visible'); // visibleクラスを削除
            setTimeout(() => $('#navigation').css('visibility', 'hidden'), 500); // visibilityをhiddenに
            isVisible = false;
        }
    });
});

  
$(document).ready(function () {
    $("[data-toggle='click']").on("click", function () {
        const wrap = $(this).closest(".box, .click__wrap"); // 親のwrapを取得
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


$(document).ready(function() {
    // 初期表示設定
    $("#male").hide();
    $("#female").show();

    // ボタンクリック時のイベント
    $(".btn__area button").on("click", function() {
        const targetId = $(this).data("toggle"); // data-toggle の値を取得
        $(".oaite__loop").hide(); // すべて非表示
        $("#" + targetId).fadeIn(); // 対象をフェードイン
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


const newfaceSwiper = new Swiper('.newface', {
    slidesPerView: "auto", // スライドの幅を自動調整
    spaceBetween: 16, // スライド間の余白
    loop: true, // ループ有効化
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000, // 自動スクロールの速度
    breakpoints: {
        768: {
            spaceBetween: 10, // 768px以下のとき、スライド間の余白を縮小
        },
    },
});

const currentPage = window.location.pathname; // 現在のページパスを取得
document.querySelectorAll('.nav__wrap .menu ul li a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('current'); // CSSクラスを付与
    }
});
