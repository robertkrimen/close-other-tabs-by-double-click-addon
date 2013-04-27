var windowUtils = require("window-utils");
 
windowUtils = new windowUtils.WindowTracker({
    onTrack: function (window) {
        if ("chrome://browser/content/browser.xul" != window.location) return;
        var gBrowser = window.gBrowser;
        gBrowser.mTabContainer.addEventListener( 'dblclick', function(event){
            if (event.button != 0) {
                return;
            }
            if (event.target.tagName != "tab") {
                return;
            }
            var tab = event.target;
            if ( !tab )
                return;
            var tabs = gBrowser.tabs;
            for ( var i = tabs.length - 1; i >= 0; --i ) {
                if ( tabs[i].pinned ) {
                    continue;
                }
                if ( tab !== tabs[i] ) {
                    gBrowser.removeTab( tabs[i], { animate: true } );
                }
            }
        }, false );
    }
});
