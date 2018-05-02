// Elems
var gElems = {
  bodyElem: document.querySelector('body'),
  maskPlane: document.querySelector('#modal-backdrop'),
  btnLang: document.querySelector('#btn-language'),
  btnSound: document.querySelector('#btn-sound'),
  popItemBtn: Array.from(document.querySelectorAll('.btn-pop')),
  popCloseBtn: Array.from(document.querySelectorAll('.btn-close')),
  langItemBtn: Array.from(document.querySelectorAll('.lang-item')),
  homeLinkBar: document.querySelector('.home-link-bar'),
  pageLoadBox: document.querySelector('.pages-loading-box'),
  pagesLoadingTxt: document.querySelector('.pages-loading-txt'),
  pagesLoadingEnter: document.querySelector('.pages-loading-enter'),
  fixBottomBtnElem: Array.from(document.querySelectorAll('.home-fix-bottom-box > .fix-bottom-btn')),
  eventListItem: Array.from(document.querySelectorAll('.event-item-list > .event-item')),
  eventBannerCloseBtns: Array.from(document.querySelectorAll('.event-banner-close-btn')),
  eventScrollBanner: document.querySelector('#event-scroll-banner'),
  pagesBtns: Array.from(document.querySelectorAll('.btn-pages')),
  pagesContainer: document.querySelector('.pages-container'),
  pagesMain: Array.from(document.querySelectorAll('.pages-container > .pages-main')),
  pagesClose: document.querySelector('.pages-container > .close-btn')
}

// 彈窗事件
var popWindowEvent = {
  open: (e, s) => {
    gElems.maskPlane.style.opacity = '';
    if (!s.classList.contains('user-center-btn')) {
      pagesEvent.close();
    }

    // 客服遮罩透明
    if (e.classList.contains('service-dialog')) {
      gElems.maskPlane.style.opacity = 0;
    }

    e.style.display = 'block';
    gElems.maskPlane.classList.add('fade');
    setTimeout(() => {
      e.classList.add('in');
      gElems.maskPlane.classList.add('in');
    }, 300);
  },
  close: (e, b) => {
    e.classList.remove('in');
    if (b) {
      gElems.maskPlane.classList.remove('in');
    }
    setTimeout(() => {
      e.style.display = 'none';
      gElems.maskPlane.classList.remove('fade');
      if (b) {
        // 按鈕回到大廳狀態
        gElems.fixBottomBtnElem[0].click();
      }
    }, 300);
  }
};

// 彈窗按鈕對應
var popUpWindow = () => {

  // var eEnterPoint = null;

  // // open
  // gElems.popItemBtn.forEach((e, i) => {
  //   e.addEventListener('click', () => {
  //     var popWindow = document.querySelector('#' + e.getAttribute('data-pop'));
  //     popWindowEvent.open(popWindow, e);

  //     eEnterPoint = (!e.classList.contains('user-center-btn')) ? true : false;

  //     // if (!e.classList.contains('fix-bottom-btn')) {
  //     //   gElems.fixBottomBtnElem[0].click();
  //     // }
  //   });
  // });

  // // close
  // gElems.popCloseBtn.forEach((e, i) => {
  //   e.addEventListener('click', () => {
  //     var popWindow = document.querySelector('#' + e.getAttribute('data-pop'));
  //     popWindowEvent.close(popWindow, eEnterPoint);
  //   });
  // })
};

// pages link
var pagesEvent = pagesEvent || {};
var pagesMain = () => {
  pagesEvent = (() => {
    pagesEvent = {
      'open': (s) => {
        gElems.pagesContainer.classList.add('show');
        gElems.pagesMain.forEach((e, i) => {
          e.classList.remove('active');
          e.classList.remove('ani');
          if (e.getAttribute("data-page-name") == s) {
            e.classList.add('active');
            setTimeout(() => {
              e.classList.add('ani')
            })
          };
        })
      },
      'close': () => {
        gElems.pagesContainer.classList.remove('show');
        gElems.pagesMain.forEach((e, i) => {
          e.classList.remove('active');
          e.classList.remove('ani')
        })
      }
    }
    return pagesEvent;
  })();

  // open
  gElems.pagesBtns.forEach((e, i) => {
    e.addEventListener('click', () => {
      var pagesName = e.getAttribute('data-page-name');
      pagesEvent.open(pagesName);
      if (pagesName != 'user-center') {
        gElems.fixBottomBtnElem.forEach((e, i) => {
          e.classList.remove('active')
        });
      }
    });
  });

  // close
  gElems.pagesClose.addEventListener('click', () => {
    pagesEvent.close();
    gElems.fixBottomBtnElem[0].click();
  });

};

