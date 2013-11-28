
( function( window, $, _, models, views ) {
	'use strict';

	var notes_model, notes_view;

	notes_model = new models.Notes();

	notes_view = new views.Forms( {
		el    : '#notes',
		model : notes_model
	} ).render();

} ) ( this, jQuery, _, this.tinkerTool.models, this.tinkerTool.views );
