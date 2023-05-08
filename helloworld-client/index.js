var Client = require('node-rest-client').Client;

var client = new Client();

// direct way
client.get("http://localhost:9090/hello", function (data, response) {
	// parsed response body as js object
	console.log(data);
	// raw response
	//console.log(response);
});

client.get("http://localhost:9090/hello/pippo", function (data, response) {
	// parsed response body as js object
	console.log(data);
	// raw response
	//console.log(response);
});
