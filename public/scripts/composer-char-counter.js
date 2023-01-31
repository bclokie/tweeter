$(document).ready(function() {

  // >>> Change value of char counter using length of input.
  const $tweetText = $('#tweet-text');
  const $counter = $('.counter');
  
  $($tweetText).on('input', function() {
    if ($(this).val().length > 140) {
      $(this).val($(this).val().substring(0, 140));
    }
    $counter.val(140 - $(this).val().length);
  });
  
});