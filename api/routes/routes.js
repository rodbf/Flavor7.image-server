module.exports = function(server){
	var controller = require("../controllers/controller");
	
	server.route('/recipes/images/:id/:file')
		.get(controller.getImage);
};