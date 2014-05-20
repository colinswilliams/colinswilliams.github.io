    var appStoreLink = 'http://apple.com',
        appLink = 'nikeplusrunning://x-callback-url/create/run?distance=5000.3';


    window.onload = function() {
        window.location = appLink;
        setTimeout("window.location = appStoreLink;", 1000);
    };
