<template>
<div class="context home-context">
    <!-- 頂部固定區 -->
    <div class="home-fix-top-box">
        <a data-page-name="news" class="btn-news btn-pages">
            <span class="btn-news-icon new-news"></span>
        </a>
        <div class="home-marquee">
            <p>欢迎来到WM微投，可添加WM客服微信:wm000 ,将有专人为您服务</p>
        </div>
    </div>
    <!-- 廣告輪播區 -->
    <div class="home-swiper-wrapper">
        <a id="btn-language" data-pop="lang-dialog" class="btn-pop btn-language cn">
            <span class="language-flag-icon flag-icon"></span>
        </a>
        <a id="btn-sound" class="btn-sound">
            <span class="sound-icon"></span>
        </a>
        <div class="swiper-container home-swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="public/images/b_rc.png" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="public/images/b_sp.png" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="public/images/b_lo.png" alt=""/>
                </div>
                <div class="swiper-slide">
                    <img src="public/images/b_sl.png" alt=""/>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <!-- 中間按鈕條 -->
    <div class="home-link-bar">
        <a data-pop="about-dialog" class="home-link-btn about-wm btn-pop">
            <span>关于</span>
            <i class="wm-icon"></i>
        </a>
        <a data-page-name="wallet-center" class="home-link-btn btn-pages">
            <span>充提中心</span>
        </a>
        <a class="home-link-btn free-play">
            <span>免费试玩</span>
        </a>
    </div>
    <!-- 主項目 -->
    <div class="home-content">
        <!-- 遊戲清單 -->
        <div class="gamelist-wrapper">
            <div class="gamelist-row">
                <div class="gamelist-col">
                    <a class="gamelist-item column hot">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i101.png)"></div>
                        <div class="game-name">微投百家</div>
                    </a>
                </div>
                <div class="gamelist-col">
                    <a class="gamelist-item">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i102.png)"></div>
                        <div class="game-name">微投龙虎</div>
                    </a>
                    <a class="gamelist-item">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i104.png)"></div>
                        <div class="game-name">微投轮盘</div>
                    </a>
                </div>
                <div class="gamelist-col">
                    <a class="gamelist-item">
                        <div class="game-image h" style="background-image: url(public/resource/images/mid_i103.png)"></div>
                        <div class="game-name">微投骰宝</div>
                    </a>
                    <a class="gamelist-item">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i105.png)"></div>
                        <div class="game-name">微投牛牛</div>
                    </a>
                </div>
            </div>
            <div class="gamelist-row">
                <div class="gamelist-col">
                    <a class="gamelist-item column hot">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i201.png)"></div>
                        <div class="game-name">微投利鑫彩票</div>
                    </a>
                </div>
                <div class="gamelist-col">
                    <a class="gamelist-item">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i202.png)"></div>
                        <div class="game-name">VR
                            <br/> 直播彩票
                        </div>
                    </a>
                    <a class="gamelist-item new">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i204.png)"></div>
                        <div class="game-name">WM体育</div>
                    </a>
                </div>
                <div class="gamelist-col">
                    <a class="gamelist-item">
                        <div class="game-image h" style="background-image: url(public/resource/images/mid_i203.png);"></div>
                        <div class="game-name">微投
                            <br/> 北京赛车
                        </div>
                    </a>
                    <a class="gamelist-item">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i205.png)"></div>
                        <div class="game-name">竞猜体育</div>
                    </a>
                </div>
            </div>
            <div class="gamelist-row">
                <div class="gamelist-col">
                    <a class="gamelist-item column">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i301.png)"></div>
                        <div class="game-name">直播老虎机</div>
                    </a>
                </div>
                <div class="gamelist-col">
                    <a class="gamelist-item">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i302.png)"></div>
                        <div class="game-name">PlaynGo
                            <br/> 老虎机
                        </div>
                    </a>
                    <a data-pop="about-dialog" class="gamelist-item btn-pop">
                        <div class="game-image svg" style="background-image: url(public/resource/images/svg/mid_i304.svg)"></div>
                        <div class="game-name">代理加盟</div>
                    </a>
                </div>
                <div class="gamelist-col">
                    <a class="gamelist-item">
                        <div class="game-image" style="background-image: url(public/resource/images/mid_i303.png)"></div>
                        <div class="game-name">直播斗鸡</div>
                    </a>
                    <a data-pop="invite-dialog" class="gamelist-item btn-pop">
                        <div class="game-image svg" style="background-image: url(public/resource/images/svg/mid_i305.svg)"></div>
                        <div class="game-name">邀请好友</div>
                    </a>
                </div>
            </div>
        </div>
        <!-- 活動區塊 -->
        <div class="event-photos">
            <div class="event-row">
                <div class="event-col col-100">
                    <img src="public/images/event/event_01.jpg" alt=""/>
                </div>
            </div>
            <div class="event-row">
                <div class="event-col col-100">
                    <img src="public/images/event/event_02.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
    <!-- 底部按鈕 -->
    <div class="home-fix-bottom-box">
        <a data-menu="home" class="fix-bottom-btn active">
            <span class="fix-bottom-btn-icon btn-1"></span>
            <strong>大厅</strong>
        </a>
        <a data-page-name="user-center" data-menu="user" class="fix-bottom-btn btn-pages">
            <span class="fix-bottom-btn-icon btn-2"></span>
            <strong>个人中心</strong>
        </a>
        <a data-menu="mobile" data-pop="mobile-dialog" class="fix-bottom-btn mobile-download btn-pop">
            <span class="fix-bottom-btn-icon btn-3"></span>
            <strong>手机下载</strong>
        </a>
        <a data-menu="event" data-pop="event-dialog" class="fix-bottom-btn btn-pop">
            <span class="fix-bottom-btn-icon btn-4 new-news"></span>
            <strong>优惠活动</strong>
        </a>
        <a data-menu="service" data-pop="service-dialog" class="fix-bottom-btn btn-service btn-pop">
            <span class="fix-bottom-btn-icon btn-5"></span>
            <strong>在线客服</strong>
        </a>
    </div>
</div>
</template>