import { Meteor } from 'meteor/meteor';
import { WpHosts } from '../wp-hosts.js';

Meteor.publish('current.host', function() {
	return WpHosts.find();
});