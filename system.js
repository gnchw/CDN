//主题自定义JS库
$(document).ready(function(){
	//悬浮广告
	$(".ff-fixed").each(function(i){
		feifei.scroll.fixed($(this).attr('id'));
	});
});
document.write("<script>\nvar _hmt = _hmt || [];\n(function() {\n  var hm = document.createElement(\"script\");\n  hm.src = \"https://hm.baidu.com/hm.js?1af007988ce983b54043cfdc271f051d\";\n  var s = document.getElementsByTagName(\"script\")[0]; \n  s.parentNode.insertBefore(hm, s);\n})();\n</script>");