// 聲音
var soundObj = {};
var homeSound = () => {

  var bgSound = 'public/media/bg_sound.mp3';
  var lastSeen;
  var loop = () => {
    lastSeen = Date.now();
    setTimeout(loop, 50);
  };
  loop();

  soundObj = {
    status: false,
    init: () => {
      soundObj.song = new Audio();
      soundObj.song.src = bgSound;
      soundObj.song.preload = "auto";
      soundObj.song.addEventListener('ended', soundObj.song.play, false);
      soundObj.song.addEventListener('playing', () => {
        soundObj.status = true;
        gElems.btnSound.classList.add('on');
      });
      soundObj.song.addEventListener('timeupdate', () => {
        if (Date.now() - lastSeen > 300) {
          soundObj.pause();
        }
      }, false);
    },
    play: () => {
      soundObj.song.play();
    },
    pause: () => {
      soundObj.status = false;
      gElems.btnSound.classList.remove('on');
      soundObj.song.pause();
    }
  }
};

homeSound();

// 語言切換
var languageSound = (lang) => {
  var fxSound = new Audio();
  fxSound.src = 'public/media/welcom_' + lang + '.mp3';

  function soundPlay() {
    fxSound.play();
  };

  soundPlay();
}

var homeSoundStart = () => {
  // 微信
  wechatAutoPlayAudio(enterBtn);

  if (soundObj.song.readyState == 4) { // android
    enterBtn();
  } else { // iOS
    soundObj.song.addEventListener("canplaythrough", () => {
      enterBtn();
    }, false);
    soundObj.song.load(); // 需要主動觸發下，不然不會加載
  }

  function enterBtn() {
    setTimeout(() => {
      gElems.pagesLoadingEnter.classList.remove('off');
    }, 3000);

    gElems.pagesLoadingEnter.addEventListener('click', onCanPlay);
  }

  function onCanPlay() {

    gElems.pageLoadBox.classList.add('ani');
    gElems.bodyElem.classList.remove('no-scroll');

    // 語言歡迎聲
    languageSound(langName);

    // 播放背景音
    soundObj.play();

    // sound event
    gElems.btnSound.addEventListener('click', () => {
      if (soundObj.status) {
        soundObj.pause();
      } else {
        soundObj.play();
      }
    }, false);

    setTimeout(function () {
      gElems.pageLoadBox.style.display = 'none';
    }, 1000);

    // 限定一次
    gElems.pagesLoadingEnter.removeEventListener("click", onCanPlay);

  }
}

// wechat autoPlay
var wechatAutoPlayAudio = (fn, elem) => {
  wx.config({
    // 配置信息，即使不正確也能使用wx.ready
    debug: false,
    appId: '',
    timestamp: 1,
    nonceStr: '',
    signature: '',
    jsApiList: []
  });
  wx.ready(function () {
    //elem.play();
    fn();
  });
}

// homeLink 滾動固定
var homeLinkBar = () => {
  var basicHeight = gElems.homeLinkBar.offsetTop;
  window.addEventListener('scroll', debounce(() => {
    if (window.pageYOffset >= basicHeight) {
      gElems.homeLinkBar.classList.add("fixed");
    } else {
      gElems.homeLinkBar.classList.remove("fixed");
    }
  }, 10));
}

// bottome-bottom Event
var fixBottomBtns = () => {
  gElems.fixBottomBtnElem.forEach((e, i) => {
    if (e.hasAttribute("data-menu")) {
      e.addEventListener('click', () => {
        e.classList.add('active')
        var sibElems = getSiblings(e);
        sibElems.forEach((m, n) => {
          m.classList.remove('active');
        });
        if (!e.hasAttribute("data-page-name")) {
          pagesEvent.close();
        }
      })
    }
  });
}

// 遊戲選項高度
var homeGameListH = function () {
  var winSizeH = window.innerHeight,
    gameListElem = document.querySelector('.gamelist-wrapper'),
    homeTop = document.querySelector('.home-fix-top-box').offsetHeight,
    homeSwiper = document.querySelector('.home-swiper-wrapper').offsetHeight,
    homeLinkBar = document.querySelector('.home-link-bar').offsetHeight,
    homeBottom = document.querySelector('.home-fix-bottom-box').offsetHeight;

  var gameListHeight = winSizeH - homeTop - homeSwiper - homeLinkBar - homeBottom;
  gameListElem.style.height = gameListHeight + 'px';

};

// user center btn height fill screen
var userCenterBtnH = function () {
  var winSizeH = window.innerHeight,
    centerPageBox = document.querySelector('.user-center-wrapper'),
    homeBottom = document.querySelector('.home-fix-bottom-box').offsetHeight;
  centerPageBoxH = winSizeH - 50 - 88 - homeBottom;
  centerPageBox.style.height = centerPageBoxH + 'px';
};

