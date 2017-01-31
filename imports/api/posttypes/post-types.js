/**
 * The admin-specific functionality of the plugin.
 *
 * @link       www.myvenuelive.com
 * @since      1.0.0
 *
 * @package    mVL_Reactent
 * @subpackage mVL_Reactent/reactent/api/posttypes
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { TAPi18n } from 'meteor/tap:i18n';

class PostTypesCollection extends Mongo.Collection {

	insert(postType, callback, language = 'en') {
		const localPostType = postType;
		// Process post type as necessary
		// (...)

		// Perform insert
		return super.insert(localPostType, callback);
	}

	remove(selector, callback) {
		return super.remove(selector, callback);
	}
}

export const PostTypes = new PostTypesCollection('rc-posttypes');

PostTypes.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

PostTypes.schema = new SimpleSchema ({
	_id: {
		type: String,
		regEx: SimpleSchema.RegEx.Id
	},
	ptName: {
		type: String
	},
	elements: {
		type: Array,
		optional: true,
		minCount: 1
	},
	"elements.$": {
		type: Object,
	},
	"elements.$.elName": {
		type: String,
	},
	"elements.$elLabel": {
		type: String
	},
	"elements.$elType": {
		type: String
	},
	"elements.$elOrder": {
		type: Number
	}

});

Factory.define('rc-posttypes', PostTypes, {});

