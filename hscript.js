$(document.body).on('click', '[data-selectbox] .listitem', function() {
  var item = $(this);
  item.parents('.listbox').find('.is-selected').removeClass('is-selected');
  item.addClass('is-selected');
});

$(document.body).on('click', '[data-expanded=true]', function() {
  var item = $(this);
  item.attr('data-expanded', 'false');
  item.removeClass('is-expanded').addClass('is-not-expanded');
  item.find('.listitem-expander').removeClass('is-expanded').addClass('is-not-expanded');
  item.parents('li').find('ul').hide();
});

$(document.body).on('click', '[data-expanded=false]', function() {
  var item = $(this);
  item.attr('data-expanded', 'true');
  item.removeClass('is-not-expanded').addClass('is-expanded');
  item.find('.listitem-expander').removeClass('is-not-expanded').addClass('is-expanded');
  item.parents('li').find('ul').show();
});

$('[data-indeterminate]').prop('indeterminate', true)