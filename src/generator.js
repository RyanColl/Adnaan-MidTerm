$(document).ready(function() {
  // IMAGE GENERATOR
  $('form').on('submit', function(event) {
    //PREVENT DEFAULT
    event.preventDefault();

    var form = $(this);

    // GET SUBJECT
    var subject =
      '?' +
      form
        .find("[type='text']")
        .first()
        .val();

    var image = form
      .next()
      .find('img')
      .first();

    // APPEND TO URL
    if (subject != '') {
      image.attr('src', 'https://source.unsplash.com/400x250/' + subject);
    }
  });

  /**
   * Task 2: Write your event listeners here
   */
});
