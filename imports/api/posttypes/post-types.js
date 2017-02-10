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
import { ownerSchema } from '../audit/audit.js';

export const PostTypes = new Mongo.Collection('post_types');

PostTypes.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

PostTypes.schema = new SimpleSchema ({
	ptName: {
		type: String,
		label: "Post type name"
	},
	description: {
		type: String,
		label: "Description",
		defaultValue: ""
	},
	postfields: {
		type: Array,
		label: "Fields",
		optional: true,
		minCount: 1
	},
	"postfields.$": {
		type: Object
	},
	"postfields.$.name": {
		type: String,
		label: "Field name"
	},
	"postfields.$.label": {
		type: String,
		label: "Label"
	},
	"postfields.$.type": {
		type: String,
		label: "Type",
		autoform: {
			type: "select",
			options: function () {
				return [
					{label: "String", value: "String"},
					{label: "Number", value: "Number"},
					{label: "Date", value: "Date"},
				];
			}
		}
	},
	"postfields.$.priority": {
		type: Number,
		label: "Priority"
	},
	postCount: {
		type: Number,
		label: "Post count",
		defaultValue: 0,
		autoform: {
			omit: true
		}
	},
	audit: {
		type: ownerSchema,
		autoform: {
			omit: true
		}
	}

});

PostTypes.attachSchema(PostTypes.schema);

Factory.define('rc-posttypes', PostTypes, {});

