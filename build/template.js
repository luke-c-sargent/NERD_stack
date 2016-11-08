"use strict";

exports.root_wrap = function (body, title) {
	return "\n<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>" + title + "</title>\n\t\t<link rel=\"stylesheet\" href=\"/src/css/index.css\"/>\n\t</head>\n\n\t<body>\n\t\t<div id=\"root\">" + body + "</div>\n\t</body>\n\n\t<script src=\"/src/bundle.js\"></script>\n\n</html>\n\t";
};