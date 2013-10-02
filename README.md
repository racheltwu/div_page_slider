Div Page Slider
================

About
-----
DivPageSlider is a pluggable jQuery app that takes a list of divs and scrolls them all the way off the page horizontally.


HTML
----

1. Include jQuery, and a JS and CSS file:

        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
        <script type="text/javascript" src="js/div-page-slider/div-page-slider.min.js"></script>
        <link type="text/css" rel="stylesheet" media="screen" href="js/div-page-slider/div-page-slider.css" />

2. Create each sliding pane as a div. Wrap each div in another div with the class `sliding-pane` and a unique id.
    Separate each pane with a clearing div. Wrap all your panes in one div with the class `sliding-panes`.

        <div class="sliding-panes">
            <div id="one" class="sliding-pane"><div>
                <h1>One</h1>
                <p>Here is some content.</p>
            </div></div>
            <div class="clear"></div>
            <div id="two" class="sliding-pane"><div>
                <h1>Two</h1>
                <p>Here is some content.</p>
            </div></div>
            <div class="clear"></div>
            <div id="three" class="sliding-pane"><div>
                <h1>Three</h1>
                <p>Here is some content.</p>
            </div></div>
            <div class="clear"></div>
        </div>

3. Create a list of links to the id's of each pane in your nav.

        <a href="#one">One</a>
        <a href="#two">Two</a>
        <a href="#three">Three</a>


CSS
---

Give the class `sliding-pane` a width, and the div inside it the background.