module.exports.funchellouser = function funchellouser(req, res) {
    res.send({
        message: 'Hello ' + req.params.user
    });
}

