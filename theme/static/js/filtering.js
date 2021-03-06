$(document).ready(function() {

  // init Isotope
  var $grid = $('.grid');

  $grid.imagesLoaded(function() {
    $grid.isotope({
      itemSelector: '.element-item',
      layoutMode: 'masonry',
      percentPosition: true,
      masonry: {
        columnWidth: '.element-item',
        horizontalOrder: true,
      }
    });
  });

  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );

    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });

  });

});
