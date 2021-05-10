$(document).ready(function () {
  $('.show-menu').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-show');
  });
});