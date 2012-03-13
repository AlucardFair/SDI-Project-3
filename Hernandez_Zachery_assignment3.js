var deviceSpecs = function(name) {
	var getName = function() { return name};
	return {
		"name": getName,
	};
};
var bold = deviceSpecs("BlackBerry Bold 9700");
console.log(bold.name());
console.log(deviceSpecs.name);