$(function(){

    // ==================================================
    // グローバル変数
    // ==================================================
        var $artImg = $('.js-articleImg'),
            $artHover = $('.js-articleHover'),
            $artImgWrap = $('.js-articleItemImgWrap'),
            $artTitle = $('.js-articleTitle'),
            $artCategory = $('.js-articleCategory'),
            $modal = $('.js-modal'),
            $modalIframe = $('.modal__iframeWrap iframe'),
            $modalTitle = $('.js-modalTitle'),
            $modalCannel = $('.js-modalChannel'),
            $modalCategory = $('.js-modalCategory'),
            $modalHighlight1 = $('.js-modalHighlight--1'),
            $modalHighlight2 = $('.js-modalHighlight--2'),
            $modalHighlight3 = $('.js-modalHighlight--3'),
            $modalClose = $('.js-modalCloseBtn'),
            $modalBack = $('.js-modalBack');

    
    // ==================================================
    // 記事表示
    // ==================================================
    // 記事画像表示
    $artImg.each(function(){
        var $this = $(this),
            artImgSrc = $this.parents('.js-article').attr('data');
            $this.attr('src','http://img.youtube.com/vi/' + artImgSrc + '/maxresdefault.jpg');
    });
    // 記事タイトル表示
    $artTitle.each(function(){
        var $this = $(this),
            artTitleText = $this.parents('.js-article').attr('title');
            $this.text(artTitleText);
    });
    // 記事カテゴリ表示
    $artCategory.each(function(){
        var $this = $(this),
            artCategoryNum = $this.parents('.js-article').attr('category');
            
            switch(artCategoryNum) {
                case "00":
                    $this.addClass('bg--red').text('MAKEUP');
                    break;
                case "01":
                    $this.addClass('bg--orange').text('SKIN & HAIR');
                    break;
                case "02":
                    $this.addClass('bg--green').text('FITNESS');
                    break;
                case "03":
                    $this.addClass('bg--yellow').text('LIFESTYLE');
                    break;
            }
    });
    

    // ==================================================
    // メニューの開閉
    // ==================================================
    // 変数
    var $nav = $('.js-nav'),
        $navBtn = $('.js-navBtn'),
        $navLink = $('.js-navLink'),
        $body = $('body');

    // ナビゲーションボタンを押した時 メニューが開く
    $navBtn.on('click', function(){
        $(this).toggleClass('active');
        $nav.toggleClass('active');
    });
    // リストの中身を押した時 メニューが閉じる
    $navLink.on('click', function(){
        $navBtn.removeClass('active');
        $nav.removeClass('active');
    });
    
    // ==================================================
    // スムーススクロール
    // ==================================================
    var $link = $('.js-link');
    $link.on('click', function(){
        var scrollSpeed = 600,
            href = $(this).attr('href'),
            target = $(href == "#" || href == "" ? 'html' : href),
            position = target.offset().top - 100;

            $('html, body').animate({scrollTop:position}, scrollSpeed, 'swing');
            return false;
    });

    // ==================================================
    // ナビゲーションをトップに固定
    // ==================================================
    var $header = $('.js-header'),
        headerHight = $header.height();

    $(window).on('scroll', function(){
        if($(window).scrollTop() > headerHight) {
            $nav.addClass('topFixed');
        } else {
            $nav.removeClass('topFixed');
        }
    });

    // ==================================================
    // 画像スライダー
    // ==================================================
    // 変数
    var $slideWrap = $('.js-slider'),
        $slideList = $('.js-slideList'),
        $slideItem = $slideList.find('.js-slideItem'),
        slideWidth = $slideItem.width(),
        $slideThumList = $('.js-slideThumList'),
        $slideThumItem = $slideThumList.find('.js-slideThumItem'),
        $prev = $('.js-slidePrev'),
        $next = $('.js-slideNext'),
        delayTime = 5000,
        slideSpeed = 700;

    // 関数 スライダー画像を横に並べて初期値を３番目にする
    function slideResize(){
        // 変数
        var $slide1 = $slideList.find('li:first'),
            $slide2 = $slideList.find('li:nth-child(2'),
            $slide3 = $slideList.find('li:nth-child(3)'),
            $slide4 = $slideList.find('li:nth-child(4)'),
            $slide5 = $slideList.find('li:nth-child(5)');

        $slide1.css({left: 0 + 'px'});
        $slide2.css({left: slideWidth + 'px'});
        $slide3.css({left: slideWidth * 2 + 'px'});
        $slide4.css({left: slideWidth * 3 + 'px'});
        $slide5.css({left: slideWidth * 4 + 'px'});

        $slideList.css({left: -(slideWidth * 2) + 'px'});
    }
    // slideResize実行
    slideResize();
    // slideResize実行 画面をリサイズした時
    $(window).on('resize', function(){
        slideResize();
    });

    // 関数 サムネイルにactiveクラスをつける
    function activeApply(){
        var $activeClass = $slideList.find('li:nth-child(3)'),
            activeClassData = $activeClass.attr('data');

        $slideThumList.find('li[data=' + activeClassData + ']').addClass('active').siblings().removeClass('active');
    }

    // 関数 ひとつ次へ
    function nextOneMove(){
        var left = parseInt($slideList.css('left'));

        $.when(
            $slideList.stop().animate({left: left - slideWidth + 'px'}, slideSpeed)
        ).done(function(){
            $slideList.stop().find('li:first').appendTo($slideList);
            slideResize();
            $slideList.css({left: left + 'px'});

            activeApply();
        });
    }

     // 関数 ふたつ次へ
    function nextTwoMove(){
        var left = parseInt($slideList.css('left'));

        $.when(
            $slideList.stop().animate({left: left - slideWidth*2 + 'px'}, slideSpeed)
        ).done(function(){
            $slideList.stop().find('li:first,li:nth-child(2)').appendTo($slideList);
            slideResize();
            $slideList.css({left: left + 'px'});

            activeApply();

        });
    }

     // 関数 ひとつ前へ
    function prevOneMove(){
        var left = parseInt($slideList.css('left'));

        $.when(
            $slideList.stop().animate({left: left + slideWidth + 'px'}, slideSpeed)
        ).done(function(){
            $slideList.stop().find('li:last').prependTo($slideList);
            slideResize();
            $slideList.css({left: left + 'px'});

            activeApply();

        });
    }

     // 関数 ふたつ前へ
    function prevTwoMove(){
        var left = parseInt($slideList.css('left'));

        $.when(
            $slideList.stop().animate({left: left + slideWidth*2 + 'px'}, slideSpeed)
        ).done(function(){
            $slideList.stop().find('li:last,li:nth-child(4)').prependTo($slideList);
            slideResize();
            $slideList.css({left: left + 'px'});

            activeApply();

        });
    }

     // 関数 自動スライダーを動かす
    function startSlider(){
        slideTimer = setInterval(function(){
            nextOneMove();
        }, delayTime);
    }

    // 自動スライダー実行
    startSlider();

    // 関数 自動スライダーを止める
    function stopSlider(){
        clearInterval(slideTimer);
    }

    // ホバー時にスライダーを止める
    $slideWrap.hover(function(){
        if($slideList.not(':animated')){
        stopSlider();
        }
    }, function(){
        startSlider();
    });

    // windowリサイズ時ににスライダーを止める
    $(window).on('resize', function(){
        stopSlider();
    });


     // 矢印ボタンで切り替え 左
    $prev.on('click', function(){
        prevOneMove();
    });

    // 矢印ボタンで切り替え 右
    $next.on('click', function(){
        nextOneMove();
    });

    // クリックして切り替え
    $slideThumItem.on('click', function(){
        var thumData = $(this).attr('data'),
            indexNum = $slideList.find('li[data=' + thumData + ']').index();

        switch(indexNum) {
        case 0:
            prevTwoMove();
            break;
        case 1:
            prevOneMove();
            break;
        case 3:
            nextOneMove();
            break;
        case 4:
            nextTwoMove();
            break;
        }
    });


    // ==================================================
    // 記事とモーダル
    // ==================================================

    // ホバーアニメーション 画像
    $artImgWrap.hover(function(){
        var imgHeight = $(this).find($artImg).css('height');
        $(this).find($artHover).css({height: imgHeight}).stop().fadeIn(300);
    },function(){
        $artHover.stop().fadeOut(300);
    });

    // ホバーアニメーション タイトル
    $artTitle.hover(function(){
        var imgHeight = $(this).siblings().find($artImg).css('height');
        $(this).siblings().find($artHover).css({height: imgHeight}).stop().fadeIn(300);
    },function(){
        $artHover.stop().fadeOut(300);
    });

    // モーダルを閉じる関数
    function modalClose(){
        $modal.attr('data', '');
        $modal.fadeOut(300);
        $modalIframe.attr('src', '');
        $modalBack.fadeOut(300);
        $body.css({overflow:'visible'});
    }

    // モーダル開く 画像
    $artImgWrap.on('click', function(){

        var $this = $(this),
            src = $this.parents('.js-article').attr('data'),
            title = $this.parents('.js-article').attr('title'),
            channel = $this.parents('.js-article').attr('channel'),
            artCategoryNum = $this.parents('.js-article').attr('category'),
            highlight1 = $this.parents('.js-article').attr('highlight--1'),
            highlight2 = $this.parents('.js-article').attr('highlight--2'),
            highlight3 = $this.parents('.js-article').attr('highlight--3');
            
        $modal.attr('data', src);
        $modalIframe.attr('src', 'https://www.youtube.com/embed/' + src);
        $modalTitle.text(title);
        $modalCannel.text(channel);

        switch(artCategoryNum) {
            case "00":
                $modalCategory.removeClass('bg--red bg--orange bg--green bg--yellow').addClass('bg--red').text('MAKEUP');
                break;
            case "01":
                $modalCategory.removeClass('bg--red bg--orange bg--green bg--yellow').addClass('bg--orange').text('SKIN & HAIR');
                break;
            case "02":
                $modalCategory.removeClass('bg--red bg--orange bg--green bg--yellow').addClass('bg--green').text('FITNESS');
                break;
            case "03":
                $modalCategory.removeClass('bg--red bg--orange bg--green bg--yellow').addClass('bg--yellow').text('LIFESTYLE');
                break;
        }

        $modalHighlight1.text(highlight1);
        $modalHighlight2.text(highlight2);
        $modalHighlight3.text(highlight3);

        $modalBack.fadeIn(300);
        $modal.fadeIn(300);

        $body.css({overflow:'hidden'});

        // モーダル閉じる closeボタン
        $modalClose.on('click', function(){
            modalClose();
        });
        // モーダル閉じる 背景
        $modalBack.on('click', function(){
            modalClose();
        });
    });

    // モーダル開く タイトル
    $artTitle.on('click', function(){

        var $this = $(this),
            src = $this.parents('.js-article').attr('data'),
            title = $this.parents('.js-article').attr('title'),
            channel = $this.parents('.js-article').attr('channel'),
            artCategoryNum = $this.parents('.js-article').attr('category'),
            highlight1 = $this.parents('.js-article').attr('highlight--1'),
            highlight2 = $this.parents('.js-article').attr('highlight--2'),
            highlight3 = $this.parents('.js-article').attr('highlight--3');
            
        $modal.attr('data', src);
        $modalIframe.attr('src', 'https://www.youtube.com/embed/' + src);
        $modalTitle.text(title);
        $modalCannel.text(channel);

        switch(artCategoryNum) {
            case "00":
                $modalCategory.removeClass('bg--red bg--orange bg--green bg--yellow').addClass('bg--red').text('MAKEUP');
                break;
            case "01":
                $modalCategory.removeClass('bg--red bg--orange bg--green bg--yellow').addClass('bg--orange').text('SKIN & HAIR');
                break;
            case "02":
                $modalCategory.removeClass('bg--red bg--orange bg--green bg--yellow').addClass('bg--green').text('FITNESS');
                break;
            case "03":
                $modalCategory.removeClass('bg--red bg--orange bg--green bg--yellow').addClass('bg--yellow').text('LIFESTYLE');
                break;
        }

        $modalHighlight1.text(highlight1);
        $modalHighlight2.text(highlight2);
        $modalHighlight3.text(highlight3);

        $modalBack.fadeIn(300);
        $modal.fadeIn(300);

        $body.css({overflow:'hidden'});

        // モーダル閉じる closeボタン
        $modalClose.on('click', function(){
            modalClose();
        });
        // モーダル閉じる 背景
        $modalBack.on('click', function(){
            modalClose();
        });
    });


    // ==================================================
    // ランキングAjax
    // ==================================================
    var $rankingList = $('.js-setRankingHtml');
    var currentPage = 'index_daily.html';

    // クリックした時の処理
    $('.js-rankingSort').on('click', function(e){
        e.preventDefault();

        var link = $(this).find('.js-rankingLink').attr('href');

        if(link == currentPage){
            return false;
        } else {
            getPage(link);
            currentPage = link;
        }
    });

    // 初期設定
    $(document).ready(function(){
        getPage('index_daily.html');
    })

    // ページ取得関数
    function getPage(elm){
        $.ajax({
            url: elm,
            type:'GET',
            dataType:'html'
        }).done(function(data){
            $rankingList.html(data).fadeIn(300);
        }).fail(function(){
            $rankingList.html('読み込みに失敗しました。少し経ってから再度お試しください');
        });
    }

    // ==================================================
    // あとで見る
    // ==================================================
    // var $action = $('.leter__btn');

    // $laterBtn.on('click', function(){
    //     var cookieData = Cookies.get('data'),
    //         data = $(this).parents('.js-article').attr('data');

    //     if(cookieData){
    //         Cookies.set('data', cookieData + ',' + data, {expires: 7});
    //     } else {
    //         Cookies.set('data', data, {expires: 7});
    //     }

    //     // location.reload();
    //     $(this).toggleClass('action');

    // });

    // function getData() {
    //     var cookieData = Cookies.get('data');
    //     var cookieDataArray = cookieData.split(",");

    //     for(var i = 0; i < cookieDataArray.length; i++){
    //         $('.article_list').append(
    //             '<li class="article__item js-article" data="' + cookieDataArray[i] + '" title="" channel="" ></li>');
    //     }

    // }

    // $('.js-laterPage').each(function(){
    //     getData();
    // });

});
