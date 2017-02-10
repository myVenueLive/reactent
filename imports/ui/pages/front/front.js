/* global alert */

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { TAPi18n } from 'meteor/tap:i18n';
import { T9n } from 'meteor/softwarerero:accounts-t9n';
import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';

// Werdpress
import { Pages } from '../../../api/wordpress/wordpressAPI.js';

// import '../api/wordpress/methods.js';

import './front.html';

Template.front.onCreated( function() {
	const self = this;
	self.queryLoaded = new ReactiveVar(false);
	self.testLoaded = new ReactiveVar(false);
  	Meteor.call('pages.get', 
		function(err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log(res);
				Session.set('pages', res);
				self.queryLoaded.set(true);
			};
	});
  	Meteor.call('test.get', 
		function(err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log(res);
				Session.set('test', res);
				self.testLoaded.set(true);
			};
	});

});
 
Template.front.helpers({
	queryLoaded() {
		return Template.instance().queryLoaded.get();
	},

	pages() {
		return Session.get('pages');
	},

	testphp() {
		return Session.get('test');
	}
});
