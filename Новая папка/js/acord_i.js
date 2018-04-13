$('.accordion-item__foot .heading__foot').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item__foot').hasClass('active__foot')) {
        // Remove active classes
        $('.accordion-item__foot').removeClass('active__foot');
    } else {
        // Remove active classes
        $('.accordion-item__foot').removeClass('active__foot');

        // Add the active class
        $(this).closest('.accordion-item__foot').addClass('active__foot');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(500);
    $('.accordion-item__foot .content__foot').not($content).slideUp('slow');
});