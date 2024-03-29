/*
Zachery Hernandez
March 15, 2012
Deliverable 3
BlackBerry, Themes, SVG
Public Git Repository at: https://github.com/AlucardFair/SDI-Project-3
*/
// Device Specs //
var deviceSpecs = function (name) {
        // Private Data //
        var bold = "BlackBerry Bold 9700",
            resolution = "480px by 320px",
            icons = 6;
        var getName = function () {
                return name
            };
        var resolution = function () {
                return resolution
            };
        var icons = function () {
                return icons
            };
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
console.log("The " + bold.name() + " has a resolution of " + resolution.name() + ". This device has total of " + icons.name() + " icons on the home screen.");

// Custom Home Screen //
var customScreen = function (action, detail, limit) {
        // Private Data //
        var action = "animated hidden dock",
            detail = "mini icons",
            limit = 10;
        var getAction = function () {
                return action
            };
        var iconDetail = function () {
                return detail
            };
        var icons = function () {
                return limit
            };
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
console.log("For this custom home screen, you will input an " + action.action() + " with " + detail.detail() + " for a new total of " + limit.limit() + " icons.");

// BlackBerry Composer //
var composer = function (insert, limit, normal, resize, math, align, save) {
        // Provate Data //
        var haveInstalled = true,
            insert = "insert icons",
            limit = 10,
            normal = 80,
            resize = 2,
            math = (normal / resize),
            align = "align the new icons at the bottom",
            save = "Save and export";
        if (haveInstalled !== false) {
            console.log("Start a new project in the BlackBerry Composer.");
        } else {
            console.log("Download and install the latest versino of the BlackBerry Composer.");
        };
        var insertIcons = function () {
                return insert
            };
        var iconLimit = function () {
                return limit
            };
        var normalIcons = function () {
                return normal
            };
        var resizeIcons = function () {
                return resize
            };
        var divide = function () {
                return math
            };
        var alignIcons = function () {
                return align
            };
        var exportFile = function () {
                return save
            };
        return {
            // Public Data //
            "installed": haveInstalled,
            "insert": insertIcons,
            "limit": iconLimit,
            "normal": normalIcons,
            "resize": resizeIcons,
            "math": divide,
            "align": alignIcons,
            "save": exportFile,
        };
    };
var haveInstalled = composer(true);
var insert = composer("insert icons");
var limit = composer(10);
var normal = composer(80);
var resize = composer(2);
var math = composer(normal / resize);
var align = composer("align the new icons at the bottom");
var save = composer("save and export");
console.log("First, " + insert.insert() + ".");
console.log("All " + limit.limit() + " icons need to placed in.");
console.log("All " + limit.limit() + " have been placed in.");
console.log("Next, change the resolution from " + normal.normal() + "px by " + normal.normal() + "px to " + math.math() + "px by " + math.math() + "px.");
console.log("Now " + align.align() + " of the preview canvas. Make sure the first icon is at the bottom left and the last icon is at the bottom right before you " + align.align() + ". Now space them evenly.");
console.log(save.save() + " you SVG file.");

// Hand Code SVG //
var handCode = function (name) {
        // Private Data //
        var fileName = "svg",
            openFile = true;
        var fileName = function () {
                return name
            };
        if (openFile === true) {
            console.log("Now with the SVG file open, scroll to bottom of XML file.");
        } else {
            console.log("Open the SVG file in a text editor before you can begin.");
        };
        return {
            // Public Data //
            "name": fileName,
        };
    };
var svg = handCode("svg");

var animation = "animation",
    hidden = "hidden interaction",
    scroll = true,
    done = true;
if (scroll === true) {
    console.log("Place in the " + animation + " and the " + hidden + " codes before the closing tag.");
} else {
    console.log("You will need to scroll all the way down before you can place in the " + animation + " and the " + hidden + " codes.");
};
if (done !== true) {
    console.log("Place in the " + animation + " and " + hidden + " codes.");
} else {
    console.log("Save the file.");
};

// BlackBerry Theme Developer //
var themeDeveloper = function (open, place, navigation, save) {
        // Private Data //
        var open = "start a new",
            place = "import the SVG file",
            navigation = " set the navigation",
            save = "export";
        var openNew = function () {
                return open
            };
        var importFile = function () {
                return place
            };
        var setNavigation = function () {
                return navigation
            };
        var exportFile = function () {
                return save
            };
        return {
            // Public Data //
            "open": openNew,
            "place": importFile,
            "navigation": setNavigation,
            "save": exportFile,
        };
    };
var open = themeDeveloper("start a new");
var place = themeDeveloper("import the SVG file");
var navigation = themeDeveloper("set the navigation");
var save = themeDeveloper("export");
console.log("Open the BlackBerry Theme Studio and " + open.open() + " theme for the BlackBerry 9700.");
console.log("Now, " + place.place() + " into the BlackBerry Theme Studio.");
console.log("In the icon section " + navigation.navigation() + " to horizontal.");
console.log("Finally, " + save.save() + " your theme to your device.");

console.log("This SVG file can be used for different devices that follow the same resolution and OS.");

// Use of JSON Data //
var outputData = function (json) {
        for (var i = 0, j = json.compatibleDevices.length; i < j; i++) {
            var compatible = json.compatibleDevices[i];
            console.log("The " + compatible.name + ", OS: " + compatible.os + " is able to utilize this SVG file.");
        };

    };
outputData(json);

// Use of Second Set of Info of JSON Data //
var outputData2 = function (json) {
        for (var i = 0, k = json.notCompatibleDevices.length; i < k; i++) {
            var notCompatible = json.notCompatibleDevices[i];
            console.log("The " + notCompatible.name + ", OS: " + notCompatible.os + " is not able to utilize this SVG file.");
        };
    };
outputData2(json);

// Use of While Loop //
var n = 3;
while (n > 0) {
    console.log("Import this SVG file and export this theme for other devices. " + n + " more to go.");
    n--;
};
console.log("You have no more devices left.")

console.log("Hooray! Enjoy your new theme!");
alert("Creating a Custom Home Screen!");