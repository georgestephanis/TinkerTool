
this.tinkerTool = this.tinkerTool || {};

window.tinkerTool.views = (function( window, $, _, Backbone ) {
		'use strict';

		var views = {};

		views.Forms = Backbone.View.extend({

			template : $('#tinkerTool_template').html(),

			notification_template : $('tinkerTool_notification').html(),

			update : function() {
				console.log( 'views.Forms.update' );
				this.$el.find( 'textarea' ).val( this.model.get( 'notes' ) );
				return this;
			},

			render : function() {
				console.log( 'views.Forms.render' );
				this.$el.html( _.template( this.template, this.model.attributes ) );
				return this;
			},

			notification : function( data ) {
				var html = _.template( this.notification_template, data );
				$( html ).appendTo( this.$el ).fadeOut( 400, function() {
					$(this).remove();
				} );
				return this;
			},

			saving_notification : function() {
				return this.notification( {
					class_name : 'saving',
					content    : 'Saving&hellip;'
				} );
			},

			loaded_notification : function() {
				return this.notification( {
					class_name : 'loaded',
					content    : 'Loaded'
				} );
			},

			initialize : function() {
			//	For the moment, don't re-render on re-initialize, as
			//	the data should presently be a slave to the textarea.
			//	this.listenTo( this.model, 'change', this.render );
				this.listenTo( this.model, 'change', this.update );

				$('#notes').on( 'blur',  'textarea',       this.model.saveToLocalStorage );
				$('#notes').on( 'click', 'button.save',    this.model.saveToLocalStorage );
				$('#notes').on( 'focus', 'textarea',       this.model.loadFromLocalStorage );
				$('#notes').on( 'click', 'button.refresh', this.model.loadFromLocalStorage );

				return this;
			}

		});

		return views;

})( this, jQuery, _, Backbone );
