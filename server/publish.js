// import { HTTP } from 'meteor/http';
// import { Pages } from '../imports/api/wordpress/wordpressAPI.js';

// const POLL_INTERVAL = 5000;

// Meteor.publish('wp-pages', function() {
//   const publishedKeys = {};
//   const REST_URL = 'http://www.myvenuelive.com/wp-json/wp/v2/pages'
//   const result = HTTP.get(REST_URL);
//   for (var i = 0; i < result.data.length; i++) {
//   	Pages.insert(result.data[i]);
//   };
//   return Pages.find({});


  // const poll = () => {
  //   // Let's assume the data comes back as an array of JSON documents, with an _id field, for simplicity
  //   const data = HTTP.get(REST_URL);

  //   const numOfResults = data.headers['x-wp-total'];
  //   const compare = data.data.length;
  //   console.log('head :', numOfResults,'- length:', compare);
  //   for (let i = 0; i < data.data.length; i++) {
  //   	let currentRec = {
  //   		id: data.data[i].id,
  //   		excerpt: {
  //   			rendered: data.data[i].title.rendered
  //   		}
  //   	};
		// if (publishedKeys[data.data[i].id]) {
		// 	this.changed(Pages, data.data[i].id, currentRec);
		// } else {
		// 	publishedKeys[data.data[i].id] = true;
		// 	this.added(Pages, data.data[i].id, currentRec);
		// }
  //   };
    // result.forEach((doc) => {
    //   if (publishedKeys[doc.id]) {
    //     this.changed(Pages, doc.id, doc);
    //   } else {
    //     publishedKeys[doc.id] = true;
    //     this.added(Pages, doc.id, doc);
    //   }
  //   // });
  // };

  // poll();
  // this.ready();

  // const interval = Meteor.setInterval(poll, POLL_INTERVAL);

  // this.onStop(() => {
  //   Meteor.clearInterval(interval);
  // });
// });
