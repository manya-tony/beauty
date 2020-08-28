<div class="modal">
    <!-- モーダルフレーム -->
    <div class="modal__frame js-modal" data="">
        <!-- モーダル閉じるボタン -->
        <button type="button" class="modal__closeBtn js-modalCloseBtn">
            <span class="modal__closeBtnItem -btn1"></span>
            <span class="modal__closeBtnItem -btn2"></span>
        </button>
        <!-- モーダル動画表示 -->
        <div class="modal__iframeWrap">
            <iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <!-- モーダルテキスト部分 -->
        <div class="modal__textWrap">
            <!-- モーダルタイトル -->
            <h1 class="modal__title js-modalTitle"></h1>
            <!-- モーダルチャンネル名 -->
            <p class="modal__channel js-modalChannel"></p>
            <!-- モーダルオプション -->
            <div class="modal__option">
                <!-- モーダルカテゴリ名 -->
                <div class="category__tag js-modalCategory"></div>
                <!-- モーダルあとで見るボタン -->
                <!-- <button type="button" class="later__btn modal__laterBtn js-laterBtn" data="">
                    <div class="laterBtn--icon"></div>
                    <p class="modal__laterBtn--text">あとでみる</p>
                </button> -->
            </div>
            <!-- モーダル動画説明部分 -->
            <h2 class="modal__highlight--title">動画の見どころ</h2>
            <ul class="modal__highlight--list">
                <li class="modal__highlight--item js-modalHighlight--1"></li>
                <li class="modal__highlight--item js-modalHighlight--2"></li>
                <li class="modal__highlight--item js-modalHighlight--3"></li>
            </ul>
        </div>
    </div>
    <!-- モーダル黒バック -->
    <div class="modal__back js-modalBack"></div>
</div>