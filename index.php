<!-- ==============================================
Head
============================================== -->
<?php require 'head.php'; ?>

<!-- ==============================================
Header
============================================== -->
<?php require 'header.php'; ?>

<!-- ==============================================
Navigation
============================================== -->
<?php require 'nav.php'; ?>

<!-- ==============================================
Main
============================================== -->
<main class="main">

<!-- ==============================================
Slider
============================================== -->
<?php require 'slider.php'; ?>

<!-- ==============================================
Modal
============================================== -->
<?php require 'modal.php'; ?>

<!-- ==============================================
記事カテゴリ NEWS
============================================== -->
<section class="category -1" id="news">
    <div class="container">

        <!-- カテゴリヘッダー -->
        <div class="category__head">
            <!-- カテゴリタイトル -->
            <h1 class="category__title">
            <span class="category__titleLine bg--pink"></span>
            NEWS
            </h1>
            <!-- MOREボタン -->
            <button type="button" class="category__moreBtn">
            <a href="#" class="category__moreBtn--link">MORE</a>
            </button>
        </div>

        <!-- 記事リスト -->
        <ul class="article__list">

            <!-- 記事単体 -->
            <li class="article__item js-article" data="CuW8ZOMk3Gs" title="成人式で差をつけろ！【完全版】メイクアップ術【大公開】ノンストップでお届けします！最後の10秒は必見です！" channel="ai-Tubeあいり" category="00" highlight--1="他人と差をつけられる" highlight--2="普段使いもできる" highlight--3="わかりやすい">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="jwjAnr9SDt8" title="【ベストスキンケア2019】美肌にこだわる全ての人へ！最強のアイテム集めました。" channel="おかめ微々ちゃん" category="01" highlight--1="すごく参考になる" highlight--2="役立つ" highlight--3="手を出しやすい価格">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="mBDyDtI5gYc" title="PFDPEXCITE&TRY　STREET JAZZ大城戸美香×二宮由真　ダンスフィットネス　ダンスエアロ2019年12月15日" channel="清水紘ジロウ" category="02" highlight--1="かっこいい" highlight--2="楽しい" highlight--3="やってみたくなる">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="Zgpaiy8ez7Q" title="【1日密着-ダイエット編】最後に体重も公開！ダイエット中の食事・筋トレ・美容♡" channel="ひよんちゃんねる
" category="03" highlight--1="参考になる" highlight--2="ストイック" highlight--3="一緒にがんばりたくなる">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

        </ul>
    </div>
</section>

<!-- ==============================================
ランキング
============================================== -->
<section class="category -ranking" id="ranking">
        <div class="container">
            <!-- カテゴリヘッダー -->
            <div class="category__head -ranking">
                <!-- カテゴリタイトル -->
                <h1 class="category__title -ranking">
                    <span class="category__titleLine bg--white"></span>RANKING
                </h1>
                <!-- MOREボタン -->
                <button type="button" class="category__moreBtn -ranking">
                    <a href="#" class="category__moreBtn--link -ranking">MORE</a>
                </button>
            </div>
            <!-- ランキングタブ -->
            <ul class="ranking__tab">
                <li class="ranking__tabItem js-rankingSort">
                    <a class="ranking__tabItemLink js-rankingLink" href="index_daily.html">DAILY</a>
                </li>
                <li class="ranking__tabItem js-rankingSort">
                    <a class="ranking__tabItemLink js-rankingLink" href="index_weekly.html">WEEKLY</a>
                </li>
                <li class="ranking__tabItem js-rankingSort">
                    <a class="ranking__tabItemLink js-rankingLink" href="index_monthly.html">MONTHLY</a>
                </li>
            </ul>

            <!-- ランキング記事リスト -->
            <ul class="article__list -ranking js-setRankingHtml">

            </ul>

        </div>
</section>

<!-- ==============================================
記事カテゴリ MAKEUP
============================================== -->
<section class="category -1" id="makeup">
    <div class="container">

        <!-- カテゴリヘッダー -->
        <div class="category__head">
            <!-- カテゴリタイトル -->
            <h1 class="category__title">
            <span class="category__titleLine bg--red"></span>
            MAKEUP
            </h1>
            <!-- MOREボタン -->
            <button type="button" class="category__moreBtn">
            <a href="#" class="category__moreBtn--link">MORE</a>
            </button>
        </div>

        <!-- 記事リスト -->
        <ul class="article__list">

            <!-- 記事単体 -->
            <li class="article__item js-article" data="fcUdyJGMjjQ" title="【アイテム別塗り方】ALLプチプラ！クリスマスにぴったりなBEST５♡" channel="和田さん。チャンネル" category="00" highlight--1="試してみたい" highlight--2="季節感" highlight--3="手に取りやすい価格">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="CY73ZnjRfUg" title="【肌質別】ベースメイクの組み合わせ紹介" channel="
大人のキレイになるメイク" category="00" highlight--1="タメになる" highlight--2="役立つ" highlight--3="取り入れやすい">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="7B69oED9RrU" title="Christmas makeup feat. Chie Hidaka | チエさんとお喋りしながらクリスマスメイク!!" channel="MISS TOXIC" category="00" highlight--1="楽しい" highlight--2="おしゃべり" highlight--3="コラボ">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="QhndXtwWzGs" title="【マイベストコスメ】2019年買ってよかった‼︎アラフォーメイクに欠かせないプチプラ＆デパコス【10選】" channel="" category="00" highlight--1="参考になる" highlight--2="わかりやすい" highlight--3="低価格から高価格まで">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

        </ul>
    </div>
</section>


