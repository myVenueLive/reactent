import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { WpHosts } from './wo-hosts.js';

const wh_id_only = new SimpleSchema({
	postTypeId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id
	},
}).validator({clean: true, filter: false});

export const insert = new ValidatedMethod({
	name: 'wphosts.insert',
	validate: WpHosts.schema.validator({ clean: true, filter: false }),
	run(newHost) {
		// Add code to validate if insert should be allowed
		return WpHosts.insert(newHost, null);
	},
});

export const remove = new ValidatedMethod({
	name: 'wphosts.remove',
	validate: wh_id_only,
	run({hostId}) {
		const host = WpHosts.findOne(hostId);
		// Add code to validate if removal should be allowed

		WpHosts.remove(hostId);
	},
});

export const update = new ValidatedMethod({
	name: 'wphosts.update',
	validate: WpHosts.schema.validator({ clean: true, filter: false }),
	run(newHost) {
		// Add code to validate if insert should be allowed
		return WpHosts.update(newHost, null);
	},
});