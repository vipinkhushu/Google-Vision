// var vision = require('@google-cloud/vision');
// var storage = require('@google-cloud/storage')();
//
// // If you're using the google-cloud meta-package:
// var gcloud = require('google-cloud');
// var storage = gcloud.storage();
//
// // Authenticating on a global basis.
// var projectId = 'crypto-lodge-184714'; // E.g. 'grape-spaceship-123'
//
// // var gcloud = require('google-cloud')({
// //   projectId: projectId,
// //
// //   // The path to your key file:
// //   keyFilename: 'key.json'
// //
// //   // Or the contents of the key file:
// //   credentials: require('key.json')
// //
// //   // For any APIs that accept an API key:
// //   key: '...'
// // });
//
// var visionClient = vision({
//   projectId: 'crypto-lodge-184714',
//   keyFilename: 'key.json'
// });
//
// var gcsImageUri = 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg';
// var source = {
//     gcsImageUri : gcsImageUri
// };
// var image = {
//     source : source
// };
// var type = vision.v1.types.Feature.Type.FACE_DETECTION;
// var featuresElement = {
//     type : type
// };
// var features = [featuresElement];
// var requestsElement = {
//     image : image,
//     features : features
// };
// var requests = [requestsElement];
// visionClient.batchAnnotateImages({requests: requests}).then(function(responses) {
//     var response = responses[0];
//     console.log(response);
//     // doThingsWith(response)
// })
// .catch(function(err) {
//     console.error(err);
// });



var gcloud = require('google-cloud')({
  keyFilename: 'key.json',
  projectId: 'crypto-lodge-184714'
});
var vision = gcloud.vision();

var image = 'https://everydaypowerblog.com/wp-content/uploads/2015/01/president-barack-obama-quotes-5.jpg';

vision.detectText(image, function(err, text, apiResponse) {
  console.log (text);
});
