module.exports = (config) => {
	const markdownIt = require("markdown-it");
	const markdownItRenderer = new markdownIt({
		breaks: true, linkify: true
	});
	config.addFilter("byeRight", s => `${s.replace(" | FreedomToons","")}` );
	config.addFilter("nl2br", s => `${s.replace(/\n/g, "<br>")}` );
	config.addFilter('markdownify', s => markdownItRenderer.renderInline(s) );
}
