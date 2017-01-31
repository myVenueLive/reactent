import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { PostTypes } from './post-types.js';

const pt_id_only = new SimpleSchema({
	postTypeId: PostTypes.simpleSchema('_id'),
}).validator({clean: true, filter: false});

export const insert = new ValidatedMethod({
	name: 'postTypes.insert'
	validate: PostTypes.schema.validator({ clean: true, filter: false }),
	run(newPostType) {
		return PostTypes.instert(newPostType, null);
	},
});

export const remove = new ValidatedMethod({
	name: 'postTypes.remove',
	validate: pt_id_only,
	run({postTypeId}) {
		const postType = PostTypes.findOne(postTypeId);
		// Add code to validate if removal should be allowed

		PostTypes.remove(postTypeId);
	},
});

export const update = new ValidatedMethod({
	name: 'postTypes.update'
	validate: PostTypes.schema.validator({ clean: true, filter: false }),
	run(newPostType) {
		return PostTypes.update(newPostType, null);
	},
});