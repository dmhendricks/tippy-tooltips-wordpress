/**
 * Initialize Tippy.js
 */

;(function($) {

    // Initialize Tippy tooltips
    tippy( '[data-tippy-content]' );

    // Remove title attribute where tooltip is present
    $( '[data-tippy-content]' ).each( function() {
        $( this ).removeAttr( 'title' );
    });

})( window.jQuery );
