/*
Zachery Hernandez
March 15, 2012
Deliverable 3
BlackBerry, Themes, SVG
Public Git Repository at: https://github.com/AlucardFair/SDI-Project-3
*/

// Device Specs //
var deviceSpecs = function(name) {
	// Private Data //
	var bold = "BlackBerry Bold 9700",
		resolution = "480px by 320px",
		icons = 6;
	var getName = function() { return name };
	var resolution = function() { return resolution };
	var icons = function() { return icons };
	return {
		// Public Data //
		"name": getName,
		"resolution": resolution,
		"icons": icons,
	};
};
var bold = deviceSpecs("BlackBerry Bold 9700");
var resolution = deviceSpecs("480px by 320px");
var icons = deviceSpecs(6);
console.log("The " + bold.name() +  " has a resolution of " + resolution.name() + ". This device has total of " + icons.name() + " icons on the home screen.");

// Custom Home Screen //
var customScreen = function(action, detail, limit) {
	// Private Data //
	var action = "sliding icon dock",
		detail = "mini icons",
		limit = 10;
	var getAction = function() { return action };
	var iconDetail = function() { return detail };
	var icons = function() { return limit };
	return {
		// Public Data //
		"action": getAction,
		"detail": iconDetail,
		"limit": icons,
	};
};
var action = customScreen("sliding icon dock");
var detail = customScreen("mini icons");
var limit = customScreen(10);
console.log("For this custom home screen, you will input a " + action.action() + " with " + detail.detail() + " for a new total of " + limit.limit() + " icons.");

alert("Creating a Custom Home Screen!");







