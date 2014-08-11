'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Site Schema
 */
var SiteSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Site name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Site', SiteSchema);