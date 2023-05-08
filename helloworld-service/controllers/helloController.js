const service = require('../services/helloService.js');

module.exports.funchello = function funchello(req, res) {
    service.funchello(req, res);
}

