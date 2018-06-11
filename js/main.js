// Smooth scrolling

$('#view-work').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});

$('#contact-me').on('click', function() {
  const images = $('#footer').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});