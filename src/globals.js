export default {
/**
* Variable: mxLoadResources
* 
* Optional global config variable to toggle loading of the two resource files
* in <mxGraph> and <mxEditor>. Default is true. NOTE: This is a global variable,
* not a variable of mxClient.
*
* (code)
* <script type="text/javascript">
* 		var mxLoadResources = false;
* </script>
* <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
* (end)
*/
  mxLoadResources: typeof(window.mxLoadResources) === 'undefined',

/**
* Variable: mxForceIncludes
* 
* Optional global config variable to force loading the JavaScript files in
* development mode. Default is undefined. NOTE: This is a global variable,
* not a variable of mxClient.
*
* (code)
* <script type="text/javascript">
* 		var mxLoadResources = true;
* </script>
* <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
* (end)
*/
  mxForceIncludes: typeof(window.mxForceIncludes) === 'undefined',

/**
* Variable: mxResourceExtension
* 
* Optional global config variable to specify the extension of resource files.
* Default is true. NOTE: This is a global variable, not a variable of mxClient.
*
* (code)
* <script type="text/javascript">
* 		var mxResourceExtension = '.txt';
* </script>
* <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
* (end)
*/
mxResourceExtension: typeof(window.mxResourceExtension) === 'undefined' ? '.txt' : window.mxResourceExtension,

/**
* Variable: mxLoadStylesheets
* 
* Optional global config variable to toggle loading of the CSS files when
* the library is initialized. Default is true. NOTE: This is a global variable,
* not a variable of mxClient.
*
* (code)
* <script type="text/javascript">
* 		var mxLoadStylesheets = false;
* </script>
* <script type="text/javascript" src="/path/to/core/directory/js/mxClient.js"></script>
* (end)
*/
  mxLoadStylesheets: typeof(window.mxLoadStylesheets) === 'undefined',
};