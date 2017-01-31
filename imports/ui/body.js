import { Template } from 'meteor/templating';
import { Pages } from '../api/wordpress/wordpressAPI.js';
// import '../api/wordpress/methods.js';

import './body.html';

Template.body.onCreated( function() {
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
 
Template.body.helpers({
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
