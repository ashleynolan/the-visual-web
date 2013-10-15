/*	Author:
		Ashley Nolan
*/

'use strict';

require.config({

	baseUrl: "/js/",

	// make components more sensible
	paths: {
		font: 'components/require-plugins/font',
		propertyParser: 'components/require-plugins/propertyParser'
		//text: 'components/require-plugins/text',
		//fastclick: 'components/fastclick/fastclick',


		// underscore: 'components/underscore/underscore',

		// selectivizr: 'components/selectivizr/selectivizr',
		// modernizr: 'components/modernizr/modernizr.min',
		// transit: 'components/transit/transit-min',
	},

	shim: {
		// 'underscore': {
		// 	exports: '_'
		// },
		// 'modernizr': {
		// 	exports: 'Modernizr'
		// },
		// 'transit': {
		// 	deps: ['jquery']
		// }
	},

	name: 'main'
});

require([
	'font!typekit, id:[spu0ljn]]',
	'font!monotype, projectId:[7388dc95-e286-4126-9c26-6026374b9d93], version: [12345]'
], function () {

	// Create a closure to maintain scope of TVW
	;(function (TVW) {

		// $(function() {
		// 	// Any globals go here in CAPS (but avoid if possible)

		// 	// follow a singleton pattern
		// 	// (http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)

		// 	TVW.Config.init();

		// });// END DOC READY



		TVW.Config = {
			variableX : '', // please don't keep me - only for example syntax!

			init : function () {
				console.debug('Kickoff is running');
			}
		};

		// Example module
		/*
		TVW.Ui = {
			init : function() {
				TVW.Ui.modal();
			},

			modal : function() {

			}
		};
		*/

	})(window.TVW = window.TVW || {});

});

