/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/header.js ***!
  \********************************/
var header = document.getElementById('header');
var navigation = document.getElementById('navigation');
var menuBar = document.getElementById('menuBar');
var menuClose = document.getElementById('menuClose');
var isNavOpen = false;
menuBar.addEventListener('click', function () {
  navigation.classList.add('open');
});
menuClose.addEventListener('click', function () {
  navigation.classList.remove('open');
});

// Header 登入狀態 JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // 登出確認功能
  window.confirmLogout = function () {
    if (confirm('確定要登出嗎？')) {
      // 嘗試桌面版表單
      var desktopForm = document.getElementById('logout-form');
      if (desktopForm) {
        desktopForm.submit();
        return;
      }

      // 嘗試手機版表單
      var mobileForm = document.getElementById('logout-form-mobile');
      if (mobileForm) {
        mobileForm.submit();
        return;
      }

      // 如果都沒有找到表單，使用 GET 方式登出
      window.location.href = '/logout';
    }
  };

  // 電腦版用戶選單互動
  var userMenuLink = document.querySelector('.user-menu-link');
  if (userMenuLink) {
    var userDropdown = userMenuLink.querySelector('.user-dropdown');

    // 點擊用戶資訊區域時阻止默認行為
    userMenuLink.addEventListener('click', function (e) {
      e.preventDefault();
    });

    // 點擊其他地方關閉選單
    document.addEventListener('click', function (e) {
      if (!userMenuLink.contains(e.target)) {
        userDropdown.style.opacity = '0';
        userDropdown.style.visibility = 'hidden';
        userDropdown.style.transform = 'translateY(-10px)';
      }
    });

    // 阻止下拉選單點擊事件冒泡
    if (userDropdown) {
      userDropdown.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  }

  // 手機版選單整合現有的 Alpine.js 功能
  // 確保 isUser 狀態正確重置
  var navLinks = document.querySelectorAll('.navigation a[x-on\\:click]');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // 當點擊其他選單項目時，確保用戶選單關閉
      // 這個功能已經在 Alpine.js 的 x-on:click 中處理了
    });
  });

  // 平滑滾動到錨點（如果需要）
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 響應式處理
  function handleResize() {
    var width = window.innerWidth;

    // 桌面版時確保手機版選單關閉
    if (width > 768) {
      var mobileNav = document.getElementById('navigation');
      if (mobileNav) {
        mobileNav.classList.remove('active'); // 如果有這個 class
      }
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();

  // 添加載入動畫
  var authElements = document.querySelectorAll('.mobile-auth-section, .login-link, .user-menu-link');
  authElements.forEach(function (element) {
    element.classList.add('fade-in');
  });

  // 優化用戶體驗：預載入常用頁面
  var importantLinks = ['/profile', '/dashboard'];
  importantLinks.forEach(function (url) {
    var link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });

  // 如果有需要，可以添加通知功能
  window.showNotification = function (message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
    // 這裡可以整合你現有的通知系統
    console.log("".concat(type.toUpperCase(), ": ").concat(message));
  };

  // 檢查登入狀態變化（可選功能）
  // 如果你需要即時檢查登入狀態
  window.checkAuthStatus = function () {
    var _document$querySelect;
    fetch('/api/auth/check', {
      method: 'GET',
      headers: {
        'X-CSRF-TOKEN': ((_document$querySelect = document.querySelector('meta[name="csrf-token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content) || '',
        'Accept': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.authenticated !== (document.querySelector('.user-menu-link') !== null)) {
        // 登入狀態有變化，重新載入頁面
        window.location.reload();
      }
    })["catch"](function (error) {
      console.log('Auth status check failed:', error);
    });
  };
});

// 導出全域函數供其他腳本使用
window.HeaderAuth = {
  confirmLogout: window.confirmLogout,
  showNotification: window.showNotification,
  checkAuthStatus: window.checkAuthStatus
};
/******/ })()
;