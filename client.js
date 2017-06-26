$('document').ready(function() {

var indexGenerate = 0;
$('.btn-generate').on('click', function() {
  indexGenerate ++;
  $('.btn-generate').append("<div>" + "<p>" + indexGenerate + "</p>" + "</div>");
  $('.btn-generate').append('<div><button>Swap</button></div>');
  $('.btn-generate').append('<div><button>Delete</button></div>');
});

$('Swap').on('click', function () {
$(this).parent().last().toggleClass('background-color', 'yellow');

$('Delete').on('click', function () {
$(this).parent().last().remove();
});
});




});
