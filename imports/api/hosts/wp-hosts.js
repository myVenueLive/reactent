import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

class HostCollection extends Mongo.Collection {

	insert(host, callback) {
		const localHost = host
		// Process post type as necessary
		// (...)

		// Perform insert
		return super.insert(localHost, callback);
	}

	remove(selector, callback) {
		return super.remove(selector, callback);
	}
}

export const WpHosts = new HostCollection('client_hosts');

WpHosts.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

WpHosts.schema = new SimpleSchema({
	hostName: {
		type: String
	},
	hostBase: {
		type: String
	},
	pluginType: {
		type: String
	},
	pluginVersion: {
		type: String
	},
	isActive: {
		type: String
	}
});

WpHosts.thisHost = {
	hostId: 'only4mvlh05t',
	hostName: 'myVenueLive',
	hostBase: 'http://www.myvenuelive.com'
}
