window.addEventListener( 'load', function(){
    getBrowser().mTabContainer.addEventListener( 'dblclick', function(event){
		var tab = document.evaluate(
	             'ancestor-or-self::*[local-name()="tab"]',
	              event.originalTarget,
	              null,
	              XPathResult.FIRST_ORDERED_NODE_TYPE,
	              null
	            ).singleNodeValue;
        if ( !tab )
            return;
        var tabs = gBrowser.tabs;
        for ( var i = tabs.length - 1; i >= 0; --i ) {
            if ( tab !== tabs[i] )
                gBrowser.removeTab( tabs[i], { animate: true } );
        }
    }, false );
}, false );
