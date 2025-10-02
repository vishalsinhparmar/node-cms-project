// Carousel initialization and fixes
$(document).ready(function() {
    // Initialize carousel
    $('#carousel-example-generic').carousel({
        interval: 5000, // 5 seconds
        pause: 'hover',
        wrap: true
    });
    
    // Ensure only first slide is active on load
    $('.carousel-inner .item').removeClass('active');
    $('.carousel-inner .item:first').addClass('active');
    
    // Fix carousel indicators
    $('.carousel-indicators li').removeClass('active');
    $('.carousel-indicators li:first').addClass('active');
    
    // Manual carousel controls
    $('.carousel-control.left').click(function(e) {
        e.preventDefault();
        $('#carousel-example-generic').carousel('prev');
    });
    
    $('.carousel-control.right').click(function(e) {
        e.preventDefault();
        $('#carousel-example-generic').carousel('next');
    });
    
    // Indicator clicks
    $('.carousel-indicators li').click(function(e) {
        e.preventDefault();
        var slideTo = $(this).data('slide-to');
        $('#carousel-example-generic').carousel(slideTo);
    });
    
    // Auto-start carousel
    $('#carousel-example-generic').carousel('cycle');
});
