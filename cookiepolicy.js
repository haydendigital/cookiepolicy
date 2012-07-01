$(function() {
	
	(function() {
		
		var version = "1";
		
		function getCookie(c_name) {
			var i,x,y,ARRcookies=document.cookie.split(";");
			for (i=0;i<ARRcookies.length;i++) {
				x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
				y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
				x=x.replace(/^\s+|\s+$/g,"");
				if (x==c_name) {
					return unescape(y);
				}
			}
		}
		
		// If we don't have the correct cookie, continue, otherwise give up now before wasting any more resources
		if (getCookie('cookiepolicy') !== "continue_" + version) {
		
			function setCookie(c_name,value,exdays) {
				var exdate=new Date();
				exdate.setDate(exdate.getDate() + exdays);
				var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
				document.cookie=c_name + "=" + c_value;
			}
			
			// Options
			var position = "relative"; // relative, fixed or absolute
			var fixedto = "bottom"; // 
			var messagetext = "We use cookies to ensure that we give you the best experience on our website. If you continue, we'll assume that you are happy to receive these cookies.";
			var continuetext = "Continue";
			var showmore = true;
			var moretext = "Find out more";
			var morelink = "/cookies/";
			
			// Elements
			var cookiebar = $('<div />');
			var cookiebarp = $('<p />');
			var continuea = $('<a />');
			var morea = $('<a />');
			
			// Add text and links
			cookiebarp.html(messagetext);
			continuea.text(continuetext);
			morea.text(moretext);
			continuea.attr('href', '#');
			morea.attr('href', morelink);
			
			// Styling
			cookiebar.css({
				display:'none',
				position:position,
				top:0,
				left:0,
				right:0,
				textAlign:'center',
				lineHeight:'20px',
				padding:'10px',
				backgroundColor:'#323232',
				color:'#BEBEBE',
				boxSizing:'border-box',
				fontSize:'13px',
				borderBottom:'1px solid #000'
			});
			cookiebarp.css({
			});
			linkcss = {
				textDecoration:'none',
				color:'#F6A21D',
				display:'inline-block',
				marginLeft:'1em'
			};
			linkhovercss = {
				color:'#fff'
			};
			continuea.css(linkcss);
			continuea.css({fontWeight:'bold'});
			morea.css(linkcss);
			
			// Mouseovers for links
			continuea.hover(function() {
				$(this).css(linkhovercss);
			}, function() {
				$(this).css(linkcss);
			});
			morea.hover(function() {
				$(this).css(linkhovercss);
			}, function() {
				$(this).css(linkcss);
			});
			
			// Set cookie on continue
			continuea.click(function() {
				setCookie('cookiepolicy', 'continue_' + version, 365);
				cookiebar.remove();
			});
			
			// Build
			cookiebarp.append(continuea);
			if (showmore) {
				cookiebarp.append(morea);
			}
			cookiebar.append(cookiebarp);
			
			// Add to DOM
			$('body').prepend(cookiebar);
			
			// Show
			cookiebar.show();
		
		}
			
	})();
	
});