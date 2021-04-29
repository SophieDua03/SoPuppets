$(document).ready(() => {
  $(".hamburger-btn").on('click', () => {
    $(".hamburger-btn, .nav").toggleClass('active').toggleClass('inactive');
  })
});