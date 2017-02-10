import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Layouts
import '../../ui/layouts/public-layout.js';

// Templates
import '../../ui/pages/front/front.js';
import '../../ui/pages/admin/admin.js';
import '../../ui/pages/admin/new-post-type.js';

FlowRouter.route('/', {
	name: 'Reactent.home',
	action: function() {

		BlazeLayout.render('publicLayout', {main: 'front'});
	},
});

FlowRouter.route('/rc-admin', {
	name: 'Reactent.admin',
	action: function() {

		BlazeLayout.render('publicLayout', {main: 'admin'});
	},
});

FlowRouter.route('/rc-admin/new-post-type', {
	name: 'Reactent.admin.newPostType',
	action: function() {

		BlazeLayout.render('publicLayout', {main: 'newPostType'});
	},
});


