$(function() {
    function getSlideAmount(sliding_pane) {
        return $(document).width() - sliding_pane.find('div').offset().left;
    }
    var sliding_panes = $('.sliding-pane');
    // Hide all divs and place at right of screen
    sliding_panes.each(function() {
        $(this).hide();
        $(this).css('margin-left', getSlideAmount($(this)));
    });
    // Move ID tag for each pane into rel tag to avoid the page jumping around when hash changes
    sliding_panes.each(function(){
        $(this).attr('rel', $(this).attr('id'));
        $(this).removeAttr('id');
    });
    // Slide is called once on window load and on every hashchange event
    function slide(){
        function slideCurrentPaneIn() {
            var currentPane = $('div[rel="' + window.location.hash.replace(/#/g, '') + '"]');
            currentPane.addClass('current');
            currentPane.show();
            currentPane.animate({'margin-left': '0'}, 500);
        }
        // If url contains hash
        if (window.location.hash){
            // Get pane that was previously showing
            var previousPane = $('.sliding-pane').filter('.current');
            if (previousPane.html()) {
                // If it exists, slide it out
                previousPane.animate({'margin-left': 0 - getSlideAmount(previousPane)}, 500, 'swing', function() {
                    previousPane.hide();
                    previousPane.css('margin-left', getSlideAmount(previousPane));
                    previousPane.removeClass('current');
                    // Then slide current pane in
                    slideCurrentPaneIn();
                });
            // Otherwise just slide current pane in
            } else { slideCurrentPaneIn(); }
        } else { // Otherwise set the hash to the first item triggering hashchange event
            window.location.hash = sliding_panes.first().attr('rel');
        }
    }
    window.onhashchange = slide;
    slide();
});