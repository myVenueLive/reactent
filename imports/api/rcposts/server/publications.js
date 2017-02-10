import { Meteor } from 'meteor/meteor';
import { rcPosts } from '../rc-posts.js';

Meteor.publish('host.rc-posts', function(host) {
	return rcPosts.find({"audit.ownerHost": host});
});

Meteor.publish('typeof.rc-posts' function(typeId) {
	return rcPosts.find({postTypeId: typeId});
});

Meteor.publish('single.rc-posts' function(postId) {
	return rcPosts.find({_id: postId});
});