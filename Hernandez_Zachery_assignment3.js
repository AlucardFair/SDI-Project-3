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
	var action = "animated hidden dock",
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
var action = customScreen("animated hidden dock");
var detail = customScreen("mini icons");
var limit = customScreen(10);
console.log("For this custom home screen, you will input a " + action.action() + " with " + detail.detail() + " for a new total of " + limit.limit() + " icons.");

// BlackBerry Composer //
var composer = function(action, insert, fullSize, resize) {
	// Private Data //
	var getAction = true,
		insert = "default icons",
		fullSize = 80,
		resize = 2;
	var composer = function() {
		if (composer !== false) {
			console.log("Start a new project for the BlackBerry Bold 9700.");
		} else {
			console.log("Download and install the latest version of BlackBerry Composer.");
		};
	};
	var insert = function() { return insert };
	var resize = function() { return (fullSize / resize) };
	var fullSize = function() { return fullSize };
	return {
		// Public Data //
		"action": getAction,
		"insert": insert,
		"resize": resize,
		"fullSize": fullSize,
	};
};
var action = composer(true);
var insert = composer("default icons");
var fullSize = composer(80);
var resize = composer(2);
console.log("Import your " + insert.insert() + " into the BlackBerry Composer. Now resize your icons from " + fullSize.fullSize() + "px by " + fullSize.fullSize() + " px to " + resize.resize() + "px by " + resize.resize() + "px.");

// Use of JSON Data //
var outputData = function(json) {
	for (var i = 0, j = json.compatibleDevices.length; i < j; i++) {
		var compatible = json.compatibleDevices[i];
		console.log("The " + compatible.name + ", OS: " + compatible.os + " is able to utilize this SVG file.");
	};
};
outputData(json);

// Use of Second Set of Info of JSON Data //
var outputData2 = function(json) {
	for (var i = 0, k = json.notCompatibleDevices.length; i < k; i++) {
	var notCompatible = json.notCompatibleDevices[i];
	console.log("The " + notCompatible.name + ", OS: " + notCompatible.os + " is not able to utilize this SVG file.");
	};
};
outputData2(json);

alert("Creating a Custom Home Screen!");