// eventBanner
var eventBanner = () => {

  var eventNav = Array.from(document.querySelectorAll('.event-pagination > span')),
    eventPopElem = document.querySelector('#event-dialog');

  // link photo
  gElems.eventListItem.forEach((e, i) => {
    e.addEventListener('click', () => {
      eventNav[i].click();
      gElems.eventScrollBanner.classList.add('show');
      eventPopElem.classList.remove('in');
      eventPopElem.style.display = 'none';
      //popWindowEvent.close(eventPopElem);
    });
  });

  // close
  gElems.eventBannerCloseBtns.forEach((e, i) => {
    e.addEventListener('click', () => {
      gElems.eventScrollBanner.classList.remove('show');
      gElems.maskPlane.classList.remove('fade');
      gElems.fixBottomBtnElem[0].click();
    });
  });

};

// news switch btn 
var newsCon = () => {
  var btns = Array.from(document.querySelectorAll('.switch-btn'))
  btns.forEach((e, i) => {
    e.addEventListener('click', () => {
      var parentElem = e.parentNode;
      var txtElem = e.querySelector('span');
      if (parentElem.classList.contains('hidden')) {
        parentElem.classList.remove('hidden');
        txtElem.innerHTML = '收起';
        e.classList.add('active');

      } else {
        parentElem.classList.add('hidden');
        txtElem.innerHTML = '阅读全文';
        e.classList.remove('active');
      }
    })
  })
}

// 尺寸變換初始
var resizeInit = function () {
  //homeGameListH();
  userCenterBtnH();
};

// 首頁頁面初始
var homePageInit = function () {

  gElems = {
    bodyElem: document.querySelector('body'),
    maskPlane: document.querySelector('#modal-backdrop'),
    btnLang: document.querySelector('#btn-language'),
    btnSound: document.querySelector('#btn-sound'),
    popItemBtn: Array.from(document.querySelectorAll('.btn-pop')),
    popCloseBtn: Array.from(document.querySelectorAll('.btn-close')),
    langItemBtn: Array.from(document.querySelectorAll('.lang-item')),
    homeLinkBar: document.querySelector('.home-link-bar'),
    pageLoadBox: document.querySelector('.pages-loading-box'),
    pagesLoadingTxt: document.querySelector('.pages-loading-txt'),
    pagesLoadingEnter: document.querySelector('.pages-loading-enter'),
    fixBottomBtnElem: Array.from(document.querySelectorAll('.home-fix-bottom-box > .fix-bottom-btn')),
    eventListItem: Array.from(document.querySelectorAll('.event-item-list > .event-item')),
    eventBannerCloseBtns: Array.from(document.querySelectorAll('.event-banner-close-btn')),
    eventScrollBanner: document.querySelector('#event-scroll-banner'),
    pagesBtns: Array.from(document.querySelectorAll('.btn-pages')),
    pagesContainer: document.querySelector('.pages-container'),
    pagesMain: Array.from(document.querySelectorAll('.pages-container > .pages-main')),
    pagesClose: document.querySelector('.pages-container > .close-btn')
  }

  // loading banner
  var swiper = new Swiper('.guide-swiper-container', {
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // homeBanner
  var swiper = new Swiper('.home-swiper-container', {
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // eventBanner
  var swiper = new Swiper('.event-swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.event-pagination',
      clickable: true,
    },
  });

  // 訊息發送滾動置底測試
  $('.send-message-form').on('submit', function (event) {
    event.preventDefault();
    var message = $('.customer-chat > li').first().clone();
    message.find('.chat_info').text($('.message-input').val());
    message.prependTo('.customer-chat');
    $('.message-input').val('');
  });

  // 針對客服點擊視窗外關掉 
  gElems.maskPlane.addEventListener('click', () => {
    var elem = document.querySelector('#service-dialog');
    if (elem.classList.contains('in')) {
      popWindowEvent.close(elem, true);
    }
  })

  // sound
  soundObj.init();

  homeGameListH();
  homeLinkBar();
  fixBottomBtns();
  userCenterBtnH();
  popUpWindow();
  eventBanner();
  pagesMain();
  newsCon();

  // 引導廣告
  imagesLoaded(document.querySelector('#pages-loading-banner'), function (instance) {
    setTimeout(() => {
      document.querySelector('#pages-loading-banner').classList.add('active');
      homeSoundStart();
    }, 1000);
  });

  window.addEventListener('resize', resizeInit);
}

// plus
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function getChildren(n, skipMe) {
  var r = [];
  for (; n; n = n.nextSibling)
    if (n.nodeType == 1 && n != skipMe)
      r.push(n);
  return r;
};

function getSiblings(n) {
  return getChildren(n.parentNode.firstChild, n);
}

window.onload = homePageInit;