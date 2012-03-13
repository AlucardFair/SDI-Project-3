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
var customScreen = function(custom) {
	// Private Data //
	var action = "sliding icon dock",
		iconDetail = "mini icons",
		icons = 10;
	var action = function() { return action };
	var iconDetail = function() { return iconDetail };
	var icons = function() { return icons };
	return {
		// Public Data //
		"action": action,
		"iconDetail": iconDetail,
		"icons": icons,
	};
};
var action = customScreen("sliding icon dock");
var iconDetail = customScreen("mini icons");
var icons = customScreen(10);
console.log("For this custom home screen, you will input a " + action.custom() + " with " + iconDetail.custom + " for a new total of " + icons.custom() + " icons.");







