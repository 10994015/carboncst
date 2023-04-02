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
/******/ })()
;