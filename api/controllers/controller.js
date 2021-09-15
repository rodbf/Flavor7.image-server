const path = require('path');

const db = path.join(__dirname, '../../db/recipes');

function sendImage(res, result){
	console.log(result);
	let fileName = result.file+".jpg"
	const options = {
		root: path.join(db, result.recipeId)
	}
	res.sendFile(fileName, options);
}

exports.getImage = (req, res) => {
	let result = {
		file: req.params.file,
		recipeId: req.params.id
	}
	sendImage(res, result);
}