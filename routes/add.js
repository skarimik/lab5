var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;
	var obj =
	{
		"name": name,
		"description": description,
		"imageURL": "lorempixel.com/400/400/people"			
	}
	data.friends.push(obj);
	console.log(obj);

	res.render('index',data);
 }