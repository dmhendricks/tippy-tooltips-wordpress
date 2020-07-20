/**
 * Initialize Tippy.js
 */

;document.addEventListener( 'DOMContentLoaded', function( event ) {
    // Initialize Tippy tooltips
    tippy( '[data-tippy-content]' );

    // Remove title attribute where tooltip is present
    $( '[data-tippy-content]' ).removeAttr( 'title' );
});
