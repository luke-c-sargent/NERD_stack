

exports.root_wrap = ( body, title ) => {
	return `
<!DOCTYPE html>
<html>
	<head>
		<title>${title}</title>
		<link rel="stylesheet" href="/src/css/index.css"/>
	</head>

	<body>
		<div id="root">${body}</div>
	</body>

	<script src="/src/bundle.js"></script>

</html>
	`;
};