import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Session } from 'meteor/session';
// import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';
import { HTTP } from 'meteor/http';


Meteor.methods({
	'pages.get'() {
		const REST_URL = 'http://www.myvenuelive.com/wp-json/wp/v2/pages';
		const response = HTTP.get(REST_URL); 

		// 	function (error, response) {
		// 	if (error) {
		// 		conole.log(error);
		// 		throw new Meteor.Error('pages.get.error', error);
		// 	} else {
		// 		console.log(response.data);
		// 		return {dupa: 'blada'}
		// 		// return response.data;
		// 	};
		// });
		return response.data;
	},

	'test.get'() {
		const REST_URL = 'http://localhost/test/test.php';
		const response = HTTP.get(REST_URL);
		console.log(response);
		return response.content;
	}
});
