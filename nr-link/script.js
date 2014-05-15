$(function() {
   var appCheck = function() {
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location = "http://nike.com";
        }, 25);
        window.location = "nikeplusrunning://x-callback-url/create/run?distance=5000.3";
   },
   linkClick = function() {
        $('#applink').click(function() {
            appCheck();
        });
   },
   init = function() {
       linkClick();
   }();
});