import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { WpHosts } from '../hosts/wp-hosts.js';

export const ownerSchema = new SimpleSchema({
	ownerHost: {
		type: String,
		label: "Host",
		index: 1,
		autoValue: function () {
			return WpHosts.thisHost.hostId;
		}
	},
	createdBy: {
		type: String,
		label: "Created By",
		autoValue: function() {
			if (this.isInsert) {
				return "andrz3jsid";
			} else if (this.isUpsert) {
				return {$setOnInsert: "andrz3jsid"};
			}
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
      		if (this.isInsert) {
        		return new Date();
      		} else if (this.isUpsert) {
        		return {$setOnInsert: new Date()};
      		};
      	}
	},
	updatedBy: {
		type: String,
		label: "Updated By",
		autoValue: function() {
			return "andrz3jsid";
		}
	},
	updatedAt: {
		type: Date,
		label: "Updated At",
		autoValue: function() {
			return new Date();
		}
	}

});
