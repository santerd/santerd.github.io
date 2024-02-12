$(document).ready(function() {
    var envelope = $('#envelope');
    var card = $('#card');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        reset();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        envelope.fadeOut(2000, function() {
            card.css({'visibility':'visible'}).hide().fadeIn();
        });
    }

    function reset() {
        card.fadeOut(1000, function() {
            envelope.fadeIn(1000);
            envelope.addClass("close").removeClass("open");
        });
        
    }
});
