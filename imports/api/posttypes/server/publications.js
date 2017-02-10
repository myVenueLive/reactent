import { Meteor } from 'meteor/meteor';
import { PostTypes } from '../post-types.js';

Meteor.publish('host.post-types', function() {
	return PostTypes.find();
});
