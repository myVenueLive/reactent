import { FlowRouter } from 'meteor/kadira:flow-router';
import './new-post-type.html';
import { PostTypes } from '../../../api/posttypes/post-types.js';

Template.newPostType.onCreated(function() {
	const self = this;

});

AutoForm.hooks({
	newPostTypeForm: {
		onSuccess: function(formType, result) {
			FlowRouter.go('Reactent.admin')
		}
	}
});

Template.newPostType.helpers({
	postTypes() {
		return PostTypes;
	},
	postTypesSchema() {
		return PostTypes.schema;
	}
});

Template.newPostType.events({
	'click .closeAdd': function() {

	}
});