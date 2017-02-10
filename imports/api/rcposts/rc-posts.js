/**
 * The Reactent post specific functionality of the plugin.
 *
 * @link       www.myvenuelive.com
 * @since      1.0.0
 *
 * @package    mVL_Reactent
 * @subpackage mVL_Reactent/reactent/api/reposts
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { ownerSchema } from '../audit/audit.js';
import { WpHosts } from '../hosts/wp-hosts.js';
import { PostTypes } from '../posttypes/post-types.js';

class PostCollection extends Mongo.Collection {

	constructor(collectionName) {
		super(collectionName);
		const currentHost = WpHosts.thisHost.hostId;
		this.autorun(function () {
			this.subscribe('host.post-types');
		});
	}

	get postSchema(post) {
		new SimpleSchema({
			postTypeId: {
				type: String,
				regEx: SimpleSchema.RegEx.Id
			}
		}).validate(_.pick(post, 'postTypeId'));

		return postTypeSchema(post.postTypeId);
		
	}

	get typeSchema(typeId) {
		new SimpleSchema({
			postTypeId: {
				type: String,
				regEx: SimpleSchema.RegEx.Id
			}
		}).validate({postTypeId: typeId});

		return postTypeSchema(typeId);
	}

	postTypeSchema(postTypeId) {
		
		const postType = PostTypes.findOne({_id: postTypeId});
		const typeDefs = [];
		typeDefs["String"] = String;
		typeDefs["Number"] = Number;
		typeDefs["Date"] = Date;
		var fieldNames = ['postTypeId', 'postTypeName', 'audit'];
		var fieldDefs = [
			{type: String, defaultValue: postType._id, index: 1, autoform: {omit: true}},
			{type: String, defaultValue: postType.ptName, autoform: {omit: true}}
			{type: ownerSchema, autoform: {omit: true}}
		];

		// Sort array of fields in priority order
		postType.postfields.sort(function (f, g) {
			return g.priority - f.priority;
		});

		// create object elements
		for (var i = postType.postfields.length - 1; i >= 0; i--) {
			fieldNames.push(postType.postfields[i].name); 
			postType.postfields[i].type = typeDefs[postType.postfields[i].type];
			fieldDefs.push(_.omit(postType.postfields[i],'name','priority'));
		};
		return _.object(fieldNames, fieldDefs);

	}

}


export const rcPosts = new PostCollection('rc_posts');

rcPosts.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

