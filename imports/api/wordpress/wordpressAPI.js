import { HTTP } from 'meteor/http';
import { Mongo } from 'meteor/mongo';

export const Pages = new Mongo.Collection(null);

export class wpAPI {
	constructor(baseURL) {
		const baseObject = HTTP.call('HEAD', baseURL);
		console.log(baseObject);
		this.info = baseObject;
	}
}
