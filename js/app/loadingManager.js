/**
 * Loading Manager
 *
 */
define([ "three", "loadingScreen" ], function ( THREE, loadingScreen ) {

    'use strict';

	var manager = new THREE.LoadingManager();

	manager.onProgress = function ( item, loaded, total ) {
		// this gets called after an object has been loaded
		// console.log( item, loaded, total );
	};        
	manager.onError = function ( error ) {
		// this gets called after an object loading Error
		console.warn( "Fehler", error );
    };
	manager.onLoad = function () {
		// everything is loaded
		// Hide loading screen
		console.log("loaded");
		loadingScreen.fadeOut();
		App.animate();

	};

	return manager;

});