$(function() {
    var appStoreLink = "http://apple.com";

    var appCheck = function(fail) {
        var now = new Date().valueOf();
        setTimeout(function() {
            console.log('timeout');
            if (new Date().valueOf() - now > 500){
                window.location = appStoreLink;
                console.log('should send');
            }
        }, 500);
        //window.location = "nikeplusrunning://x-callback-url/create/run?distance=5000.3";
    },
    linkClick = function() {
        $('#applink').click(function(e) {
            e.preventDefault();
            appCheck(appStoreLink);
        });
    },
    init = function() {
        linkClick();
    }();
});