<!-- ==============================================
記事カテゴリ SKIN & HAIR
============================================== -->
<section class="category -1" id="skin_hair">
    <div class="container">

        <!-- カテゴリヘッダー -->
        <div class="category__head">
            <!-- カテゴリタイトル -->
            <h1 class="category__title">
            <span class="category__titleLine bg--orange"></span>
            SKIN & HAIR
            </h1>
            <!-- MOREボタン -->
            <button type="button" class="category__moreBtn">
            <a href="#" class="category__moreBtn--link">MORE</a>
            </button>
        </div>

        <!-- 記事リスト -->
        <ul class="article__list">

            <!-- 記事単体 -->
            <li class="article__item js-article" data="GFbHhXhLlNQ" title="FUDGE.jpが選ぶ、お気に入りコスメ2019！スキンケア編【メイクアップティップス】" channel="
FUDGE" category="01" highlight--1="おしゃれ" highlight--2="美しい" highlight--3="ハイセンス">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="jTMOxaHxLvs" title="【コスメ】2019年下半期ベストコスメ" channel="ふみあみ双子チャンネル" category="01" highlight--1="参考になる" highlight--2="やってみたい" highlight--3="手に取りやすい価格">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="NRXnw-ik0zg" title="【ニキビ絶対治す方法】超敏感乾燥肌の私のニキビ跡ケアとニキビ 対策【スキンケア】" channel="鹿の間" category="01" highlight--1="わかりやすい" highlight--2="タメになる" highlight--3="テクニック">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="PtBwLowqAHE" title="スキンケアについて語りつくす！" channel="
RHINA" category="01" highlight--1="トーク" highlight--2="のんびり" highlight--3="参考になる">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

        </ul>
    </div>
</section>


<!-- ==============================================
記事カテゴリ FITNESS
============================================== -->
<section class="category -1" id="fitness">
    <div class="container">

        <!-- カテゴリヘッダー -->
        <div class="category__head">
            <!-- カテゴリタイトル -->
            <h1 class="category__title">
            <span class="category__titleLine bg--green"></span>
            FITNESS
            </h1>
            <!-- MOREボタン -->
            <button type="button" class="category__moreBtn">
            <a href="#" class="category__moreBtn--link">MORE</a>
            </button>
        </div>

        <!-- 記事リスト -->
        <ul class="article__list">

            <!-- 記事単体 -->
            <li class="article__item js-article" data="GqPVO7N1bng" title="【筋トレ】内もも痩せに効く！by ENERGY FIT｜女性必見！" channel="
ENERGYFIT Tokyo" category="02" highlight--1="自宅で手軽にできる" highlight--2="かっこいい" highlight--3="すぐにやってみたくなる">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="TWfmW1XZeZ0" title="【二の腕痩せ】女っぽいくびれ細腕に！ トレーニングバンドで上腕三頭筋 引き締め" channel="毎日1分フィットネス SHEPLI シェプリ" category="02" highlight--1="気軽にトレーニング" highlight--2="きつすぎない" highlight--3="毎日1分">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="lZyFIkxnEDo" title="ZUMBAフィットネス心臓トレーニングフルビデオ" channel="ワークアウトダンス - ダンスズンバ" category="02" highlight--1="ながらトレーニング" highlight--2="気軽にできる" highlight--3="続けやすい">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="QpVvxwgkT4M" title="フィットネスヨガ 　Yogalog" channel="日本最大のヨガレッスン動画サイトYogalog" category="02" highlight--1="効果的なエクササイズ" highlight--2="ハード目" highlight--3="全身トレーニング">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

        </ul>
    </div>
</section>


<!-- ==============================================
記事カテゴリ LIFESTYLE
============================================== -->
<section class="category -1" id="lifestyle">
    <div class="container">

        <!-- カテゴリヘッダー -->
        <div class="category__head">
            <!-- カテゴリタイトル -->
            <h1 class="category__title">
            <span class="category__titleLine bg--yellow"></span>
            LIFESTYLE
            </h1>
            <!-- MOREボタン -->
            <button type="button" class="category__moreBtn">
            <a href="#" class="category__moreBtn--link">MORE</a>
            </button>
        </div>

        <!-- 記事リスト -->
        <ul class="article__list">

            <!-- 記事単体 -->
            <li class="article__item js-article" data="QQeIxVlBuvE" title="【紹介】わたしのライフスタイルのお手本となる本や人物などをご紹介します" channel="rioko's living" category="03" highlight--1="おしゃれ" highlight--2="憧れの生活" highlight--3="のんびり">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="x-p-W9__-vM" title="【シンプリスト】ライフスタイル朝家事後のまったり珈琲タイム" channel="simplelife mini" category="03" highlight--1="身近" highlight--2="のんびり" highlight--3="いろいろ">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="kpYFFsoGG8Q" title="【ライフスタイルVlog】#2 デザイナー夫婦のお家を紹介！" channel="ダイトハル" category="03" highlight--1="ほっこり" highlight--2="真面目" highlight--3="参考になる">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

            <!-- 記事単体 -->
            <li class="article__item js-article" data="wNJj2bYfpss" title="【ルームツアー】ミニマリスト主婦の団地暮らし生活。キッチン・ダイニング・玄関を紹介します" channel="くらのらチャンネル" category="03" highlight--1="ミニマリズム" highlight--2="整頓" highlight--3="暮らしやすい">
                <!-- 記事中身読み込み -->
                <?php require 'article_item.php'; ?>
            </li>

        </ul>
    </div>
</section>

</main>

<!-- ==============================================
Footer
============================================== -->
<?php require 'footer.php'; ?>
