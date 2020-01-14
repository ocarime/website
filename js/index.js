// When the document is loaded
$(function() {
  let header = $('header');

  // When the game button is clicked
  $('#header-btn-game').on('click', function() {
      // Extend the height of the header
    header.css('height', '80vh');

    // Fade out the header image
    $('.header-image').fadeOut(400, function() {
      // Create the header iframe
      $(document.createElement('iframe'))
        .addClass('header-iframe')
        .attr('src', 'https://beta.ocarime.com')
        .attr('frameborder', '0')
        .appendTo(header);
    });
  });
});
