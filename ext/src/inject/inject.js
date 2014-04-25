var changeCloneButtonLink = function() {
	var cloneInDesktopButton = $("a[href^='github-windows']");
	if(cloneInDesktopButton.length > 0){
		var cloneUrl = $("div.clone-url-box input.clone.js-url-field:visible").val();
		var cloneInDesktopUrlParts = cloneInDesktopButton.attr("href").split("github-windows://openRepo/");
		if(cloneUrl.length > 0 && cloneInDesktopUrlParts.length == 2&& (cloneInDesktopUrlParts[1] !== cloneUrl)) {
			cloneInDesktopUrlParts[0] =  "github-windows://openRepo/";
			cloneInDesktopUrlParts[1] = cloneUrl;
			console.log(cloneInDesktopUrlParts);
			cloneInDesktopButton.attr("href", cloneInDesktopUrlParts.join(""))
		}
	}	
};

var changeJSLanguageColor = function () {
	var jsBar = $("span.language-color").filter(function(){
		return $(this).text() === 'JavaScript';
	});
	jsBar.css("background-color", "#E2994F");
};

changeJSLanguageColor();
