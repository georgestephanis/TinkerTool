
this.tinkerTool = this.tinkerTool || {};

window.tinkerTool.models = (function( window, Backbone ) {
	'use strict';

	var models = {};

	models.Notes = Backbone.Model.extend({

		localStorageKey : 'tinkerTool_notes',

		notes : [],

		initialize : function() {
			this.listenTo( this, 'change', this.saveToLocalStorage );

			if ( ! this.get( 'notes' ) ) {
				this.loadFromLocalStorage();
			}
			return this;
		},

		saveToLocalStorage : function() {
			console.log( this );
		//	this.trigger( 'pre_save' );
			localStorage.setItem( this.localStorageKey, this.get( 'notes' ) );
		//	this.trigger( 'saved' );
			return this;
		},

		loadFromLocalStorage : function() {
			console.log( this );
		//	this.trigger( 'pre_load' );
			this.set( 'notes', localStorage.getItem( this.localStorageKey ) || '' );
		//	this.trigger( 'loaded' );
			return this;
		}

	});

	return models;

})( this, Backbone );
