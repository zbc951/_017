$(function () {
    var swiper = new Swiper('.swiper-banner', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 3500, //延遲
            disableOnInteraction: false, //互動後停止
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 3, //顯示個數
        spaceBetween: 0, //間距
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// 按鈕展開
$(function () {
    $("html body .styleControl .controlBtn").click(function () {
        $(this).siblings().toggleClass("display");
    })
});

// 按鈕換樣式
$(function () {
    $("html body .styleControl .colorBtn li button").click(function () {
        if ($(this).hasClass("pinkStyle")) {
            $(".colorSystem")
                .attr("href", "./css/colorStyle_pink.css");
        }
        else if ($(this).hasClass("blackStyle")) {
            $(".colorSystem")
                .attr("href", "./css/colorStyle_black.css");
        }
        else if ($(this).hasClass("redStyle")) {
            $(".colorSystem")
                .attr("href", "./css/colorStyle_red.css");
        }

    })
})
// li選單選取
$(function () {
    $("html body main .leftArea .infoSelect li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})
// li選單選取 遊戲
$(function () {
    $("html body main .rightArea .mainWrap .gameMenu li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})
// to top
$(function () {
    $("html body main .rightArea aside.toTop").click(function () {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
            scrollTop: 0
        }, 500)
    })
})