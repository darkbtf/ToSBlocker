function filter() {
	//alert("hello");
	var tags = ['userContentWrapper', 'fbTimelineUnit'];
	var parentOrSelf = ['parent', 'self'];
	var urls = ['http://www.tosgame.com/zh', 
	'http://www.facebook.com/tos.zh',
	'http://tos.hehagame.com/Christmas2013',
	'http://www.toswikia.com/'];
	for (i = 0; i < tags.length; i++) {
		for (j = 0; j < urls.length; j++) {
			var posts = $("[class^='" + tags[i] + "']:contains('" + urls[j] + "')");
			if (parentOrSelf[i] == 'parent') posts.parent().hide();
			else posts.hide();
		}
	}
}
filter();
$(document).bind("DOMSubtreeModified", setInterval(filter, 500));