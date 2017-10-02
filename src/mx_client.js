
const IS_IE6 = navigator.userAgent.indexOf('MSIE 6') >= 0;

const IS_VML = navigator.appName.toUpperCase() == 'MICROSOFT INTERNET EXPLORER';

const IS_SVG = navigator.userAgent.indexOf('Firefox/') >= 0 || // FF and Camino
               navigator.userAgent.indexOf('Iceweasel/') >= 0 || // Firefox on Debian
               navigator.userAgent.indexOf('Seamonkey/') >= 0 || // Firefox-based
               navigator.userAgent.indexOf('Iceape/') >= 0 || // Seamonkey on Debian
               navigator.userAgent.indexOf('Galeon/') >= 0 || // Gnome Browser (old)
               navigator.userAgent.indexOf('Epiphany/') >= 0 || // Gnome Browser (new)
               navigator.userAgent.indexOf('AppleWebKit/') >= 0 || // Safari/Google Chrome
               navigator.userAgent.indexOf('Gecko/') >= 0 || // Netscape/Gecko
               navigator.userAgent.indexOf('Opera/') >= 0 || // Opera
               (document.documentMode != null && document.documentMode >= 9);

function isBrowserSupported() {
  return IS_VML || IS_SVG;
}

export default {
	/**
	 * Class: mxClient
	 *
	 * Bootstrapping mechanism for the mxGraph thin client. The production version
	 * of this file contains all code required to run the mxGraph thin client, as
	 * well as global constants to identify the browser and operating system in
	 * use. You may have to load chrome://global/content/contentAreaUtils.js in
	 * your page to disable certain security restrictions in Mozilla.
	 * 
	 * Variable: VERSION
	 *
	 * Contains the current version of the mxGraph library. The strings that
	 * communicate versions of mxGraph use the following format.
	 * 
	 * versionMajor.versionMinor.buildNumber.revisionNumber
	 * 
	 * Current version is 3.7.5.
	 */
	VERSION: '3.7.5',

	/**
	 * Variable: IS_IE
	 *
	 * True if the current browser is Internet Explorer 10 or below. Use <mxClient.IS_IE11>
	 * to detect IE 11.
	 */
	IS_IE: navigator.userAgent.indexOf('MSIE') >= 0,

	/**
	 * Variable: IS_IE6
	 *
	 * True if the current browser is Internet Explorer 6.x.
	 */
	IS_IE6,

	/**
	 * Variable: IS_IE11
	 *
	 * True if the current browser is Internet Explorer 11.x.
	 */
	IS_IE11: !!navigator.userAgent.match(/Trident\/7\./),

	/**
	 * Variable: IS_EDGE
	 *
	 * True if the current browser is Microsoft Edge.
	 */
	IS_EDGE: !!navigator.userAgent.match(/Edge\//),

	/**
	 * Variable: IS_QUIRKS
	 *
	 * True if the current browser is Internet Explorer and it is in quirks mode.
	 */
	IS_QUIRKS: navigator.userAgent.indexOf('MSIE') >= 0 && (document.documentMode == null || document.documentMode == 5),

	/**
	 * Variable: IS_EM
	 * 
	 * True if the browser is IE11 in enterprise mode (IE8 standards mode).
	 */
	IS_EM: 'spellcheck' in document.createElement('textarea') && document.documentMode == 8,

	/**
	 * Variable: VML_PREFIX
	 * 
	 * Prefix for VML namespace in node names. Default is 'v'.
	 */
	VML_PREFIX: 'v',

	/**
	 * Variable: OFFICE_PREFIX
	 * 
	 * Prefix for VML office namespace in node names. Default is 'o'.
	 */
	OFFICE_PREFIX: 'o',

	/**
	 * Variable: IS_NS
	 *
	 * True if the current browser is Netscape (including Firefox).
	 */
  	IS_NS: navigator.userAgent.indexOf('Mozilla/') >= 0 &&
  		navigator.userAgent.indexOf('MSIE') < 0 &&
  		navigator.userAgent.indexOf('Edge/') < 0,

	/**
	 * Variable: IS_OP
	 *
	 * True if the current browser is Opera.
	 */
  	IS_OP: navigator.userAgent.indexOf('Opera/') >= 0 ||
  		navigator.userAgent.indexOf('OPR/') >= 0,

	/**
	 * Variable: IS_OT
	 *
	 * True if -o-transform is available as a CSS style, ie for Opera browsers
	 * based on a Presto engine with version 2.5 or later.
	 */
  	IS_OT: navigator.userAgent.indexOf('Presto/') >= 0 &&
  		navigator.userAgent.indexOf('Presto/2.4.') < 0 &&
  		navigator.userAgent.indexOf('Presto/2.3.') < 0 &&
  		navigator.userAgent.indexOf('Presto/2.2.') < 0 &&
  		navigator.userAgent.indexOf('Presto/2.1.') < 0 &&
  		navigator.userAgent.indexOf('Presto/2.0.') < 0 &&
  		navigator.userAgent.indexOf('Presto/1.') < 0,
  	
	/**
	 * Variable: IS_SF
	 *
	 * True if the current browser is Safari.
	 */
  	IS_SF: navigator.userAgent.indexOf('AppleWebKit/') >= 0 &&
  		navigator.userAgent.indexOf('Chrome/') < 0 &&
  		navigator.userAgent.indexOf('Edge/') < 0,
  	
	/**
	 * Variable: IS_IOS
	 * 
	 * Returns true if the user agent is an iPad, iPhone or iPod.
	 */
  	IS_IOS: (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false),
  		
	/**
	 * Variable: IS_GC
	 *
	 * True if the current browser is Google Chrome.
	 */
  	IS_GC: navigator.userAgent.indexOf('Chrome/') >= 0 &&
		navigator.userAgent.indexOf('Edge/') < 0,
	
	/**
	 * Variable: IS_CHROMEAPP
	 *
	 * True if the this is running inside a Chrome App.
	 */
  	IS_CHROMEAPP: window.chrome != null && chrome.app != null && chrome.app.runtime != null,
		
	/**
	 * Variable: IS_FF
	 *
	 * True if the current browser is Firefox.
	 */
  	IS_FF: navigator.userAgent.indexOf('Firefox/') >= 0,
  	
	/**
	 * Variable: IS_MT
	 *
	 * True if -moz-transform is available as a CSS style. This is the case
	 * for all Firefox-based browsers newer than or equal 3, such as Camino,
	 * Iceweasel, Seamonkey and Iceape.
	 */
  	IS_MT: (navigator.userAgent.indexOf('Firefox/') >= 0 &&
		navigator.userAgent.indexOf('Firefox/1.') < 0 &&
  		navigator.userAgent.indexOf('Firefox/2.') < 0) ||
  		(navigator.userAgent.indexOf('Iceweasel/') >= 0 &&
  		navigator.userAgent.indexOf('Iceweasel/1.') < 0 &&
  		navigator.userAgent.indexOf('Iceweasel/2.') < 0) ||
  		(navigator.userAgent.indexOf('SeaMonkey/') >= 0 &&
  		navigator.userAgent.indexOf('SeaMonkey/1.') < 0) ||
  		(navigator.userAgent.indexOf('Iceape/') >= 0 &&
  		navigator.userAgent.indexOf('Iceape/1.') < 0),

	/**
	 * Variable: IS_SVG
	 *
	 * True if the browser supports SVG.
	 */
  	IS_SVG,

	/**
	 * Variable: NO_FO
	 *
	 * True if foreignObject support is not available. This is the case for
	 * Opera, older SVG-based browsers and all versions of IE.
	 */
  	NO_FO: !document.createElementNS || document.createElementNS('http://www.w3.org/2000/svg',
  		'foreignObject') != '[object SVGForeignObjectElement]' || navigator.userAgent.indexOf('Opera/') >= 0,

	/**
	 * Variable: IS_VML
	 *
	 * True if the browser supports VML.
	 */
  	IS_VML,

	/**
	 * Variable: IS_WIN
	 *
	 * True if the client is a Windows.
	 */
  	IS_WIN: navigator.appVersion.indexOf('Win') > 0,

	/**
	 * Variable: IS_MAC
	 *
	 * True if the client is a Mac.
	 */
  	IS_MAC: navigator.appVersion.indexOf('Mac') > 0,

	/**
	 * Variable: IS_TOUCH
	 * 
	 * True if this device supports touchstart/-move/-end events (Apple iOS,
	 * Android, Chromebook and Chrome Browser on touch-enabled devices).
	 */
  	IS_TOUCH: 'ontouchstart' in document.documentElement,

	/**
	 * Variable: IS_POINTER
	 * 
	 * True if this device supports Microsoft pointer events (always false on Macs).
	 */
  	IS_POINTER: window.PointerEvent != null && !(navigator.appVersion.indexOf('Mac') > 0),

	/**
	 * Variable: IS_LOCAL
	 *
	 * True if the documents location does not start with http:// or https://.
	 */
  	IS_LOCAL: document.location.href.indexOf('http://') < 0 &&
  			  document.location.href.indexOf('https://') < 0,

	/**
	 * Function: isBrowserSupported
	 *
	 * Returns true if the current browser is supported, that is, if
	 * <mxClient.IS_VML> or <mxClient.IS_SVG> is true.
	 * 
	 * Example:
	 * 
	 * (code)
	 * if (!mxClient.isBrowserSupported())
	 * {
	 *   mxUtils.error('Browser is not supported!', 200, false);
	 * }
	 * (end)
	 */
	isBrowserSupported,

	/**
	 * Function: link
	 *
	 * Adds a link node to the head of the document. Use this
	 * to add a stylesheet to the page as follows:
	 *
	 * (code)
	 * mxClient.link('stylesheet', filename);
	 * (end)
	 *
	 * where filename is the (relative) URL of the stylesheet. The charset
	 * is hardcoded to ISO-8859-1 and the type is text/css.
	 * 
	 * Parameters:
	 * 
	 * rel - String that represents the rel attribute of the link node.
	 * href - String that represents the href attribute of the link node.
	 * doc - Optional parent document of the link node.
	 */
	link(rel, href, doc)
	{
		doc = doc || document;

		// Workaround for Operation Aborted in IE6 if base tag is used in head
		if (IS_IE6)
		{
			doc.write('<link rel="' + rel + '" href="' + href + '" charset="UTF-8" type="text/css"/>');
		}
		else
		{	
			var link = doc.createElement('link');
			
			link.setAttribute('rel', rel);
			link.setAttribute('href', href);
			link.setAttribute('charset', 'UTF-8');
			link.setAttribute('type', 'text/css');
			
			var head = doc.getElementsByTagName('head')[0];
			head.appendChild(link);
		}
	},
	
	/**
	 * Function: include
	 *
	 * Dynamically adds a script node to the document header.
	 * 
	 * In production environments, the includes are resolved in the mxClient.js
	 * file to reduce the number of requests required for client startup. This
	 * function should only be used in development environments, but not in
	 * production systems.
	 */
	/*include(src)
	{
		document.write('<script src="'+src+'"></script>');
	},*/
	
	/**
	 * Function: dispose
	 * 
	 * Frees up memory in IE by resolving cyclic dependencies between the DOM
	 * and the JavaScript objects.
	 */
	// dispose()
	// {
	// 	// Cleans all objects where listeners have been added
	// 	for (var i = 0; i < mxEvent.objects.length; i++)
	// 	{
	// 		if (mxEvent.objects[i].mxListenerList != null)
	// 		{
	// 			mxEvent.removeAllListeners(mxEvent.objects[i]);
	// 		}
	// 	}
	// }
};
