function copyToClipboard() {
	var textArea = document.createElement("textarea");
	textArea.style.position = 'fixed';
	textArea.style.top = 0;
	textArea.style.left = 0;
	textArea.style.width = '2em';
	textArea.style.height = '2em';
	textArea.style.padding = 0;
	textArea.style.border = 'none';
	textArea.style.outline = 'none';
	textArea.style.boxShadow = 'none';
	textArea.style.background = 'transparent';
	textArea.value = "Samwa#4288";

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		var result = document.execCommand('copy');
		if (result) {
			var tooltip = document.getElementById("tooltip");
			tooltip.innerHTML = "Copied!";
			setTimeout(function(){
				var tooltip = document.getElementById("tooltip");
				tooltip.innerHTML = "Click to copy!";
			}, 5000);
		}
	} catch (err) {
		console.log('Error!');
	}

	document.body.removeChild(textArea);
}
