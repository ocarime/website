// When the header image is clicked
$('.header-image').on('click', function() {
  let header = $('header');

  // Extend the height of the header
  header.css('height', '80vh');

  // Fade out the header image
  $('.header-image').fadeOut(400, function() {
    // Create the header iframe
    $(document.createElement('iframe'))
      .addClass('header-iframe')
      .attr('src', 'https://beta.ocarime.com')
      .appendTo(header);
  });
});
