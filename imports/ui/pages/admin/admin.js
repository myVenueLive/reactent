import { FlowRouter } from 'meteor/kadira:flow-router';
import { PostTypes } from '../../../api/posttypes/post-types.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import './admin.html';

Template.admin.onCreated(function() {
	const self = this;
	Session.set('addMode', true);
	self.autorun(function() {
		self.subscribe('host.post-types');
	});
});

Template.admin.helpers({
  test(postType) {

    const typeDefs = [];
    typeDefs["String"] = String;
    typeDefs["Number"] = Number;
    typeDefs["Date"] = Date;
    var fieldNames = ['postTypeId', 'postTypeName'];
    var fieldDefs = [
      {type: String, defaultValue: postType._id, index: 1, autoform: {omit: true}},
      {type: String, defaultValue: postType.ptName, autoform: {omit: true}}
    ];

    // Sort array of fields in priority order
    postType.postfields.sort(function (f, g) {
      return g.priority - f.priority;
    });
    console.log(postType.postfields);

    // create object elements
    for (var i = postType.postfields.length - 1; i >= 0; i--) {
      fieldNames.push(postType.postfields[i].name);
      postType.postfields[i].type = typeDefs[postType.postfields[i].type];
      fieldDefs.push(_.omit(postType.postfields[i],'name','priority'));
    };
    console.log(fieldNames);
    console.log(_.object(fieldNames, fieldDefs));
    const testSchema = new SimpleSchema(_.object(fieldNames, fieldDefs));
    console.log(testSchema);
    console.log(PostTypes.schema);

    return '>>';

  },
  postTypes() {
  	return PostTypes.find({});
  }
});

Template.admin.events({
	'click .addRecord': function() {
		FlowRouter.go('Reactent.admin.newPostType')
	}
});