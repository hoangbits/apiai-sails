/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {
    let textRequest = req.body.textRequest.toString();
    console.log(textRequest);

    var apiai = require('apiai');

    var app = apiai('0648c151233b4bdcb8f8fe7c33243efc');

    var request = app.textRequest(textRequest, {
      sessionId: '99'
    });

    request.on('response', function(response) {
      console.log(response);
      res.ok(response);
    });

    request.on('error', function(error) {
      console.log(error);
    });

    request.end();
  }
};
